import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ListMaterial from "./pages/ListMaterial";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-material" element={<ListMaterial />} />
      </Routes>
    </BrowserRouter>
  );
}