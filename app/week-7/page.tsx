"use client";

import MainHeader from "@/components/MainHeader";
import NewItem from "@/app/week-7/NewItem";
import ItemList from "@/app/week-7/item-list";
import { useState } from "react";
import ItemData from "@/app/week-7/items.json";
import Item from "./item";
import MealIdeas from "./meal-ideas";

export default function page() {
  type item = {
    id: string;
    name: string;
    quantity: number;
    category: string;
  };
  const itemData = ItemData as item[];
  const [items, setItems] = useState(itemData);
  const [selectedIngredient, setSelectedIngredient] = useState("");

  const handleAddItem = (item: item) => {
    setItems([...items, item]);
  };

  const handleSelectItem = (name: string) => {
    const cleanedName = name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        "",
      )
      .trim();
    
      
    setSelectedIngredient(cleanedName);
  };

  return (
    <main>
      <div className="bg-slate-50 min-h-screen bg-[url(https://picsum.photos/id/10/1920/1080?blur=3)]  bg-cover bg-fixed text-slate-900 font-sans flex flex-col items-center pb-10">
        <div className="fixed top-0 w-full z-10">
          <MainHeader />
        </div>
        <div className="flex items-start w-full h-fit justify-center gap-10 lg:flex-row flex-col">
          <div className="mt-24 flex flex-col items-center w-full max-w-2xl p-6 h-max-content">
            <h1 className="text-3xl font-bold my-6">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleSelectItem} />
          </div>
          <div className="mt-24 flex flex-col items-center w-full max-w-2xl p-6">
            <MealIdeas ingredient={selectedIngredient} />
          </div>
        </div>
      </div>
    </main>
  );
}
