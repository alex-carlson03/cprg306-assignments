import { Main } from "next/document";
import StudentInfo from "./StudentInfo";
import MainHeader from "../../components/MainHeader";

export default function Page() {
  return (
    <main className="bg-slate-50 min-h-screen bg-[url(https://picsum.photos/id/1015/1920/1080?blur=3)] bg-cover bg-fixed text-slate-900 font-sans flex flex-col items-center pb-10">
      <MainHeader />
      <div className="flex justify-center">
        <StudentInfo />
      </div>
    </main>
  );
}
