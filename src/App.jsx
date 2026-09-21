import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import OrderContainer from "./components/OrderContainer";
import Title from "./components/Title";
import { Bounce, ToastContainer } from "react-toastify";

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

          {/* toast alert  */}
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
          />
        </main>
      </div>
    </>
  );
}

export default App;
