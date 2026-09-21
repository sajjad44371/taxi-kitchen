import React, { use, useState } from "react";
import States from "./States";
import OrderCard from "./OrderCard";
import CookingCard from "./CookingCard";
import ServeCard from "./ServeCard";

const OrderContainer = ({ dataPromise }) => {
  const data = use(dataPromise);

  const [orderData, setOrderData] = useState(data);
  const [cookingItems, setCookingItems] = useState([]);
  const [serveItems, setServeItems] = useState([]);

  return (
    <>
      <div className="container mx-auto">
        <States
          orderData={orderData.length}
          cookingItems={cookingItems.length}
          serveItems={serveItems.length}
        ></States>
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 py-10">
          {/* right section  */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl font-bold mb-2">Current Orders</h2>
            <div className="space-y-5">
              {orderData.map((order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                  cookingItems={cookingItems}
                  setCookingItems={setCookingItems}
                ></OrderCard>
              ))}
            </div>
          </div>

          {/* left section  */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold mb-2">Cooking</h2>
              <div className="space-y-5 rounded-xl p-5 shadow">
                {cookingItems.map((order) => (
                  <CookingCard
                    key={order.id}
                    order={order}
                    serveItems={serveItems}
                    setServeItems={setServeItems}
                    cookingItems={cookingItems}
                    setCookingItems={setCookingItems}
                  ></CookingCard>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">Ready to Serve</h2>
              <div className="space-y-5 border p-5 rounded-xl shadow">
                {serveItems.map((order) => (
                  <ServeCard
                    key={order.id}
                    order={order}
                    serveItems={serveItems}
                    setServeItems={setServeItems}
                    setOrderData={setOrderData}
                    orderData={orderData}
                  ></ServeCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OrderContainer;
