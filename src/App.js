import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Page/Home";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";
import Todo from "./Page/Todo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
