import { Routes, Route } from "react-router-dom";
import Form from "../components/qr_option/form";
import Ticket from "../components/qr_option/ticket";
import Formop from "../components/operador/form_op";
import Screen from "../components/mainscreen/screen";
import QR from "../components/qr_option/qr";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/formop" element={<Formop />} />
            <Route path="/screen" element={<Screen />} />
            <Route path="/qr" element={<QR />} />
        </Routes>
    );
}

export default AppRoutes;
