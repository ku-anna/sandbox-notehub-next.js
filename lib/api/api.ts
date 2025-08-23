import axios from "axios";

// Створюємо інстанс для запитів до Next.js API
export const nextServer = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true, // дозволяє працювати з cookie
});
