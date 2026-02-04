"use client";

import MainHeader from "@/components/MainHeader";
import ItemList from "@/app/week-4/item-list";
import { useState } from "react";
import Item from "@/app/week-4/item";

export default function page() {
  return (
    <main className="bg-slate-50 min-h-screen bg-[url(https://picsum.photos/id/327/1920/1080?blur=3)]  bg-cover bg-fixed text-slate-900 font-sans flex flex-col items-center pb-10">
      <MainHeader />
      <ItemList />
    </main>
  );
}
