type itemProps = {
  name: string;
  quantity: number;
  category: string;
  deleteItem: (name: string) => void;
};

export default function Item(itemProps: itemProps) {
  return (
    <main className="display-item border border-slate-300 flex flex-1 flex-col justify-center p-4 rounded-md shadow-md mb-4 max-w-100 backdrop-blur-sm bg-gray-200/40 text-slate-800 hover:shadow-lg transition-shadow duration-200">
      <div className="display-item-header flex items-center justify-between mb-2">
        <h3>{itemProps.name}</h3>
        {itemProps.deleteItem && (
          <button onClick={() => itemProps.deleteItem(itemProps.name)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              alt="Delete Item Button"
              className="w-4 h-4 inline-block ml-2 hover:opacity-70 transition-opacity duration-200"
            />
          </button>
        )}
      </div>
      <p>Quantity: {itemProps.quantity}</p>
      <p>Category: {itemProps.category}</p>
    </main>
  );
}
