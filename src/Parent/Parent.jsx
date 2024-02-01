import { useContext } from "react";
import Child from "../Child/Child";
import { Counter_Context } from "../App";

const Parent = () => {
    const {count} = useContext(Counter_Context)
  return (
    <section>
      <div className="mt-12 h-48 w-96 bg-green-400 shadow-lg">
        <h1 className="text-3xl text-left p-5 font-bold">Parent</h1>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center font-bold">{count}</h1>
        </div>
      </div>
      <Child></Child>
    </section>
  );
};

export default Parent;
