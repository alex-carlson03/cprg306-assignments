import MainHeader from "../../components/MainHeader";
import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-slate-50 min-h-screen bg-[url(https://picsum.photos/seed/picsum/1920/1080?blur=3)] bg-cover bg-fixed text-slate-900 font-sans flex flex-col items-center pb-10">
      <MainHeader />
      <div className="max-w-3xl w-full bg-white/60 backdrop-blur-sm rounded-md shadow-md p-6 mt-6 flex flex-col items-center">
        <h1>Week 1</h1>
        <p>
          Week one was just an intro to web dev and an tutorial on how to create
          new Next.js projects
        </p>
      </div>
    </main>
  );
}
