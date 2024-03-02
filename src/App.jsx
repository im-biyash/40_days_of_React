import { useEffect, useState } from "react";
import axios from "axios";
import Statecolor from "./Components/Statecolor";
import Interview from "./Components/Interview";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import { counterContext } from "./context/context";
import Todo from "./Components/Todo";
function App() {
  // const [count, setCount] = useState(0);

  // const handleCount = () => {
  //   setCount(count + 1);
  // };


  return (
    <>
    {/* <counterContext.Provider value={count}>
      <div className=" flex flex-col justify-center items-center ali h-screen bg-black">
        <Statecolor/>
      </div>
      
    </counterContext.Provider> */}
    <Todo/>
    </>
  );
}

export default App;
