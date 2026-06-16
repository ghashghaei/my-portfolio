"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getLocale } from "../../lib/getLocale";
import CoreButton from "../ui/CoreButton/CoreButton";
import CoreRating from "../ui/CoreRating/CoreRating";

type Props = {
  locale: string;
};

type VoteData = {
  votes: Record<string, number>;
};

export default function FeedbackSection({ locale }: Props) {
  const lang = getLocale(locale);

  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const [voted, setVoted] = useState(false);

  const RATINGS = [1, 2, 3, 4, 5];

  const [stats, setStats] = useState<VoteData>({
    votes: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    },
  });

  const loadVotes = async () => {
    const response = await fetch("/api/survey");

    const result = await response.json();

    if (result.success) {
      setStats(result.data);
    }
  };

  useEffect(() => {
    const initialize = async () => {
      const response = await fetch("/api/survey");

      const result = await response.json();

      if (result.success) {
        setStats(result.data);
      }

      /*const cookie = document.cookie.includes("feedback-voted=true");

      setVoted(cookie);*/
    };

    initialize();
  }, []);

  const submitVote = async () => {
    if (!rating) return;

    await fetch("/api/survey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating,
        message,
      }),
    });

    document.cookie = "feedback-voted=true; max-age=31536000; path=/";

    setVoted(true);

    loadVotes();
  };

  const totalVotes =
    stats.votes[1] +
    stats.votes[2] +
    stats.votes[3] +
    stats.votes[4] +
    stats.votes[5];

  const averageRating =
    totalVotes === 0
      ? 0
      : (
          (stats.votes[1] * 1 +
            stats.votes[2] * 2 +
            stats.votes[3] * 3 +
            stats.votes[4] * 4 +
            stats.votes[5] * 5) /
          totalVotes
        ).toFixed(1);

  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold text-cyan-400">
        {lang.feedback.title}
      </h2>

      <p className="mt-4 text-gray-400">{lang.feedback.subtitle}</p>

      {!voted && (
        <>
          <CoreRating value={rating} onChange={setRating} />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your opinion..."
            className="w-full mt-6 p-4 rounded-xl bg-gray-900 border border-gray-700 outline-none resize-none min-h-[120px]"
          />

          <div className="mt-6">
            <CoreButton variant="primary" size="md" onClick={submitVote}>
              {lang.feedback.submit}
            </CoreButton>
          </div>
        </>
      )}

      {voted && (
        <p className="mt-6 text-green-400">{lang.feedback.alreadyVoted}</p>
      )}

      <div className="mt-10">
        <h3 className="font-bold text-xl mb-4">{lang.feedback.results}</h3>

        {[...RATINGS].reverse().map((value) => (
          <div key={value}>
            {"⭐".repeat(value)} {stats.votes[value] || 0}
          </div>
        ))}

        <div className="mt-4 font-semibold">
          {lang.feedback.totalVotes}: {totalVotes}
        </div>

        <div className="mt-2 font-semibold">
          {lang.feedback.averageRating}: {averageRating}
        </div>

        <Link
          href={`/${locale}/comments`}
          className="inline-block mt-6 text-cyan-400 hover:text-cyan-300 transition"
        >
          View Comments →
        </Link>
      </div>
    </div>
  );
}
