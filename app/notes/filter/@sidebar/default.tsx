import Link from "next/link";
import { getCategories } from "@/lib/api";
import css from "./sidebar.module.css";

const NotesSidebar = async () => {
  const categories = await getCategories();

  return (
    <ul className={css.sidebar}>
      <li className={css.sidebarItem}>
        <Link href={`/notes/filter/all`}>All notes</Link>
      </li>
      {categories.map((category) => (
        <li key={category.id} className={css.sidebarItem}>
          <Link href={`/notes/filter/${category.id}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NotesSidebar;
