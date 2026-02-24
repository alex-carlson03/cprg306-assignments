"use client";

import React from "react";
import items from "./items.json";
import Item from "./item";
import { useState } from "react";

type ItemListProps = {
  items: {
    id: string;
    name: string;
    quantity: number;
    category: string;
  }[];
};

const ItemList = ({ items }: ItemListProps) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // 1. Group the items first
  const groups = items.reduce((acc: { [key: string]: typeof items }, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  // 2. Sort the keys and build a new sorted object
  const groupedItemsAlphabetical = Object.keys(groups)
    .sort() // Sorts categories alphabetically
    .reduce((acc: { [key: string]: typeof items }, key) => {
      // Sort by category and then by name within each category
      acc[key] = groups[key].sort((a, b) => a.name.localeCompare(b.name));
      return acc;
    }, {});

  return (
    <div className="-full max-w-2xl mx-auto p-8 backdrop-blur-sm bg-white/30 rounded-2xl shadow-xl border border-slate-300 mt-10">
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 rounded-l-md border border-slate-300 hover:bg-white/40 transition-colors duration-200 ${
            sortBy === "name" ? "bg-white/40" : "bg-transparent"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 border border-slate-300 hover:bg-white/40 transition-colors duration-200 ${
            sortBy === "category" ? "bg-white/40" : "bg-transparent"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
        <button
          className={`px-4 py-2 rounded-r-md border border-slate-300 hover:bg-white/40 transition-colors duration-200 ${
            sortBy === "grouped" ? "bg-white/40" : "bg-transparent"
          }`}
          onClick={() => setSortBy("grouped")}
        >
          Group by Category
        </button>
      </div>
      <div
        className={
          sortBy === "grouped"
            ? "mt-6"
            : "mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
        }
      >
        {sortBy === "grouped"
          ? Object.keys(groupedItemsAlphabetical).map((category) => (
              <div key={category}>
                <h2 className="text-xl font-bold mb-2">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {groupedItemsAlphabetical[category].map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
                </div>
              </div>
            ))
          : sortedItems.map((item) => (
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
