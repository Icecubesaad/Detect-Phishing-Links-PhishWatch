import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import Playground from "./screens/Playground";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}></Route>
        <Route path="/playground" element={<Playground/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
