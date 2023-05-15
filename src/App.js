import "./App.css";
import Input from "./components/Input";
import { UseTimer } from "./components/UseTimer";
import { useCounter } from "./hooks/counter";

function App() {
  const { count, inc, dec, reset } = useCounter();
  return (
    <>
       <UseTimer/>
    <div>
         <h1>{count} </h1>
         <button onClick={() => inc(4)}>increment</button>
         <button onClick={() => dec(2)}>decrement</button>
         <button onClick={reset}>reset</button>
         
    </div>
    <Input />
    </>
   
  );
}

export default App;
