"use client";

import { useState } from "react";
import Link from "next/link";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const weeks: string[] = ["Week 1", "Week 2", "Week 3"]; // will add more weeks as class progresses

  return (
    <header className="bg-slate-800 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center justify-around h-16">
          <li>
            <a
              href="/"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </a>
          </li>

          <li
            className="relative group h-full flex items-center"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button
              className="flex items-center hover:text-blue-400 transition-colors duration-200 focus:outline-none"
              aria-expanded={isOpen}
            >
              Weeks
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <ul className="absolute top-full left-0 w-40 bg-white text-slate-800 rounded-b-md shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                {weeks.map((week) => (
                  <li key={week}>
                    <Link
                      href={`/${week.toLowerCase().replace(" ", "-")}`}
                      className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {week}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
