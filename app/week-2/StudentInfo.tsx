import Link from "next/link";

export default function StudentInfo() {
  return (
    <main className="backdrop-blur-sm bg-gray-200/40 border border-slate-300 p-8 rounded-lg shadow-md text-slate-800 max-w-100 mx-auto mt-10 hover:shadow-lg transition-shadow duration-200">
      <h1>Student Info</h1>
      <p>Name: Alexander Carlson</p>
      <p>
        Github:{" "}
        <Link
          className="textDecoration underline color to-blue-300"
          href="https://github.com/alex-carlson03"
        >
          alex-carlson03
        </Link>
      </p>
    </main>
  );
}
