// components/AuthProvider/AuthProvider.tsx
// Провайдер авторизації
// Тепер створимо провайдер AuthProvider, який:
// перевіряє сесію через checkSession
// за потреби отримує дані користувача
// оновлює глобальний стан
// скидає його, якщо сесія не валідна

"use client";

import { checkSession, getMe } from "../../../lib/api/clientApi";
import { useAuthStore } from "@/lib/stores/authStore";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const setUser = useAuthStore((state) => state.setUser);
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated
  );

  useEffect(() => {
    const fetchUser = async () => {
      // Перевіряємо сесію
      const isAuthenticated = await checkSession();
      if (isAuthenticated) {
        // Якщо сесія валідна — отримуємо користувача
        const user = await getMe();
        if (user) setUser(user);
      } else {
        // Якщо сесія невалідна — чистимо стан
        clearIsAuthenticated();
      }
    };
    fetchUser();
  }, [setUser, clearIsAuthenticated]);

  return children;
};

export default AuthProvider;
