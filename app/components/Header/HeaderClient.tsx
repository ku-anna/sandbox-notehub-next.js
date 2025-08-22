"use client";

import Link from "next/link";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import css from "./Header.module.css";
import { Category } from "@/lib/api";

type Props = {
  categories: Category[];
  onToggle?: () => void;
};

export default function HeaderClient({ categories, onToggle }: Props) {
  const handleClick = () => {
    console.log("Menu opened");
    onToggle?.();
  };

  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link href="/" aria-label="Home">
          NoteHub
        </Link>
      </div>

      <nav aria-label="Main Navigation" className={css.navWrapper}>
        <ul className={css.navigation}>
          <li className={css.navItem}>
            <CategoriesMenu categories={categories} onToggle={handleClick} />
          </li>
          <li className={css.navItem}>
            <Link href="/profile" className={css.navLink}>
              Profile
            </Link>
          </li>
          <li className={css.navItem}>
            <Link href="/about" className={css.navLink}>
              About
            </Link>
          </li>
          <li className={css.navItem}>
            <Link href="/sign-in" className={css.navLink}>
              Login
            </Link>
          </li>
          <li className={css.navItem}>
            <Link href="/sign-up" className={css.navLink}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
