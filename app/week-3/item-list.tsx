import Item from "./item";

const items = [
  {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  },
  {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  },
  {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  },
  {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  },
  {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  },
  {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  },
  {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  },
  {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  },
  {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  },
  {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  },
  {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  },
  {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  },
];

// renders as a list of items, two columns on larger screens, single column on smaller screens

export default function ItemList() {
  return (
    <div className="min-h-screen bg-[url(https://www.salon.com/app/uploads/2021/08/farmers-market-produce-0812211-1024x691.jpg)] bg-cover min-h-screen  p-8 ">
      <div className="backdrop-blur-sm bg-white/30 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">
          Shopping list
        </h1>
        <div className="max-w-3xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
    </div>
  );
}
