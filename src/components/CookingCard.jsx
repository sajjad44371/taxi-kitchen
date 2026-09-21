import React from "react";
import { toast } from "react-toastify";

const CookingCard = ({
  order,
  serveItems,
  setServeItems,
  cookingItems,
  setCookingItems,
}) => {
  const handleCooked = (order) => {
    order.cookedAt = new Date().toLocaleTimeString();
    const newItem = [order, ...serveItems];
    setServeItems(newItem);

    const remainingCookingItems = cookingItems.filter(
      (item) => item.id !== order.id,
    );
    setCookingItems(remainingCookingItems);

    toast.success("Order is ready to serve!!");
  };

  return (
    <>
      <div
        className="rounded-xl p-5 shadow hover:shadow-lg"
        style={{
          background:
            "linear-gradient(#ffffff90, #FCB700), url('/cook-bg.gif')",
        }}
      >
        {/* Title */}
        <h3 className="text-xl font-bold text-primary mb-2">
          {order.order_title}
        </h3>

        {/* Quantity */}
        <p className="text-lg font-semibold">
          Quantity: <span className="text-gray-700">{order.quantity}</span>
        </p>

        {/* Special Instruction */}
        <p className="text-xs text-gray-600 mt-2 italic">
          {order.special_instruction}
        </p>

        {/* Static Button */}
        <button
          onClick={() => handleCooked(order)}
          className="px-6 mt-3 py-1 shadow text-sm hover:bg-black hover:text-white bg-white cursor-pointer rounded-xl"
        >
          Cooked?
        </button>
      </div>
    </>
  );
};

export default CookingCard;
