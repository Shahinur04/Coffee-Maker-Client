import { useLoaderData } from "react-router-dom";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const coffees = useLoaderData();

  return (
    <div className="m-20">
      <h1 className="text-5xl text-center text-lime-800 my-20">
        Hot hot cold coffee:{coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
      {
        coffees.map(coffee=><Card key={coffee._id}
        coffee={coffee}></Card>)
      }
      </div>
    </div>
  );
}

export default App;
