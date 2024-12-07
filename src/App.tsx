import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";
import NoPage from "./Component/NoPage/NoPage";
import Products from "./Component/Products/Products";
import Navbars from "./Component/Home/Navbars/Navbars";
// در فایل index.js یا App.js
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss'
export default function App() {
  return (
    <div className="container-xxl">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ProductsMachine/:id" element={<Contact />} />
          <Route path="Products" element={<Products />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Navbars />
      </BrowserRouter>
    </div>
  );
}
