import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const q = (url.searchParams.get("q") || "").trim();

    const where = q ? { title: { contains: q, mode: "insensitive" } } : {};

    const results = await prisma.manga.findMany({
      where,
      orderBy: { updatedAt: "desc" },
      take: 50,
      select: { id: true, title: true, image: true, type: true, status: true },
    });

    const transformed = results.map((m) => ({
      id: m.id,
      image: m.image,
      rating: "N/A",
      title: m.title,
      type: m.type,
      status: m.status,
    }));

    return NextResponse.json({ status: "success", data: transformed });
  } catch (err) {
    console.error("search error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}