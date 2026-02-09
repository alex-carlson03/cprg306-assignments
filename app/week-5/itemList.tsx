"use client";

import React from "react";
import items from "./items.json";
import Item from "./item";
import { useState } from "react";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="-full max-w-2xl mx-auto p-8 backdrop-blur-sm bg-white/30 rounded-2xl shadow-xl border border-slate-300 mt-10">
      <div className="flex justify-center ">
        <button
          className={`px-4 py-2 rounded-l-md border border-slate-300 hover:bg-white/40 transition-colors duration-200 ${
            sortBy === "name" ? "bg-white/40" : "bg-transparent"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 rounded-r-md border border-slate-300 hover:bg-white/40 transition-colors duration-200 ${
            sortBy === "category" ? "bg-white/40" : "bg-transparent"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>
      {/* add category names separating the categories if sorted by category */}
      <div className="max-w-3xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
