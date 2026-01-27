"use client";

import MainHeader from "@/components/MainHeader";
import ItemList from "@/app/week-4/item-list";
import { useState } from "react";
import Item from "@/app/week-4/item";

export default function page() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <MainHeader />
      <ItemList />
    </main>
  );
}
