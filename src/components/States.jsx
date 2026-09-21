import { CookingPot, ScrollText, TicketCheck } from "lucide-react";
import React from "react";

const States = ({ orderData, cookingItems, serveItems }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* total orders  */}
        <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <ScrollText className="animate-pulse" color="#fcb700" size={100} />
            <div className="text-xl text-center">
              Current Orders
              <h2 className="text-6xl font-bold">{orderData}</h2>
            </div>
          </div>
        </div>

        {/* cooking  */}
        <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <CookingPot className="animate-pulse" color="#fcb700" size={100} />
            <div className="text-xl text-center">
              Current Cooking
              <h2 className="text-6xl font-bold">{cookingItems}</h2>
            </div>
          </div>
        </div>

        {/*  ready  */}
        <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <TicketCheck className="animate-pulse" color="#fcb700" size={100} />
            <div className="text-xl text-center">
              Ready to Serve
              <h2 className="text-6xl font-bold">{serveItems}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default States;
