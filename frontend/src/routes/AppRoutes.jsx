import { Routes, Route } from "react-router-dom";
import Form from "../pages/qr/form"
import Ticket from "../pages/qr/ticket";
import MainOperador from "../pages/operador/mainOperador";
import Screen from "../pages/scream/screamPage";
import QR from "../pages/qr/qrPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/mainOp" element={<MainOperador />} />
      <Route path="/screen" element={<Screen />} />
      <Route path="/qr" element={<QR />} />
    </Routes>
  );
}

export default AppRoutes;
