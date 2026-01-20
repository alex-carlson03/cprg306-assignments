// should accept name quantity and category as props and render them appropriately
export default function Item({
  name,
  quantity,
  category,
}: {
  name: string;
  quantity: number;
  category: string;
}) {
  return (
    <div className="display-item border p-4 rounded-md shadow-md mb-4 max-w-100 bg-white text-black hover:shadow-lg transition-shadow duration-200">
      <h1 className="text-1.5xl font-bold">{name}</h1>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </div>
  );
}
