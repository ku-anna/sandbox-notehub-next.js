// app/(private routes)/profile/page.tsx

import Link from "next/link";
import { getServerMe } from "../../../lib/api/serverApi";

import css from "./Profile.module.css";
import Link from "next/link";
import { getServerMe } from "../../../lib/api/serverApi";

type Profile = {
  userName: string;
  email: string;
  createdAt: string;
};

const baseURL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Отримання даних профілю
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

const Profile = async () => {
  const user = await getServerMe();

  return (
    <section>
      <div>
        <h1>My Profile</h1>
        <Link href="/profile/edit">Edit profile</Link>
      </div>
      <div>
        <h2>Name: {user.userName}</h2>
        <h2>Email: {user.email}</h2>
        <p>
          Some description: Lorem ipsum dolor sit amet consectetur adipisicing
          elit...
        </p>
      </div>
    </section>
  );
};

export default Profile;
