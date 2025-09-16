import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type") || "manga";
  const page = parseInt(searchParams.get("page") || "1");

  const mangas = await prisma.manga.findMany({
    where: { type },
    skip: (page - 1) * 20,
    take: 20,
  });

  // ✅ Transform to old API shape
  const transformed = mangas.map((m) => ({
    id: m.id,
    image: m.image,
    rating: "N/A",            // DB me rating nahi hai → dummy
    title: m.title,
    has_next: { has_next_link: null, is_next_link: false },
    has_prev: { has_prev_link: null, is_prev_link: false },
    total_manga: 30,
  }));

  return NextResponse.json({ data: transformed, status: "success" });
}
