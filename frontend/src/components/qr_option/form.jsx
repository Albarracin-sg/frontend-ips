import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormCard from "../formCard/formCard"; // Importa el modal
import ipsLogo from "../../assets/ips.png"; // Importa el logo de la IPS

const Form = () => {

    return (
        <div className="relative min-h-screen w-screen bg-[#4187B5] flex justify-center items-center">
      {/* Contenedor de la imagen de la IPS */}
            <FormCard />
        </div>
    );
};

export default Form;
