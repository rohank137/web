import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const chapter = await prisma.chapter.findUnique({
      where: { id },
      select: { id: true, mangaId: true, number: true, title: true, images: true, createdAt: true },
    });

    if (!chapter) {
      return NextResponse.json({ status: "error", message: "Not found" }, { status: 404 });
    }

    return NextResponse.json({
      status: "success",
      data: {
        chapter_title: chapter.title,
        chapter_id: chapter.id,
        chapter_release: chapter.createdAt?.toISOString() || "",
        images: chapter.images,
      },
    });
  } catch (err) {
    console.error("API /mangazuna/read error:", err);
    return NextResponse.json({ status: "error", message: "Server error" }, { status: 500 });
  }
}