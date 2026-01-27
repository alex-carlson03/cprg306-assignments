import React, { useState } from "react";
import Item from "@/app/week-4/item";

export default function ItemList() {
  type Item = {
    name: string;
    quantity: number;
    category: string;
  };

  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  const addItem = (event: React.FormEvent) => {
    event.preventDefault();
    const newItem: Item = { name, quantity, category };
    alert(`Item: ${name} added to inventory!`);
    setItems([...items, newItem]);
    setName("");
    setQuantity(1);
    setCategory("");
  };

  return (
    <div className="flex flex-1 justify-center flex-col items-center p-6">
      <form
        onSubmit={addItem}
        className="max-w-md mx-auto mt-10 p-8 bg-slate-200 rounded-2xl shadow-xl border border-slate-300 flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold text-slate-800 text-center">
          Add New Item
        </h2>

        <input
          className="w-full px-4 py-3 text-black rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-500"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full px-4 py-3 text-black rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-500"
          placeholder="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          type="number"
        />

        <input
          className="w-full px-4 py-3 text-black rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-500"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
        >
          Add to Inventory
        </button>
      </form>
      <div className="w-full max-w-md mt-6 flex flex-col justify-center">
        {items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}
