import Link from "next/link";
import MainHeader from "../components/MainHeader";

export default function Home() {
  return (
    <main>
      <MainHeader />
      <h1>Assignments:</h1>
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
    </main>
  );
}
