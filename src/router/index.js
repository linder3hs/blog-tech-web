import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Drawer from "../components/Drawer";
import { LoginView, ContactView, HomeView } from "../views";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
