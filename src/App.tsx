import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";
import NoPage from "./Component/NoPage/NoPage";
import Products from "./Component/Products/Products";
import Navbars from "./Component/Home/Navbars/Navbars";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Products" element={<Products />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Navbars/>
    </BrowserRouter>
  );
}
