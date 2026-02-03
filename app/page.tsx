import Link from "next/link";
import MainHeader from "../components/MainHeader";

export default function Home() {
  const assignments = [
    { week: "Week 2", href: "/week-2" },
    { week: "Week 3", href: "/week-3" },
    { week: "Week 4", href: "/week-4" },
  ];


  return (
    <main className="bg-slate-50 min-h-screen text-slate-900 font-sans">
      <MainHeader />
      
      <div className="max-w-2xl mx-auto p-8 mt-10 bg-white shadow-sm border border-slate-200 rounded-xl">
        <header className="mb-8 border-b border-slate-100 pb-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-800">
            CPRG 306
          </h1>
          <p className="text-slate-500 mt-2">Web Development 2 Assignments</p>
        </header>

        <section>
          <h2 className="text-lg font-semibold mb-4 text-slate-700">Coursework</h2>
          <div className="grid gap-3">
            {assignments.map((assignment) => (
              <Link 
                key={assignment.week}
                href={assignment.href}
                className="group flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-transparent hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
              >
                <span className="font-medium text-slate-700 group-hover:text-blue-700">
                  {assignment.week}
                </span>
                <span className="text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
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