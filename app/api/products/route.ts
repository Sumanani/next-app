import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Milk", price: 20 },
    { id: 2, name: "Bread", price: 50 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // valdate body
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json({ validation }, { status: 400 });
  return NextResponse.json(
    { id: 3, name: body.name, price: body.price },
    { status: 201 }
  );
}