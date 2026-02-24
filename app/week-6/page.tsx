"use client";

import MainHeader from "@/components/MainHeader";
import NewItem from "@/app/week-6/NewItem";
import ItemList from "@/app/week-6/itemList";
import { useState } from "react";
import ItemData from "@/app/week-6/items.json";
import Item from "./item";

export default function page() {
  type item = {
    id: string;
    name: string;
    quantity: number;
    category: string;
  };
  const itemData = ItemData as item[];
  const [items, setItems] = useState(itemData);

  const handleAddItem = (item: item) => {
    setItems([...items, item]);
  };

  return (
    <main className="bg-slate-50 min-h-screen bg-[url(https://picsum.photos/id/10/1920/1080?blur=3)]  bg-cover bg-fixed text-slate-900 font-sans flex flex-col items-center pb-10">
      <div className="fixed top-0 w-full z-10">
        <MainHeader />
      </div>
      <div className="mt-24 ">
        <h1 className="text-3xl font-bold my-6">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
