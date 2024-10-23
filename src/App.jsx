import MenuItem from "./components/MenuItem";
import OrdenContents from "./components/OrdenContents";
import OrdenTotals from "./components/OrdenTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrden from "./hooks/useOrder";

export default function Component() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrden();

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url(/img/restaurante.jpg)" }}>
      <header className=" py-5">
        <h1 className="text-center text-yellow-200  text-outline  text-8xl font-black">QuickOrder & Tip</h1>
      </header>

      <main className="flex-grow flex flex-col md:flex-row gap-10 p-5 md:p-10">
        <div className="md:w-1/2 bg-white bg-opacity-50 p-5 rounded-lg self-start">
          <h2 className="text-5xl md:text-7xl font-black text-gray-800 text-center mb-10">Menú</h2>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col">
          <div className="bg-white bg-opacity-80 p-5 rounded-lg self-start w-full">
            {order.length === 0 ? (
              <p className="text-center text-4xl md:text-7xl font-black text-red-500">
                La orden está vacía
              </p>
            ) : (
              <div className="space-y-10">
                <OrdenContents order={order} removeItem={removeItem} />
                <TipPercentageForm setTip={setTip} tip={tip} />
                <OrdenTotals order={order} tip={tip} placeOrder={placeOrder} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}