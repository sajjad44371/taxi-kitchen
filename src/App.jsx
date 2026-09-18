import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

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
        </main>
      </div>
    </>
  );
}

export default App;
