type itemProps = {
  name: string;
  quantity: number;
  category: string;
  onSelectItem?: (name: string) => void;
};

export default function Item(itemProps: itemProps) {
  return (
    <main className="display-item border border-slate-300 flex flex-1 flex-col justify-center p-4 rounded-md shadow-md mb-4 max-w-100 backdrop-blur-sm bg-gray-200/40 text-slate-800 hover:shadow-lg transition-shadow duration-200">
      <div className="display-item-header flex items-center justify-between mb-2">
        <h3>{itemProps.name}</h3>
        {itemProps.onSelectItem && (
          <button
            onClick={() =>
              itemProps.onSelectItem && itemProps.onSelectItem(itemProps.name)
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm"
          >
            Select
          </button>
        )}
      </div>
      <p>Quantity: {itemProps.quantity}</p>
      <p>Category: {itemProps.category}</p>
    </main>
  );
}
