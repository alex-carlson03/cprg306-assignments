import React, { useState } from "react";

type ItemProps = {
  onAddItem: (item: {
    id: string;
    name: string;
    quantity: number;
    category: string;
  }) => void;
};

export default function ItemList({ onAddItem }: ItemProps) {
  type Item = {
    id: string;
    name: string;
    quantity: number;
    category: string;
  };

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const categories: string[] = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other",
  ];

  return (
    <div className="flex flex-1 justify-center flex-col items-center p-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!name || name.length < 2) {
            setNameTouched(true);
            return;
          }
          onAddItem({
            id: Math.random().toString(36).substring(2, 9),
            name,
            quantity,
            category,
          });
          setName("");
          setQuantity(1);
          setCategory("");
          setNameTouched(false);
        }}
        className="max-w-md mx-auto mt-10 p-8 backdrop-blur-sm bg-white/30 rounded-2xl shadow-xl border border-slate-300 flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold text-slate-800 text-center">
          Add New Item
        </h2>

        <input
          className={
            nameTouched && (!name || name.length < 2)
              ? "w-full px-4 py-3 text-black rounded-lg border border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all placeholder:text-red-500"
              : "w-full px-4 py-3 text-black rounded-lg border border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-500"
          }
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setNameTouched(true)}
        />
        {nameTouched && (!name || name.length < 2) && (
          <p className="text-red-500 text-sm">
            * Please Enter at Least 2 Characters *
          </p>
        )}
        <input
          className="w-full px-4 py-3 text-black rounded-lg border border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-500"
          placeholder="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          type="number"
        />

        <select
          className="w-full px-4 py-3 text-black rounded-lg border border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            {categories[0]}
          </option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!name}
        >
          Add to Inventory
        </button>
      </form>
    </div>
  );
}
