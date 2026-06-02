"use client";

import { useState } from "react";

interface Props {
  locale: string;
}

export default function FeedbackSection({ locale }: Props) {
  const isGerman = locale === "de";

  const [rating, setRating] = useState(0);

  const [stats, setStats] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const submitVote = () => {
    if (!rating) return;

    setStats((prev) => ({
      ...prev,
      [rating]: prev[rating as keyof typeof prev] + 1,
    }));
  };

  const totalVotes = stats[1] + stats[2] + stats[3] + stats[4] + stats[5];

  return (
    <div className="max-w-2xl">
      <p className="text-slate-400 mb-6">
        {isGerman ? "Bewerten Sie mein Portfolio" : "Rate my portfolio"}
      </p>

      <div className="flex gap-2 mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className="text-4xl"
          >
            {star <= rating ? "★" : "☆"}
          </button>
        ))}
      </div>

      <button
        onClick={submitVote}
        className="px-4 py-2 rounded bg-blue-600 text-white"
      >
        {isGerman ? "Senden" : "Submit"}
      </button>

      <div className="mt-10">
        <h3 className="font-bold mb-4">
          {isGerman ? "Ergebnisse" : "Results"}
        </h3>

        <div>⭐⭐⭐⭐⭐ {stats[5]}</div>
        <div>⭐⭐⭐⭐ {stats[4]}</div>
        <div>⭐⭐⭐ {stats[3]}</div>
        <div>⭐⭐ {stats[2]}</div>
        <div>⭐ {stats[1]}</div>

        <div className="mt-4 font-semibold">
          {isGerman
            ? `Gesamtstimmen: ${totalVotes}`
            : `Total votes: ${totalVotes}`}
        </div>
      </div>
    </div>
  );
}
