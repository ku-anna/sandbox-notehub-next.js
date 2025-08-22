// app/profile/page.tsx

import React from "react";
import css from "./Profile.module.css";

type Profile = {
  userName: string;
  email: string;
  createdAt: string;
};

const baseURL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const res = await fetch(`${baseURL}/api/profile`, {
  credentials: "include",
  cache: "no-store",
});

// Функція для отримання даних профілю з API
async function getProfileData(): Promise<Profile> {
  const res = await fetch(`${baseURL}/api/profile`, {
    credentials: "include",
    cache: "no-store", // завжди свіжі дані
  });
  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }
  return res.json();
}

export default async function ProfilePage() {
  let profile: Profile;

  try {
    profile = await getProfileData();
  } catch (err) {
    return (
      <div className={css.container}>
        {/* Показуємо повідомлення, якщо не вдалось завантажити */}
        <p className={css.error}>
          Помилка завантаження профілю. Будь ласка, увійдіть.
        </p>
      </div>
    );
  }

  return (
    <div className={css.container}>
      {/* Заголовок сторінки */}
      <h1 className={css.title}>Профіль користувача</h1>

      {/* Інформація про юзера */}
      <div className={css.info}>
        <p>
          <strong>Username:</strong> {profile.userName}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        <p>
          <strong>Приєднався:</strong>{" "}
          {new Date(profile.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
