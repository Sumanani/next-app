import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  if (id > 10)
    return NextResponse.json({ error: "product not found" }, { status: 404 });
  return NextResponse.json({ id: id, name: "Eggs", price: 6 });
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation, { status: 400 });
  if (id > 10)
    return NextResponse.json({ error: "product not found" }, { status: 404 });
  return NextResponse.json({ id: id, name: body.name, price: body.price });
}

export function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  if (id > 10)
    return NextResponse.json({ error: "product not found" }, { status: 404 });
  return NextResponse.json({ message: "product deleted" });
}
