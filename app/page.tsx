import Link from "next/link";
import MainHeader from "../components/MainHeader";
import { Main } from "next/document";

export default function Home() {
  const assignments = [
    { week: "Week 1", href: "/week-1" },
    { week: "Week 2", href: "/week-2" },
    { week: "Week 3", href: "/week-3" },
    { week: "Week 4", href: "/week-4" },
    { week: "Week 5", href: "/week-5" },
  ];

  return (
    <main className="bg-slate-50 min-h-screen bg-[url(https://picsum.photos/id/29/1920/1080?blur=3)] bg-cover bg-fixed text-slate-900 font-sans flex flex-col items-center pb-10">
      <MainHeader />
      <div className="w-full max-w-2xl mx-auto p-8 backdrop-blur-sm bg-white/30 rounded-2xl shadow-xl border border-slate-300 mt-10">
        <header className="mb-8 border-b border-white/20 pb-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-800">
            CPRG 306
          </h1>
          <p className="text-slate-600 mt-2 font-medium">
            Web Development 2 Assignments
          </p>
        </header>

        <section>
          <h2 className="text-lg font-semibold mb-4 text-slate-700">
            Coursework
          </h2>
          <div className="grid gap-3">
            {assignments.map((assignment) => (
              <Link
                key={assignment.week}
                href={assignment.href}
                className="group flex items-center justify-between p-4 bg-white/40 rounded-lg border border-white/20 hover:border-blue-400 hover:bg-white/60 transition-all duration-200 shadow-sm"
              >
                <span className="font-medium text-slate-800 group-hover:text-blue-800">
                  {assignment.week}
                </span>
                <span className="text-sm font-bold text-blue-700 group-hover:translate-x-1 transition-transform">
                  View Assignment →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
