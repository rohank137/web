import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET() {
  try {
    const results = await prisma.manga.findMany({
      orderBy: { updatedAt: "desc" },
      take: 12,
      select: { id: true, title: true, image: true },
    });

    const transformed = results.map((m) => ({
      id: m.id,
      image: m.image,
      rating: "N/A",
      title: m.title,
    }));

    return NextResponse.json({ status: "success", data: transformed });
  } catch (err) {
    console.error("projectupdated error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}