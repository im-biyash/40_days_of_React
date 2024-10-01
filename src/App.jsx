import { useEffect, useState } from "react";
import axios from "axios";
import Statecolor from "./Components/Statecolor";
import Interview from "./Components/Interview";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import { counterContext } from "./context/context";
import Todo from "./Components/Todo";
import Datafetching from "./Components/Datafetching";
import Quiz from "./Components/Quiz";
import OwnTodo from "./Components/OwnTodo";
function App() {
  


  return (
    <>
    <OwnTodo/>
    </>
  );
}

export default App;
