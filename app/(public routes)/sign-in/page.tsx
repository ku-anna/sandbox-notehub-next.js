"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login, LoginRequest, ApiError } from "@/lib/api"; // ✅ звідси
import { AxiosError } from "axios";
import css from "./Signin.module.css";

const SignIn = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (formData: FormData) => {
    try {
      const formValues = Object.fromEntries(formData) as LoginRequest;
      const res = await login(formValues);

      if (res) {
        router.push("/profile");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data?.error ?? err.message);
      } else {
        setError((err as Error).message ?? "Oops... some error");
      }
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        handleSubmit(formData);
      }}
      className={css.form}
    >
      <h1 className={css.title}>Sign in</h1>
      <label className={css.label}>
        Email
        <input type="email" name="email" required className={css.input} />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" required className={css.input} />
      </label>
      <button type="submit" className={css.button}>
        Log in
      </button>
      {error && <p className={css.error}>{error}</p>}
    </form>
  );
};

export default SignIn;
