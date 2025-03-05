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
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que la página se recargue
        console.log(values); // Muestra los datos en la consola
    };

    const navigate = useNavigate(); // Hook para la navegación entre páginas
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura del modal

    // Maneja la confirmación del modal y redirige a la página de ticket
    const handleSubmitModal = () => {
        navigate("/ticket");
    };

    return (
        <div className="relative min-h-screen w-screen bg-[#4187B5] flex justify-center items-center">
      {/* Contenedor de la imagen de la IPS */}
            <div className="absolute top-0 left-0 m-4">
                {/* Imagen de la IPS */}
                <img
                src={ipsLogo}
                alt="IPS Logo"
                className="w-20 h-10 md:w-30 md:h-15" // Mantiene el tamaño original
                />
            </div>

            {/* Formulario de registro */}
            <form
                className="bg-[#d9d9d9] border-[15px] border-[#3c3c3c] p-[0_50px] w-[90%] max-w-[500px]  h-[630px]  " // Mantiene el tamaño original
                onSubmit={handleSubmit}
            >
                {/* Contenedor adicional para el formulario (coso negro) */}
                <div className="relative w-[192px] h-[60px]  left-[90px] mt-[-20px] bg-[#1E1E1E] rounded-[10px]"></div>
                {/* Título del formulario */}
                <h1 className="text-center text-[23.1px]  mt-[10px]  font-extrabold tracking-[4.25px] leading-normal">
                FORMULARIO DE REGISTRO
                </h1>
                {/* Campo para el nombre */}
                <label htmlFor="name" className="font-bold">
                Nombre
                </label>
                <input
                type="text"
                name="name"
                className="text-[15px] w-full box-border p-[10px_9px] mb-[15px] bg-none border-b-[2.175px] border-b-[#6EA3C7]" // Reducido en un 15%
                onChange={handleInputChange}
                placeholder="Primer Nombre"
                />
                <label htmlFor="name" className="font-bold">
                Apellido
                </label>
                <input
                type="text"
                name="lastname"
                className="text-[15px] w-full box-border p-[10px_9px] mb-[15px] bg-none border-b-[2.175px] border-b-[#6EA3C7]"
                onChange={handleInputChange}
                placeholder="Primer Apellido"
                />

                {/* Campo para el TIPO DE DOCUMENTO */}
                <label htmlFor="typeDocument" className="font-bold">
                Tipo de Documento
                </label>
                <input
                list="typeDocument"
                name="typeDocument"
                className="text-[15px] w-full box-border bg-[#fff] p-[5.78px_9px] mb-[15px] mt-[7.225px]" // Reducido en un 15%
                onChange={handleInputChange}
                placeholder="C.C"
                />
                {/* Lista de opciones para el tipo de documento */}
                <datalist id="typeDocument">
                <option value="Cédula de ciudadania"></option>
                <option value="Pasaporte "></option>
                <option value="Tarjeta de identidad"></option>
                <option value="Cédula de extranjeria"></option>
                <option value="Registro civil"></option>
                <option value="Permiso especial de permanencia"></option>
                </datalist>
                {/* Campo para el documento */}
                <label htmlFor="document" className="font-bold">
                Documento
                </label>
                <input
                type="number"
                name="document"
                className="text-[15px] w-full box-border p-[7.65px_9px] mb-[15px] bg-none border-b-[2.175px] border-b-[#6EA3C7]" // Reducido en un 15%
                onChange={handleInputChange}
                placeholder="Documento"
                />
                {/* Campo para la condición con una lista de opciones */}
                <label htmlFor="condition" className="font-bold">
                Condición
                </label>
                <input
                list="conditions"
                name="condition"
                className="text-[15px] w-full box-border bg-[#fff] p-[5.78px_9px] mb-[10px] mt-[7.225px]" // Reducido en un 15%
                onChange={handleInputChange}
                placeholder="N/A"
                />
                {/* Lista de opciones para la condición */}
                <datalist id="conditions">
                <option value="No aplica"></option>
                <option value="Adulto mayor"></option>
                <option value="Mujer Embarazada / Con niños en Brazos"></option>
                <option value="Condición de Discapacidad"></option>
                </datalist>
                {/* Botón de envío del formulario */}
                <button
                    onClick={() => setIsOpen(true)} //se abre la ventana modal de advertencia
                    type="submit"
                    className="bg-[#6EA3C7] cursor-pointer font-bold w-[150px] h-[50px] text-white py-[2.175px] rounded-lg mt-2 hover:bg-[#3e577d] transition-colors mx-auto block" // Reducido en un 15%
                    >
                    ENVIAR
                </button>
            </form>

            {/* Modal de confirmación */}
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} onConfirm={handleSubmitModal} />
        </div>
    );
};

export default Form;
