/* eslint-disable react/prop-types */

export default function OrdenContents({ order, removeItem }) {
  return (
    <div>
      <h2 className="text-5xl md:text-7xl font-black text-gray-800 text-center mb-10">Consumo</h2>

      <div className="mt-10 space-y-3">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-600 py-5 last-of-type:border-b"
          >
            <div className="flex items-center space-x-4">
              <img
                className="w-16 h-16 object-cover"
                src={`/public/img/${item.image}.jpg`}
                alt={item.name}
              />
              <div>
                <p className="font-black text-3xl">{item.name}</p>
                <p className="font-black text-xl text-gray-500">
                  Cantidad: {item.quantity}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <p className="font-black text-2xl">
                {item.price * item.quantity} €
              </p>
              <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


