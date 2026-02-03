"use client";

import MainHeader from "@/components/MainHeader";
import ItemList from "@/app/week-4/item-list";
import { useState } from "react";
import Item from "@/app/week-4/item";

export default function page() {
  return (
    <main className="bg-slate-50 min-h-screen bg-[url(https://picsum.photos/seed/picsum/1920/1080?grayscale&blur=3)]">
      <MainHeader />
      <ItemList />
    </main>
  );
}
