import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const manga = await prisma.manga.findUnique({
    where: { id: params.id },
    include: { chapters: true },
  });

  if (!manga) return NextResponse.json({ status: "error", message: "Not found" }, { status: 404 });

  const transformed = {
    status: "success",
    data: {
      title: manga.title,
      image: manga.image,
      type: manga.type,
      status: manga.status || "unknown",
      rating: "N/A",
      description: manga.description,
      genres: [], // abhi nahi hai
      published: manga.createdAt.toISOString(),
      author: "Unknown",
      total_chapter: manga.chapters.length.toString(),
      bookmark_users: "0",
      chapter_list: manga.chapters.map((ch) => ({
        chapter_title: ch.title,
        chapter_slug: ch.id,
        chapter_release: ch.createdAt.toISOString(),
      })),
    },
  };

  return NextResponse.json(transformed);
}