"use client";

import { useEffect, useState } from "react";
import { getLocale } from "../../lib/getLocale";
import CoreButton from "../ui/CoreButton/CoreButton";

type Props = {
  locale: string;
};

type VoteData = {
  votes: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
};

export default function FeedbackSection({ locale }: Props) {
  const lang = getLocale(locale);

  const [rating, setRating] = useState(0);

  const [voted, setVoted] = useState(false);

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

    const data = await response.json();

    setStats(data);
  };

  useEffect(() => {
    loadVotes();

    const cookie = document.cookie.includes("feedback-voted=true");

    if (cookie) {
      setVoted(true);
    }
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

  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold text-cyan-400">
        {lang.feedback.title}
      </h2>

      <p className="mt-4 text-gray-400">{lang.feedback.subtitle}</p>

      {!voted && (
        <>
          <div className="flex gap-2 mt-6">
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

        <div>⭐⭐⭐⭐⭐ {stats.votes[5]}</div>
        <div>⭐⭐⭐⭐ {stats.votes[4]}</div>
        <div>⭐⭐⭐ {stats.votes[3]}</div>
        <div>⭐⭐ {stats.votes[2]}</div>
        <div>⭐ {stats.votes[1]}</div>

        <div className="mt-4 font-semibold">
          {lang.feedback.totalVotes}: {totalVotes}
        </div>
      </div>
    </div>
  );
}
