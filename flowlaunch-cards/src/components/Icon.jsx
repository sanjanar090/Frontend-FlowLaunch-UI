"use client";

import React from "react";

export function PersonCircle({ size = 48 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-200"
    >
      <circle cx="12" cy="8" r="3.2" strokeWidth="1.4" stroke="currentColor" />
      <path
        d="M4 20c1.6-4.2 6.4-6 8-6s6.4 1.8 8 6"
        strokeWidth="1.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-200"
    >
      <circle cx="12" cy="12" r="9" strokeWidth="1.4" stroke="currentColor" />
      <path
        d="M8 12.5l2.2 2.2L16 9"
        strokeWidth="1.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CrossIcon({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-200"
    >
      <circle cx="12" cy="12" r="9" strokeWidth="1.4" stroke="currentColor" />
      <path
        d="M9 9l6 6M15 9l-6 6"
        strokeWidth="1.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
