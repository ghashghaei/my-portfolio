import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { getLocale } from "@/app/lib/getLocale";

type Comment = {
  rating: number;
  message: string;
  createdAt: string;
};

const filePath = path.join(process.cwd(), "data", "survey.json");

export default async function CommentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const lang = getLocale(locale);

  let comments: Comment[] = [];

  try {
    const file = await fs.readFile(filePath, "utf8");

    const data = JSON.parse(file);

    comments = data.comments || [];
  } catch (error) {
    console.error("Comments Page Error:", error);
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href={`/${locale}`}
        className="inline-flex items-center mb-8 text-cyan-400 hover:text-cyan-300 transition"
      >
        ← {lang.comments.backToHome}
      </Link>

      <h1>{lang.comments.title}</h1>

      {comments.length === 0 ? (
        <div className="rounded-2xl border border-gray-800 p-6">
          <p>{lang.comments.empty}</p>
        </div>
      ) : (
        comments
          .slice()
          .reverse()
          .map((comment, index) => (
            <div
              key={index}
              className="mb-6 p-6 rounded-2xl border border-gray-800 bg-black/30"
            >
              <div className="text-yellow-400 mb-3 text-lg">
                {"⭐".repeat(comment.rating)}
              </div>

              <p className="text-gray-300 whitespace-pre-wrap">
                {comment.message}
              </p>

              <div className="mt-4 text-sm text-gray-500">
                {new Date(comment.createdAt).toLocaleString()}
              </div>
            </div>
          ))
      )}
    </div>
  );
}
