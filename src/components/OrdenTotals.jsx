import { useMemo } from "react";
/* eslint-disable react/prop-types */


export default function OrdenTotals({ order, tip, placeOrder }) {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subTotalAmount * tip, [subTotalAmount, tip]);
  const totalAmount = useMemo(
    () => subTotalAmount + tipAmount,
    [subTotalAmount, tipAmount]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-3xl">Totales y propina:</h2>
        <p className="text-xl text-gray-500 font-black">
        Subtotal a pagar: <span className="font-black text-black text-2xl">{subTotalAmount} €</span>
        </p>
        <p className="text-xl  text-gray-500 font-black">
          Propina: <span className="font-black text-black text-2xl">{tipAmount} €</span>
        </p>
        <p className="text-xl  text-gray-500 font-black">
          Total a pagar: <span className="font-black text-black text-2xl">{totalAmount} €</span>
        </p>
      </div>

      <button
        className="w-full bg-black p-3 text-xl uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Pagar orden
      </button>
    </>
  );
}


