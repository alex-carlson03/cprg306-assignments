import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Assignments:</h1>
      <p>
        Week-2:{" "}
        <Link className="textDecoration underline" href="/week-2">
          here
        </Link>
      </p>
    </main>
  );
}
