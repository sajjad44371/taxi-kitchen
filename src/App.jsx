import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import OrderContainer from "./components/OrderContainer";
import Title from "./components/Title";

const dataPromise = fetch("/orders.json").then((res) => res.json());

function App() {
  return (
    <>
      <div>
        <header className="container mx-auto py-5">
          <Navbar></Navbar>
        </header>
        <main>
          <section>
            <Title>Kitchen Room</Title>
          </section>
          <section className="container mx-auto">
            <Suspense fallback={<h2>Data Loading ...</h2>}>
              <OrderContainer dataPromise={dataPromise}></OrderContainer>
            </Suspense>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
