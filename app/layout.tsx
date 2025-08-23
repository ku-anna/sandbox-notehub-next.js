// import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";

import Header from "./components/Header/Header";
import TanStackProvider from "./components/TanStackProvider/TanStackProvider";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import styles from "./layout.module.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${styles.body}`}>
        <TanStackProvider>
          <AuthProvider>
            {" "}
            {/* <-- додаємо провайдер */}
            <Header />
            <main className={styles.main}>
              {children}
              {modal}
            </main>
            <footer className={styles.footer}>
              <p>
                Created <time dateTime="2025">2025</time>
              </p>
            </footer>
          </AuthProvider>{" "}
          {/* <-- додаємо провайдер */}
        </TanStackProvider>
      </body>
    </html>
  );
}
