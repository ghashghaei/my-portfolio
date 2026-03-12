"use client";
import { useState } from "react";

export default function CoreRating({ max = 5 }) {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex gap-1">
      {[...Array(max)].map((_, index) => {
        const value = index + 1;

        return (
          <button
            key={value}
            onClick={() => setRating(value)}
            className="text-2xl"
          >
            {value <= rating ? "★" : "☆"}
          </button>
        );
      })}
    </div>
  );
}
