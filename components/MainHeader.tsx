"use client";

import { useState } from "react";
import Link from "next/link";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const weeks: string[] = [
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
    "Week 5",
    "Week 6",
  ];

  return (
    <header className="sticky top-0 z-100 w-full backdrop-blur-md bg-white/20 border-b border-white/30 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6">
        <ul className="flex items-center justify-between h-16">
          <li>
            <Link
              href="/"
              className="text-lg font-bold text-slate-800 hover:text-blue-600 transition-colors duration-200"
            >
              CPRG 306
            </Link>
          </li>

          <div className="flex gap-8 items-center">
            <li>
              <Link
                href="/"
                className="text-slate-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>

            <li
              className="relative h-full flex items-center"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <button
                className="flex items-center text-slate-700 font-medium hover:text-blue-600 transition-colors duration-200 focus:outline-none"
                aria-expanded={isOpen}
              >
                Weeks
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Glass Dropdown Menu */}
              {isOpen && (
                <ul className="absolute top-[90%] left-5 w-48 backdrop-blur-lg bg-white/80 rounded-xl shadow-2xl border border-white/40 py-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                  {weeks.map((week) => (
                    <li key={week}>
                      <Link
                        href={`/${week.toLowerCase().replace(" ", "-")}`}
                        className="block px-4 py-2 text-slate-700 hover:bg-blue-500 hover:text-white transition-all mx-2 rounded-lg"
                      >
                        {week}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
