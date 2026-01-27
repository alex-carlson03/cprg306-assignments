type itemProps = {
  name: string;
  quantity: number;
  category: string;
};

export default function Item(itemProps: itemProps) {
  return (
    <main className="display-item border flex flex-1 flex-col justify-center p-4 rounded-md shadow-md mb-4 max-w-100 bg-white text-black hover:shadow-lg transition-shadow duration-200">
      <h3>{itemProps.name}</h3>
      <p>Quantity: {itemProps.quantity}</p>
      <p>Category: {itemProps.category}</p>
    </main>
  );
}
