import { getCategories } from "@/lib/api";
import HeaderClient from "./HeaderClient";
import Link from "next/link";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import styles from "./Header.module.css";

export default async function Header() {
  // const categories = await getCategories();
  return (
    <header className={styles.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={styles.navigation}>
          <li>
            {/* Пропс categories тепер не приходять з SSR */}
            <CategoriesMenu />
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {/* Відображаємо компонент */}
          <AuthNavigation />
        </ul>
      </nav>
    </header>
  );
}
