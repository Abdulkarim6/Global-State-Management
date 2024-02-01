import { createContext, useState } from "react";
import Parent from "./Parent/Parent";

export const Counter_Context = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount,
  };

  return (
    <section className="max-h-screen flex flex-col justify-center items-center">
      <Counter_Context.Provider value={value}>
        <Parent></Parent>
      </Counter_Context.Provider>
    </section>
  );
}

export default App;
