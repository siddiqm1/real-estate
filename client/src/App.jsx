import Navbar from "./components/Navbar";
import HomePage from "./routes/HomePage";
import Register from "./routes/Register";

function App() {
  return (
    <>
      <div className="h-screen w-full 2xl:max-w-[1366px] mx-auto px-6 xl:max-w-6xl lg:max-w-4xl md:max-w-2xl font-poppins">
        <div className="">
          <Navbar />
        </div>
        <div className="h-11/12">
          <Register />
        </div>
      </div>
    </>
  );
}

export default App;
