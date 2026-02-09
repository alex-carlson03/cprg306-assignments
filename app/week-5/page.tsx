import MainHeader from "@/components/MainHeader";
import ItemList from "@/app/week-5/itemList";

export default function page() {
  return (
    <main className="bg-slate-50 min-h-screen bg-[url(https://picsum.photos/id/1016/1920/1080?blur=3)]  bg-cover bg-fixed text-slate-900 font-sans flex flex-col items-center pb-10">
      <MainHeader />
      <h1 className="text-3xl font-bold my-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}
