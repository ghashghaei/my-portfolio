"use client";

type Props = {
  value: number;
  onChange: (value: number) => void;
  max?: number;
};

export default function CoreRating({ value, onChange, max = 5 }: Props) {
  return (
    <div className="flex gap-1">
      {[...Array(max)].map((_, index) => {
        const star = index + 1;

        return (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className="text-3xl"
          >
            {star <= value ? "★" : "☆"}
          </button>
        );
      })}
    </div>
  );
}
