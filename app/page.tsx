import Link from "next/link";
import MainHeader from "../components/MainHeader";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen text-black">
      <MainHeader />
      <div className="p-8 mx-auto">
        <h1>CPRG 306</h1>
        <p>Assignments:</p>
        <p>
          Week-2:{" "}
          <Link className="textDecoration underline" href="/week-2">
            here
          </Link>
        </p>
        <p>
          Week-3:{" "}
          <Link className="textDecoration underline" href="/week-3">
            here
          </Link>
        </p>
        <p>
          Week-4:{" "}
          <Link className="textDecoration underline" href="/week-4">
            here
          </Link>
        </p>
      </div>
    </main>
  );
}
