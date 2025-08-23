import axios from "axios";

// Створюємо інстанс для запитів до Next.js API
const nextServer = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true, // дозволяє працювати з cookie
});

const isBrowser = typeof window !== "undefined";
const API_BASE_URL = isBrowser
  ? "/api" // коли код виконується в браузері
  : process.env.NEXT_PUBLIC_API_URL!; // коли на сервері

// Типи для нотаток
export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

// Типи для категорій
export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

// Типи для користувача
export type User = {
  id: string;
  email: string;
  userName?: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type RegisterRequest = {
  email: string;
  password: string;
  userName: string;
};

// Типи для створення нотатки
export type NewNoteData = {
  title: string;
  content: string;
  categoryId: string;
};

// Кастомна помилка
export class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApiError";
  }
}

// Запити
export const getNotes = async (categoryId?: string) => {
  const res = await nextServer.get<NoteListResponse>("/notes", {
    params: { categoryId },
  });
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await nextServer.get<Note>(`/notes/${id}`);
  return res.data;
};

export const getCategories = async () => {
  const res = await nextServer.get<Category[]>("/categories");
  return res.data;
};

export const createNote = async (data: NewNoteData) => {
  const res = await nextServer.post<Note>("/notes", data);
  return res.data;
};

export const register = async (data: RegisterRequest) => {
  const res = await nextServer.post<User>("/auth/register", data);
  return res.data;
};

// Експорт API як об'єкта
export const api = {
  getNotes,
  getSingleNote,
  getCategories,
  createNote,
  register,
};

//LOGIN

export type LoginRequest = {
  email: string;
  password: string;
};

export const login = async (data: LoginRequest) => {
  const res = await nextServer.post<User>("/auth/login", data);
  return res.data;
};

//метод checkSession реалізує перевірку сесії
type CheckSessionRequest = {
  success: boolean;
};

export const checkSession = async () => {
  const res = await nextServer.get<CheckSessionRequest>("/auth/session");
  return res.data.success;
};

// Отримання об’єкта користувача
// Наш глобальний стан повинен знати про користувача, тому зробимо ще один запит:

export const getMe = async () => {
  const { data } = await nextServer.get<User>("/auth/me");
  return data;
};
