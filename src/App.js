import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import DropDown from "./components/DropDown";
import New from "./components/New";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drop" element={<DropDown />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;
