import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../ventanaModal/modal"; // Importa el modal
import ipsLogo from "../../assets/ips.png"; // Importa el logo de la IPS

const Form = () => {

    // Estado para almacenar los valores del formulario
    const [values, setValues] = useState({
        name: "",
        lastname: "",
        typeDocument: "",
        document: "",
        condition: "",
    });

    // Maneja los cambios en los campos de entrada del formulario
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
        ...values,
        [name]: value,
        });
    };

    const navigate = useNavigate(); // Hook para la navegación entre páginas
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura del modal

    // Maneja la confirmación del modal y redirige a la página de ticket
    const handleSubmitModal = () => {
        navigate("/ticket");
    };

    return (
        <div className="relative h-screen w-screen bg-gradient-to-l from-[#E1EAF0] via-[#4187B5] to-[#2F688D] overflow-hidden">
            
            {/* Logo de la IPS en la parte superior izquierda */}
            <div className="absolute top-0 left-0 m-2 sm:m-4">
                <img
                src={ipsLogo}
                alt="IPS Logo"
                className="w-16 h-8 sm:w-20 sm:h-10 lg:w-30 lg:h-15"
                />
            </div>

        {/* Formulario de registro */}
        <form className="bg-[#d9d9d9] border-[15px] sm:border-[18.9px] border-[#3c3c3c] p-3 sm:p-4.725 w-[95%] sm:w-[85.05%] max-w-[500px] h-[90vh] overflow-y-auto mx-auto mt-[50px] sm:mt-[56.7px] mb-[20px] sm:mb-[28.35px] rounded-[0]">

            {/* Título del formulario */}
            <h1 className="text-center text-[15.2px] sm:text-[17px] mb-[10px] sm:mb-[14.46px] mt-[30px] sm:mt-[20px] font-extrabold leading-[19px] sm:leading-[22.89px] tracking-[2.85px] sm:tracking-[3.81px] whitespace-pre-line">FORMULARIO {"\n"}DE{"\n"} REGISTRO</h1>

            {/* Campo de entrada para el nombre */}
            <label htmlFor="name" className="font-bold text-[13.3px] sm:text-[14.36px]"> Nombre </label>
            <input
                type="text"
                name="name"
                className="text-[12.35px] sm:text-[12.57px] w-full box-border p-[8px] sm:p-[9.45px_8.505px] mb-[15px] sm:mb-[18.9px] bg-none border-b-[2px] sm:border-b-[2.05px] border-b-[#6EA3C7]"
                onChange={handleInputChange}
                placeholder="Primer Nombre"
            />

            {/* Campo de entrada para el apellido */}
            <label htmlFor="lastname" className="font-bold text-[14px] sm:text-[15px]"> Apellido </label>
            <input
                type="text"
                name="lastname"
                className="text-[13px] sm:text-[14px] w-full box-border p-[8px] sm:p-[10px_9px] mb-[15px] sm:mb-[20px] bg-none border-b-[2px] sm:border-b-[2.175px] border-b-[#6EA3C7]"
                onChange={handleInputChange}
                placeholder="Primer Apellido"
            />

            {/* Campo de selección para el tipo de documento */}
            <label htmlFor="typeDocument" className="font-bold text-[14px] sm:text-[16px]"> Tipo de Documento </label>
            <input
                list="typeDocument"
                name="typeDocument"
                className="text-[13px] sm:text-[14px] w-full box-border bg-[#fff] p-[4px] sm:p-[5.78px_9px] mb-[15px] sm:mb-[20px] mt-[5px] sm:mt-[7.225px]"
                onChange={handleInputChange}
                placeholder="C.C"
            />
            <datalist id="typeDocument">
                <option value="Cédula de ciudadanía"></option>
                <option value="Pasaporte"></option>
                <option value="Tarjeta de identidad"></option>
                <option value="Cédula de extranjería"></option>
                <option value="Registro civil"></option>
                <option value="Permiso especial de permanencia"></option>
            </datalist>

            {/* Campo de entrada para el número de documento */}
            <label htmlFor="document" className="font-bold text-[14px] sm:text-[16px]"> Documento </label>
            <input
                type="number"
                name="document"
                className="text-[13px] sm:text-[14px] w-full box-border p-[6px] sm:p-[7.65px_9px] mb-[15px] sm:mb-[20px] bg-none border-b-[2px] sm:border-b-[2.175px] border-b-[#6EA3C7]"
                onChange={handleInputChange}
                placeholder="Documento"
            />

            {/* Botón para abrir el modal */}
            <button
                onClick={() => setIsOpen(true)}
                type="button"
                className="bg-[#6EA3C7] font-bold w-[108px] sm:w-[127.575px] h-[36px] sm:h-[42.525px] text-[11.97px] sm:text-[12.93px] text-white py-[1.8px] sm:py-[1.85px] mt-0 rounded-lg hover:bg-[#3c3c3c] transition-colors mx-auto block"
            >ENVIAR</button>
        </form>

        {/* Modal de confirmación */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} onConfirm={handleSubmitModal} />
        </div>
    );
};

export default Form;
