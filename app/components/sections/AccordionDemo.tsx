"use client";

import { useState } from "react";

export default function AccordionDemo() {
  const [openId, setOpenId] = useState<string | null>(null);

  const items = [
    { id: "1", title: "Frontend", content: "React, TS, API" },
    { id: "2", title: "UI", content: "Design System, Components" },
    { id: "3", title: "Freelance", content: "Client projects, Contract work" },
  ];

  return (
    <div className="border p-6 rounded-lg border-slate-700 flex flex-col gap-4">
      <h3>Accordion</h3>

      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className="border rounded-md">
            <div
              className="p-3 flex justify-between cursor-pointer"
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              {item.title}
              <span className={isOpen ? "rotate-180" : ""}>▼</span>
            </div>

            <div
              className={`overflow-hidden transition-all ${
                isOpen ? "max-h-40 p-3" : "max-h-0"
              }`}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
