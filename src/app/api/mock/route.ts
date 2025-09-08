export async function GET() {
  const sample = {
    results: [
      { id: "1", title: "Sample Manga 1", url: "/mock/1", image: "/sample1.jpg" },
      { id: "2", title: "Sample Manga 2", url: "/mock/2", image: "/sample2.jpg" }
    ]
  };
  return new Response(JSON.stringify(sample), { status: 200, headers: { "Content-Type": "application/json" } });
}