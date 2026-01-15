import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
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
