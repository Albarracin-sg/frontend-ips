import { useState, useEffect } from "react";
import ipsLogo from "../../assets/ipsBlack.png";

/**
 * Componente funcional Screen
 * Este componente representa una pantalla con una lista de turnos y la información del turno actual.
 */
const Screen = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Actualiza cada segundo

        return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }, []);

    // Formato de fecha y hora
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const formattedDate = currentTime.toLocaleDateString("es-ES", options);
    const formattedTime = currentTime.toLocaleTimeString("es-ES");

    return (
        <div className="min-h-screen w-screen bg-[#d9d9d9] border-[20px] border-[#3c3c3c] p-4 box-border">
            <div className="flex flex-col lg:flex-row h-full gap-4">

                {/* Sección izquierda - Cola de turnos */}
                <div className="flex-1 flex flex-col gap-4 lg:max-w-[45%]">

                    {/* Encabezado de la cola de turnos */}
                    <div className="relative w-full h-[90px] bg-none border-[2px] rounded-[20px] flex items-center justify-between px-6">
                        <h2 className="font-bold text-lg sm:text-xl whitespace-pre-line">
                            MODULO /{"\n"} CONSULTA
                        </h2>
                        <div className="flex gap-50">
                            <h2 className="font-medium text-xl">NOMBRE</h2>
                            <h2 className="font-medium text-xl">TURNO</h2>
                        </div>
                    </div>

                    {/* Elementos de la cola - Generados dinámicamente con map */}
                    {[1, 2, 3, 4, 5].map((index) => (
                        <div
                            key={index}
                            className={`relative w-full h-[90px] ${
                                index === 1 ? "bg-[#42A5F5]" : "bg-[#90CAF9]"
                            } rounded-[20px] flex items-center justify-between px-6`}
                        >
                            <div className="flex items-center gap-25">
                                <p className="font-bold text-xl">{index}</p>
                                <span className="text-5xl">|</span>
                                <p className="font-bold text-xl w-[150px] text-center">
                                    {[
                                        "Javier Gomez",
                                        "Camilo Albarracin",
                                        "Alex Quiroz",
                                        "Esteban Molina",
                                        "Santiago Salazar",
                                    ][index - 1]}
                                </p>
                            </div>
                            <div className="flex items-center gap-25">
                                <p className="text-4xl font-bold">-</p>
                                <p className="font-bold text-xl">D290</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Logo - Posicionado en la esquina superior derecha */}
                <div className="absolute top-[20px] right-[20px]">
                    <img src={ipsLogo} alt="IPS Logo" className="w-[120px]" />
                </div>

                {/* Sección derecha - Turno actual */}
                <div className="flex-1 lg:max-w-[55%] relative lg:h-[540px] mt-[50px]">
                    <div className="bg-[#d9d9d9] border-[18px] border-[#3c3c3c] p-2 h-full min-h-[500px] rounded-[0] flex flex-col items-center justify-center">
                        {/* Decoración negra */}
                        <div className="absolute w-[192px] h-[60px] left-1/2 top-[-10px] bg-[#1E1E1E] rounded-[10px] -translate-x-1/2 " />

                        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-[3px] uppercase mb-8">
                            Turno actual
                        </h2>
                        <h2 className="text-3xl sm:text-4xl font-bold text-center uppercase mb-8">
                            Javier Alexander Gomez
                        </h2>
                        <h2 className="text-5xl sm:text-6xl font-bold text-center text-[#9B0000] uppercase">
                            TURNO
                        </h2>

                        {/* Fecha y Hora */}
                        <div className="absolute bottom-[-50px] left-0 w-full flex flex-col sm:flex-row items-center justify-center gap-4">
                            <h2 className="font-bold text-xl uppercase">{formattedDate}</h2>
                            <h2 className="font-bold text-xl">{formattedTime}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Screen;
