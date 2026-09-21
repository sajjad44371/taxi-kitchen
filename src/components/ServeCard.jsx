import React from "react";
import { toast } from "react-toastify";

const ServeCard = ({
  order,
  serveItems,
  setServeItems,
  setOrderData,
  orderData,
}) => {
  const handleServed = (order) => {
    const remainingServed = serveItems.filter((item) => item.id !== order.id);
    setServeItems(remainingServed);
    const remainingOrder = orderData.filter((item) => item.id !== order.id);
    setOrderData(remainingOrder);

    toast.success("Order Served!");
  };
  return (
    <>
      <div className="border rounded-xl p-5 shadow bg-green-50 hover:shadow-md transition">
        {/* Order Title */}
        <h3 className="text-xl font-bold text-green-700 mb-2">
          {order.order_title}
        </h3>

        {/* Table No */}
        <p className="text-gray-800">
          <span className="font-semibold">Table:</span> {order.table_no}
        </p>

        {/* Waiter ID */}
        <p className="text-gray-800">
          <span className="font-semibold">Waiter ID:</span> {order.waiterId}
        </p>

        {/* Cooking Time */}
        <p className="text-gray-600 mt-2">
          <span className="font-semibold">Cooking Time:</span> {order.cookedAt}
        </p>
        <button
          onClick={() => handleServed(order)}
          className="px-6 mt-3 py-1 shadow text-sm hover:bg-black hover:text-white bg-white cursor-pointer rounded-xl"
        >
          Served?
        </button>
      </div>
    </>
  );
};

export default ServeCard;
