    // Importa useState para manejar el estado del formulario y useNavigate para la redirección
    import { useState } from "react";
    import { useNavigate } from "react-router-dom"; 

    // Importa la imagen del logo de la IPS
    import ipsLogo from "../../assets/ips.png";

    /**
     * Componente funcional Form
     * Este componente representa un formulario de registro con los campos:
     * - Nombre
     * - Documento
     * - Condición
     */
    const Form = () => {
        // Define el estado inicial del formulario con campos vacíos
        const [values, setValues] = useState({
        name: "",
        lastname: "",
        typeDocument: "",
        document: "",
        condition: "",
        });
    
        // Función para manejar los cambios en los campos del formulario
        const handleInputChange = (event) => {
        // Desestructura el evento para obtener el nombre y el valor del campo
        const { name, value } = event.target;
        // Actualiza el estado del formulario
        setValues({
            // Mantiene los valores anteriores del estado
            ...values,
            // Actualiza el valor del campo que ha cambiado
            [name]: value,
        });
        };
    
        const navigate = useNavigate(); // Permite la navegación entre rutas
    
        const handleSubmit = (event) => {
        event.preventDefault(); // Evita que la página se recargue
        console.log(values); // Muestra los datos en la consola
        };
    
        // Ventana modal para confirmar el envío del formulario
        const [isOpen, setIsOpen] = useState(false);
    
        const handleSubmitModal = (event) => {
        event.preventDefault(); // Evita que la página se recargue
        navigate("/ticket"); // Redirige a la ruta "/ticket"
        };
    
        return (
        <div className="relative h-screen w-screen bg-gradient-to-l from-[#E1EAF0] via-[#4187B5] to-[#2F688D] overflow-hidden">
            {/* Logo container */}
            <div className="absolute top-0 left-0 m-2 sm:m-4">
            <img
                src={ipsLogo}
                alt="IPS Logo"
                className="w-16 h-8 sm:w-20 sm:h-10 lg:w-30 lg:h-15"
            />
            </div>
    
            {/* Form container */}
            <form
            className="bg-[#d9d9d9] border-[15px] sm:border-[18.9px] border-[#3c3c3c] p-3 sm:p-4.725 
            w-[95%] sm:w-[85.05%] max-w-[500px] h-[90vh] overflow-y-auto 
            mx-auto mt-[50px] sm:mt-[56.7px] mb-[20px] sm:mb-[28.35px] rounded-[0]"
            onSubmit={handleSubmit}
            >
            {/* Black decoration container */}
            <div
                className="absolute w-[120px] h-[40px] sm:w-[141.75px] sm:h-[47.25px] 
            left-1/2 top-[15px] sm:top-[18.9px] mt-[30px] sm:mt-[37.8px] 
            bg-[#1E1E1E] rounded-[8px] sm:rounded-[9.45px] -translate-x-1/2"
            ></div>
    
            {/* Form title - 5% larger for sm */}
            <h1 className="text-center text-[15.2px] sm:text-[17px] mb-[10px] sm:mb-[14.46px] mt-[30px] sm:mt-[20px] font-extrabold leading-[19px] sm:leading-[22.89px] tracking-[2.85px] sm:tracking-[3.81px] whitespace-pre-line">
                FORMULARIO {"\n"}DE{"\n"} REGISTRO
            </h1>
    
            {/* Form inputs - make them responsive */}
            {/* Labels - 5% larger for sm */}
            <label
                htmlFor="name"
                className="font-bold text-[13.3px] sm:text-[14.36px]"
            >
                Nombre
            </label>
            {/* Inputs - 5% larger for sm */}
            <input
                type="text"
                name="name"
                className="text-[12.35px] sm:text-[12.57px] w-full box-border p-[8px] sm:p-[9.45px_8.505px] mb-[15px] sm:mb-[18.9px] bg-none border-b-[2px] sm:border-b-[2.05px] border-b-[#6EA3C7]"
                onChange={handleInputChange}
                placeholder="Primer Nombre"
            />
            <label htmlFor="name" className="font-bold text-[14px] sm:text-[15px]">
                Apellido
            </label>
            <input
                type="text"
                name="lastname"
                className="text-[13px] sm:text-[14px] w-full box-border p-[8px] sm:p-[10px_9px] 
                mb-[15px] sm:mb-[20px] bg-none border-b-[2px] sm:border-b-[2.175px] border-b-[#6EA3C7]"
                onChange={handleInputChange}
                placeholder="Primer Apellido"
            />
    
            {/* Campo para el TIPO DE DOCUMENTO */}
            <label
                htmlFor="typeDocument"
                className="font-bold text-[14px] sm:text-[16px]"
            >
                Tipo de Documento
            </label>
            <input
                list="typeDocument"
                name="typeDocument"
                className="text-[13px] sm:text-[14px] w-full box-border bg-[#fff] p-[4px] sm:p-[5.78px_9px] 
                mb-[15px] sm:mb-[20px] mt-[5px] sm:mt-[7.225px]"
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
            <label
                htmlFor="document"
                className="font-bold text-[14px] sm:text-[16px]"
            >
                Documento
            </label>
            <input
                type="number"
                name="document"
                className="text-[13px] sm:text-[14px] w-full box-border p-[6px] sm:p-[7.65px_9px] 
                mb-[15px] sm:mb-[20px] bg-none border-b-[2px] sm:border-b-[2.175px] border-b-[#6EA3C7]"
                onChange={handleInputChange}
                placeholder="Documento"
            />
            {/* Campo para la condición con una lista de opciones */}
            <label
                htmlFor="condition"
                className="font-bold text-[14px] sm:text-[16px]"
            >
                Condición
            </label>
            <input
                list="conditions"
                name="condition"
                className="text-[13px] sm:text-[14px] w-full box-border bg-[#fff] p-[4px] sm:p-[5.78px_9px] 
                mb-[15px] sm:mb-[20px] mt-[5px] sm:mt-[7.225px]"
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
            {/* Submit button - 5% larger for sm */}
            <button
                onClick={() => setIsOpen(true)}
                type="submit"
                className="bg-[#6EA3C7] font-bold w-[108px] sm:w-[127.575px] h-[36px] sm:h-[42.525px] 
        text-[11.97px] sm:text-[12.93px] text-white py-[1.8px] sm:py-[1.85px] mt-0 
        rounded-lg hover:bg-[#3c3c3c] transition-colors mx-auto block"
            >
                ENVIAR
            </button>
            </form>
            {/* Ventana modal de advertencia */}
            {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-[#000c] bg-opacity-50 p-4">
                <div className="bg-white p-4 sm:p-5.67 rounded-lg shadow-lg w-[90%] sm:w-90.72 max-w-md">
                {/* Modal text - 5% larger for sm */}
                <h2 className="text-base sm:text-[15.26px] text-center font-bold mb-3 sm:mb-3.78">
                    ¡CUIDADO!
                </h2>
                <p className="text-center text-[13.3px] sm:text-[14.36px]">
                    ¿Estás seguro de que tus datos fueron CORRECTAMENTE digitados?
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-4">
                    {/* Modal buttons - 5% larger for sm */}
                    <button
                    onClick={() => setIsOpen(false)}
                    className="bg-[#bd1d1d] text-white px-3 sm:px-3.78 py-2 rounded text-[13.3px] sm:text-[14.36px]"
                    >
                    Regresar
                    </button>
                    <button
                    onClick={handleSubmitModal}
                    className="bg-[#1d8f1d] text-white px-3 sm:px-3.78 py-2 rounded text-[13.3px] sm:text-[14.36px]"
                    >
                    Estoy Seguro(a)
                    </button>
                </div>
                </div>
            </div>
            )}
        </div>
        );
    };
    
    export default Form;