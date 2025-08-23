// app/api/categories/route.ts

import { api, ApiError } from "../../../lib/api/api";
import axios from "axios";

// export async function GET() {
//   try {
//     const { data } = await api("/categories"); // Повертаємо те, що відповів бекенд через метод json

//     return NextResponse.json(data);
//   } catch (error) {
//     // У випадку помилки — повертаємо обʼєкт з помилкою
//     return NextResponse.json(
//       {
//         error:
//           (error as ApiError).response?.data?.error ??
//           (error as ApiError).message,
//       },
//       { status: (error as ApiError).status }
//     );
//   }
// }
export const apiInstance = axios.create({
  baseURL: "https://next-docs-api.onrender.com",
  withCredentials: true, // також додаємо цей параметр
});

import { NextResponse } from "next/server";

const categories = [
  {
    id: "1",
    name: "Work",
    description: "Work notes",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Personal",
    description: "Personal notes",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(categories);
}
