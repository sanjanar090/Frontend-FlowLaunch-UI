"use client";

import React, { useState } from "react";
import Card from "../components/Card"; // relative path
import { FaRocket } from "react-icons/fa";

const initialData = [
  { id: 1, name: "Alice Johnson", designation: "Frontend Engineer", active: false },
  { id: 2, name: "Marcus Lee", designation: "Full Stack Intern", active: true },
  { id: 3, name: "Priya Patel", designation: "UI/UX Designer", active: false },
];

export default function Page() {
  const [items, setItems] = useState(initialData);
  const [markAllInactive, setMarkAllInactive] = useState(false);

  const toggleActive = (id) => {
    setItems(prev => prev.map(it => (it.id === id ? { ...it, active: !it.active } : it)));
  };

  const handleClickBtn = (id) => {
    const it = items.find(x => x.id === id);
    if (!it || !it.active) return;
    alert(`${it.name} — button clicked (active)`);
  };

  const handleMarkAllChange = (e) => {
    const checked = e.target.checked;
    setMarkAllInactive(checked);
    if (checked) {
      setItems(prev => prev.map(it => ({ ...it, active: false })));
    } else {
      setItems(prev => prev.map(it => (it.id === 2 ? { ...it, active: true } : { ...it, active: false })));
    }
  };

  return (
    <main className="min-h-screen p-8 flex flex-col items-center gap-6 bg-gray-50 text-gray-900">
      <header className="max-w-4xl w-full flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-3 text-gray-900">
          <FaRocket className="text-indigo-600 animate-bounce" />
          FlowLaunch — Candidate Cards
        </h1>

        <label className="inline-flex items-center gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            className="w-4 h-4 accent-indigo-600"
            checked={markAllInactive}
            onChange={handleMarkAllChange}
          />
          <span className="text-sm text-gray-900">Mark all inactive</span>
        </label>
      </header>

      <section className="max-w-4xl w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map(item => (
            <Card
              key={item.id}
              item={item}
              onToggleActive={toggleActive}
              onClickBtn={handleClickBtn}
              highlight={item.id === 2 && item.active} // highlight only if active
            />
          ))}
        </div>
      </section>
    </main>
  );
}
