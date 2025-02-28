import { useState } from "react";
import ipsLogo from "../../assets/ips.png";

export default function QR() {
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que la página se recargue
        console.log("Formulario enviado");
    };

    return (
        <div className="relative min-h-screen w-screen bg-gradient-to-l from-[#E1EAF0] via-[#4187B5] to-[#2F688D] overflow-y-auto flex flex-col items-center">
        {/* Contenedor de la imagen del logo de la IPS */}
        <div className="absolute top-0 left-0 m-4">
            <img src={ipsLogo} alt="IPS Logo" className="w-20 h-10 md:w-30 md:h-15" />
        </div>

        {/* Título "TURNOS" estilizado */}
        <h1 className="text-center text-white text-[74px] font-bold tracking-wide mt-4">
            TURNOS
        </h1>

        {/* Formulario con tamaño fijo de 480px x 480px y bordes redondeados */}
        <form
            className="bg-white  shadow-2xl p-5 w-[380px] h-[380px] mt-4 rounded-[20px] "onSubmit={handleSubmit}>
        </form>
        <div className="mt-2">
            <label className="text-[24px] md:text-[25px] tracking-widest mb-4 font-bold text-white text-center block whitespace-pre-line">
                Scaneame con tu celular {'\n'} para obtener el turno
            </label>

        </div>
        </div>
    );
}
