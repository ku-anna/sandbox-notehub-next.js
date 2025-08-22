import { NextRequest, NextResponse } from "next/server";

// Тимчасове сховище (в реальному проєкті — база або session)
let userProfile: {
  userName: string;
  email: string;
  createdAt: string;
} | null = null;

// Обробка POST-запиту — збереження даних
export async function POST(req: NextRequest) {
  const body = await req.json();

  const { userName, email } = body;

  if (!userName || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  userProfile = {
    userName,
    email,
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json({ success: true });
}

// Обробка GET-запиту — повернення даних
export async function GET() {
  if (!userProfile) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(userProfile);
}
