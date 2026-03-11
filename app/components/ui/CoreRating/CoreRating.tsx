"use client";

import { useState } from "react";

interface CoreRatingProps {
  max?: number;
  defaultValue?: number;
}

export default function CoreRating({
  max = 5,
  defaultValue = 0,
}: CoreRatingProps) {
  const [rating, setRating] = useState(defaultValue);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-1">
      {[...Array(max)].map((_, index) => {
        const value = index + 1;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setRating(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(null)}
            className="text-2xl transition-transform hover:scale-110"
          >
            {value <= (hover ?? rating) ? "★" : "☆"}
          </button>
        );
      })}
    </div>
  );
}
