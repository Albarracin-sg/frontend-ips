import { useState, useEffect } from "react";
import ipsLogo from "../../assets/ipsBlack.png";
/**
 * Componente funcional Form
 * Este componente representa un formulario de registro con los campos:
 * - Nombre
 * - Tipo de Documento
 * - Documento
 * - Condición
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
        <div className="relative min-h-screen w-screen bg-gradient-to-l from-[#E1EAF0] via-[#4187B5] to-[#2F688D] overflow-y-auto flex items-center justify-center">
        <div className="bg-[#d9d9d9] border-[20px] border-[#3c3c3c] w-[1150px] h-[670px] mx-auto rounded-[0] box-border relative">
            {/* Sección Izquierda */}
            <div className="flex flex-col justify-evenly ml-[20px] w-[40%] h-[630px] bg-none">
            <div className="relative w-[421px] h-[90px] bg-none border-[2px]  align-center rounded-[20px] flex items-center justify-evenly">
                {/*MODULO DE CONSULTA*/}
                <h2 className="font-bold absolute left-[25px] top-[20px] whitespace-pre-line">
                MODULO /{"\n"} CONSULT
                </h2>
                <h2 className="font-medium absolute right-[28px] top-[30px]  text-[20px]">TURNO</h2>
                <h2 className="font-medium absolute right-[160px] top-[30px] text-[20px] ">NOMBRE</h2>
            </div>
            {/* PRIMER LLAMADO DE TURNO*/}
            <div className="relative w-[421px] h-[90px] bg-[#42A5F5]  align-center rounded-[20px] flex items-center justify-evenly">
                {/*MODULO DE CONSULTA*/}
                <p className="absolute left-[50px] text-[20px] font-bold">1</p>
                {/* SEÑALADOR DE TURNO */}
                <div className="absolute left-[110px] bottom-[9px] text-[60px]">|</div>
                {/*NOMBRE - TURNO */}
                <p className="font-bold w-[100px] absolute text-center text-[20px] ">
                Javier Gomez
                </p>
                <p className="absolute right-[40px] bottom-[29px] text-[20px] font-bold">
                D290
                </p>
                <p className="absolute right-[130px] text-[40px] font-bold">
                -
                </p>
            </div>

            {/* SEGUNDO LLAMADO DE TURNO*/}
            <div className="relative w-[421px] h-[90px] bg-[#90CAF9]  align-center rounded-[20px] flex items-center justify-evenly">
                {/*MODULO DE CONSULTA*/}
                <p className="absolute left-[50px] text-[20px] font-bold">1</p>
                {/* SEÑALADOR DE TURNO */}
                <div className="absolute left-[110px] bottom-[9px] text-[60px]">|</div>
                {/*NOMBRE - TURNO */}
                <p className="font-bold w-[100px] absolute text-center text-[20px] ">
                Camilo Albarracin
                </p>
                <p className="absolute right-[40px] bottom-[29px] text-[20px] font-bold">
                D290
                </p>
                <p className="absolute right-[130px] text-[40px] font-bold">
                -
                </p>
            </div>
            {/* TERCER LLAMADO DE TURNO*/}
            <div className="relative w-[421px] h-[90px] bg-[#90CAF9]  align-center rounded-[20px] flex items-center justify-evenly">
                {/*MODULO DE CONSULTA*/}
                <p className="absolute left-[50px] text-[20px] font-bold">1</p>
                {/* SEÑALADOR DE TURNO */}
                <div className="absolute left-[110px] bottom-[9px] text-[60px]">|</div>
                {/*NOMBRE - TURNO */}
                <p className="font-bold w-[100px] absolute text-center text-[20px] ">
                Alex Quiroz
                </p>
                <p className="absolute right-[40px] bottom-[29px] text-[20px] font-bold">
                D290
                </p>
                <p className="absolute right-[130px] text-[40px] font-bold">
                -
                </p>
            </div>
            {/* CUARTO LLAMADO DE TURNO*/}
            <div className="relative w-[421px] h-[90px] bg-[#90CAF9]  align-center rounded-[20px] flex items-center justify-evenly">
                {/*MODULO DE CONSULTA*/}
                <p className="absolute left-[50px] text-[20px] font-bold">1</p>
                {/* SEÑALADOR DE TURNO */}
                <div className="absolute left-[110px] bottom-[9px] text-[60px]">|</div>
                {/*NOMBRE - TURNO */}
                <p className="font-bold w-[100px] absolute text-center text-[20px] ">
                Esteban Molano
                </p>
                <p className="absolute right-[40px] bottom-[29px] text-[20px] font-bold">
                D290
                </p>
                <p className="absolute right-[130px] text-[40px] font-bold">
                -
                </p>
            </div>
            {/* QUINTO LLAMADO DE TURNO*/}
            <div className="relative w-[421px] h-[90px] bg-[#90CAF9]  align-center rounded-[20px] flex items-center justify-evenly">
                {/*MODULO DE CONSULTA*/}
                <p className="absolute left-[50px] text-[20px] font-bold">1</p>
                {/* SEÑALADOR DE TURNO */}
                <div className="absolute left-[110px] bottom-[9px] text-[60px]">|</div>
                {/*NOMBRE - TURNO */}
                <p className="font-bold w-[100px] absolute text-center text-[20px] ">
                Santiago Salazar
                </p>
                <p className="absolute right-[40px] bottom-[29px] text-[20px] font-bold">
                D290
                </p>
                <p className="absolute right-[130px] text-[40px] font-bold">
                -
                </p>
            </div>
            </div>
            {/* SECCION (Derecha) */}
            <div className="absolute right-10 top-[50%] translate-y-[-50%] bg-[#d9d9d9] border-[20px] border-[#3c3c3c] w-[550px] h-[400px] rounded-[0]">
            {/*IMAGEN IPS*/}
            <div className="absolute  left-[40%] top-[-115px] w-[120px] ">
                <img src={ipsLogo} alt="IPS Logo" />
            </div>
            <h2 className="text-[30px] font-bold text-center translate-y-[47%] tracking-[3px] uppercase ">
                turno actual
            </h2>
            <h2 className="text-[40px] font-bold text-center translate-y-[60px] uppercase">
                Javier Alexander gomez
            </h2>
            <h2 className="text-[60px] font-bold text-center translate-y-[70px] text-[#9B0000] uppercase  ">
                turno
            </h2>
            {/* Contenedor adicional para el formulario (coso negro)*/}
            <div className="absolute w-[192px] h-[60px] left-1/2 top-[-40px] bg-[#1E1E1E] rounded-[10px] -translate-x-1/2"></div>
            {/*FECHA ACTUAL*/}
            <h2 className="absolute  left-[20%] bottom-[-75px] font-bold text-[20px] uppercase">
                {formattedDate}
            </h2>
            <h2 className="absolute  left-[40%] bottom-[-105px] font-bold text-[20px] ">
                {formattedTime}
            </h2>
            </div>
        </div>
        </div>
    );
};

export default Screen;
