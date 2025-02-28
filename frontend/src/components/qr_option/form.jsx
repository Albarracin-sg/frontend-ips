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
    }

    return (
        // Contenedor principal con estilos de fondo y altura mínima de pantalla
        <div className="relative min-h-screen w-screen bg-gradient-to-l from-[#E1EAF0] via-[#4187B5] to-[#2F688D] overflow-y-auto">
        {/* Contenedor de la imagen de la IPS */}
        <div className="absolute top-0 left-0 m-4">
            {/* Imagen de la IPS */}
            <img
            src={ipsLogo}
            alt="IPS Logo"
            className="w-20 h-10 md:w-30 md:h-15" // Mantiene el tamaño original
            />
        </div>

        {/* Contenedor del formulario con estilos de fondo, bordes y espaciado */}
        <form
            className="bg-[#d9d9d9] border-[20px] border-[#3c3c3c] p-5 md:p-[40px_50px_0px_50px] w-[90%] max-w-[500px] h-auto md:h-[690px] mx-auto mt-[20px] mb-[20px] rounded-[0]" // Mantiene el tamaño original
            onSubmit={handleSubmit}
        >
            {/* Contenedor adicional para el formulario (coso negro) */}
            <div className="absolute w-[150px] h-[50px] md:w-[192px] md:h-[60px] left-1/2 top-[20px] md:top-[30px] mt-[-5px] bg-[#1E1E1E] rounded-[10px] -translate-x-1/2"></div>
            {/* Título del formulario */}
            <h1 className="text-center text-[20.4px] md:text-[23.1px] mb-[15.3px] mt-[15px]  font-extrabold leading-[25.5px] tracking-[4.25px] whitespace-pre-line">
            FORMULARIO {"\n"}DE{"\n"} REGISTRO
            </h1>
            {/* Campo para el nombre */}
            <label htmlFor="name" className="font-bold">
            Nombre
            </label>
            <input
            type="text"
            name="name"
            className="text-[15px] w-full box-border p-[10px_9px] mb-[20px] bg-none border-b-[2.175px] border-b-[#6EA3C7]" // Reducido en un 15%
            onChange={handleInputChange}
            placeholder="Primer Nombre"
            />
            <label htmlFor="name" className="font-bold">
            Apellido
            </label>
            <input
            type="text"
            name="lastname"
            className="text-[15px] w-full box-border p-[10px_9px] mb-[20px] bg-none border-b-[2.175px] border-b-[#6EA3C7]"
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
            className="text-[15px] w-full box-border bg-[#fff] p-[5.78px_9px] mb-[20px] mt-[7.225px]" // Reducido en un 15%
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
            className="text-[15px] w-full box-border p-[7.65px_9px] mb-[20px] bg-none border-b-[2.175px] border-b-[#6EA3C7]" // Reducido en un 15%
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
            className="text-[15px] w-full box-border bg-[#fff] p-[5.78px_9px] mb-[20px] mt-[7.225px]" // Reducido en un 15%
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
            className="bg-[#6EA3C7] font-bold w-[150px] h-[50px] text-white py-[2.175px] mt-0 rounded-lg hover:bg-[#3c3c3c] transition-colors mx-auto block" // Reducido en un 15%
            >
            ENVIAR
            </button>
        </form>
        {/* Ventana modal de advertencia */}
        {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-[#000c] bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-lg text-center font-bold mb-4">¡CUIDADO!</h2>
                <p className="text-center">Estas seguro de que tus datos fueron CORRECTAMENTE digitados?.</p>
                <button 
                onClick={() => {
                setIsOpen(false)}
                }
                className="mt-4 ml-10 bg-[#bd1d1d] text-white px-4 py-2 rounded">
                Regresar
                </button>
                <button 
                onClick={handleSubmitModal}
                
                className="mt-5 ml-5 bg-[#1d8f1d] text-white px-4 py-2 rounded">
                Estoy Seguro(a)
                </button>
            </div>
            </div>
        )}
        </div>
    );
};

export default Form;