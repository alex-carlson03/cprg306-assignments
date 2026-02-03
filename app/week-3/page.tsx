import MainHeader from "@/components/MainHeader";
import ItemList from "./item-list";

export default function page() {
  return (
    <main className="min-h-screen bg-[url(https://www.salon.com/app/uploads/2021/08/farmers-market-produce-0812211-1024x691.jpg)] bg-cover">
      <MainHeader />
      <div className="backdrop-blur-sm bg-white/30 rounded-lg shadow-lg p-6 min-h-screen">
        <ItemList />
      </div>
    </main>
  );
}
