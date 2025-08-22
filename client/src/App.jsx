import "./App.css";
import TripList from "./components/TripList";

function App() {
  return (
    <div className="min-h-screen">
      <h1 className="flex justify-center items-center w-full my-10 px-4 text-3xl font-bold text-blue-500">
        เที่ยวไหนดี
      </h1>
      <TripList />
    </div>
  );
}

export default App;
