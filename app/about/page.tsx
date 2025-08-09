// app/about/page.tsx

import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "About page",
};

const About = () => {
  redirect("/");
  return null;
};

export default About;

// redirect() – це функція, яка зупиняє виконання компонента й одразу перенаправляє користувача.
// Повернення JSX після виклику redirect() не має сенсу – воно не буде виконано.
