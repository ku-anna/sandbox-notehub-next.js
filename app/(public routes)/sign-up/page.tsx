// app/(public routes)/sign-up/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { register, RegisterRequest } from "../../../lib/api/clientApi";
import { useAuthStore } from "@/lib/stores/authStore";
import { ApiError } from "../../../lib/api/clientApi";
import css from "./Signup.module.css";

const SignUp = () => {
  const router = useRouter();
  const [error, setError] = useState(""); // Отримуємо метод із стора
  const setUser = useAuthStore((state) => state.setUser);

  const handleSubmit = async (formData: FormData) => {
    try {
      const formValues = Object.fromEntries(formData) as RegisterRequest;
      const res = await register(formValues);
      if (res) {
        // Записуємо користувача у глобальний стан
        setUser(res);
        router.push("/profile");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError(
        (error as ApiError).response?.data?.error ??
          (error as ApiError).message ??
          "Oops... some error"
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
};

export default SignUp;
