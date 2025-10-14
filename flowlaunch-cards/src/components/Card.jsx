"use client";

import React from "react";
import { PersonCircle, CheckIcon, CrossIcon } from "./Icon";

export default function Card({ item, onToggleActive, onClickBtn, highlight = false }) {
  return (
    <div
      className={`flex flex-col items-center p-6 rounded-2xl w-64 min-h-[380px] transition-all duration-300 border
        ${item.active
          ? "border-indigo-100 bg-indigo-50 shadow-lg hover:shadow-xl hover:border-indigo-100"
          : "border-indigo-200 bg-white hover:shadow-md hover:border-indigo-300"
        }
        ${highlight ? "ring-4 ring-indigo-400" : ""}`}
    >
      <div
        className={`w-20 h-20 mb-4 rounded-full flex items-center justify-center transition
          ${item.active ? "bg-indigo-100 text-indigo-600" : "bg-gray-100 text-gray-400"}`}
      >
        <PersonCircle size={48} />
      </div>

      <span
        className={`px-3 py-1 rounded-full text-sm font-medium mb-4 transition-all
          ${item.active ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"}`}
      >
        {item.active ? "ACTIVE" : "INACTIVE"}
      </span>

      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.designation}</p>
      </div>

      <button
        onClick={() => onToggleActive(item.id)}
        className={`p-3 mb-4 rounded-full border-2 transition-all duration-200
          ${item.active
            ? "border-green-400 text-green-600 hover:bg-green-50"
            : "border-gray-300 text-gray-400 hover:bg-gray-100"}`}
      >
        {item.active ? <CheckIcon /> : <CrossIcon />}
      </button>

      <button
        onClick={() => onClickBtn(item.id)}
        disabled={!item.active}
        className={`w-full mt-auto py-2 rounded-lg font-medium transition
          ${item.active
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}
      >
        VIEW PROFILE
      </button>

      <div className="mt-4 w-full flex items-center justify-between text-xs text-gray-400">
        <span>Candidate ID: {item.id}</span>
      </div>
    </div>
  );
}
