import { useContext } from "react";
import { Counter_Context } from "../App";

const Child = () => {

    const {count, setCount} = useContext(Counter_Context)
  
  return (
    <section className="h-56 mt-6 w-96 bg-green-400 shadow-lg">
      <h1 className="text-3xl text-left p-5 font-bold">Child</h1>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center font-bold mb-12">{count}</h1>

        <div>
          <button
            className="bg-blue-500 p-2 mx-2 text-2xl font-semibold rounded"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="bg-red-500 p-2 mx-2  text-2xl font-semibold rounded"
            onClick={() => setCount((pre) => pre - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
    </section>
  );
};

export default Child;
