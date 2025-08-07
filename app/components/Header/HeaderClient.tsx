"use client";

import Link from "next/link";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import css from "./Header.module.css";
import { Category } from "@/lib/api";

type Props = {
  categories: Category[];
};

export default function HeaderClient({ categories }: Props) {
  const handleClick = () => {
    console.log("Menu opened");
  };

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navList}>
          <li>
            <CategoriesMenu categories={categories} />
          </li>
          <li>
            <button onClick={handleClick}>Open menu</button>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
