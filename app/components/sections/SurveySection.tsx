"use client";

import { useState } from "react";

export default function SurveySection() {
  const [selected, setSelected] = useState("");

  const submitVote = () => {
    if (!selected) return;

    console.log("Vote:", selected);

    alert("Thanks for your feedback!");
  };

  return (
    <div className="mt-20 border border-slate-700 rounded-xl p-6">
      <h3 className="text-2xl font-bold mb-4">
        How do you rate this portfolio?
      </h3>

      <div className="flex flex-col gap-3">
        <label>
          <input
            type="radio"
            value="excellent"
            checked={selected === "excellent"}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span className="ml-2">Excellent</span>
        </label>

        <label>
          <input
            type="radio"
            value="good"
            checked={selected === "good"}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span className="ml-2">Good</span>
        </label>

        <label>
          <input
            type="radio"
            value="average"
            checked={selected === "average"}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span className="ml-2">Average</span>
        </label>
      </div>

      <button
        onClick={submitVote}
        className="mt-6 px-4 py-2 bg-cyan-500 rounded"
      >
        Submit
      </button>
    </div>
  );
}
