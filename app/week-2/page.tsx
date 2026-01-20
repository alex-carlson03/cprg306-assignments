import { Main } from "next/document";
import StudentInfo from "./StudentInfo";
import MainHeader from "../../components/MainHeader";

export default function Page() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <MainHeader />
      <div className="flex justify-center">
        <StudentInfo />
      </div>
    </main>
  );
}
