"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { register, RegisterRequest } from "@/lib/api";
import css from "./Signup.module.css";

export default function SignUp() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (formData: FormData) => {
    try {
      const formValues = Object.fromEntries(formData) as RegisterRequest;

      // Виконуємо реєстрацію
      await register(formValues);

      // Якщо все ок → редірект на профіль
      router.push("/profile");
    } catch (err: any) {
      setError(
        err?.response?.data?.error ??
          err?.message ??
          "Oops... щось пішло не так"
      );
    }
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Sign Up</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(new FormData(e.currentTarget));
        }}
        className={css.form}
      >
        <label className={css.label}>
          Username
          <input type="text" name="userName" required className={css.input} />
        </label>

        <label className={css.label}>
          Email
          <input type="email" name="email" required className={css.input} />
        </label>

        <label className={css.label}>
          Password
          <input
            type="password"
            name="password"
            required
            className={css.input}
          />
        </label>

        <button type="submit" className={css.button}>
          Register
        </button>
      </form>

      {error && <p className={css.error}>{error}</p>}
    </div>
  );
}
