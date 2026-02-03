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

  const addItem = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || name.length < 2) {
      setNameTouched(true);
      return;
    }
    const newItem: Item = { name, quantity, category };
    setItems([...items, newItem]);
    setName("");
    setQuantity(1);
    setCategory("");
    setNameTouched(false);
    alert(`Item: ${name} added to inventory!`);
  };

  return (
    <div className="flex flex-1 justify-center flex-col items-center p-6">
      <form
        onSubmit={addItem}
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

        {
          //TODO category dropdown}
        }
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
      <div className=" flex flex-col w-full max-w-md mt-8 px-4">
        {items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            deleteItem={(name: string) => {
              setItems(items.filter((itm) => itm.name !== name));
            }}
          />
        ))}
      </div>
    </div>
  );
}
