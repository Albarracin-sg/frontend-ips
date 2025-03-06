import { useState } from "react";
import ModalOP from "./ventanaModal/modalOP"; // Importa el modal

const FormCardOP = () => {
  // Estado para almacenar los valores del formulario
const [values, setValues] = useState({
    name: "",
    lastname: "",
    typeDocument: "",
    document: "",
    date: "",
    locate: "",
    phone: "",
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

  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura del modal

  // Al confirmar el modal, solo lo cerramos sin redirigir
const handleSubmitModal = () => {
    setIsOpen(false); // Solo cierra el modal
};

    return (
    <>
      {/* Formulario de registro */}
    <form
        className="bg-[#d9d9d9] border-[12px] border-[#3c3c3c] p-[0_40px] w-[90%] max-w-[500px]"
        onSubmit={handleSubmit}
    >
        {/* Contenedor adicional para el formulario (coso negro) */}
        <div className="relative w-[192px] h-[45px] left-[110px] mt-[-20px] bg-[#1E1E1E] rounded-[10px]"></div>

            {/* Título del formulario */}
            <h1 className="text-center text-[23.1px] mt-[10px] font-extrabold tracking-[4px] leading-normal">
                FORMULARIO DE REGISTRO
            </h1>

            {/* Campo para el nombre */}
            <label htmlFor="name" className="text-[14px] font-bold">
                Nombre
            </label>
            <input
                type="text"
                name="name"
                className="text-[14px] w-full box-border p-[10px_9px] mb-[10px] border-b-[2.175px] border-b-[#6EA3C7]"
                onChange={handleInputChange}
                placeholder="Primer Nombre"
            />

            {/* Campo para el apellido */}
            <label htmlFor="lastname" className="font-bold text-[14px]">
                Apellido
            </label>
            <input
                type="text"
                name="lastname"
                className="text-[14px] w-full box-border p-[10px_9px] mb-[10px] border-b-[2.175px] border-b-[#6EA3C7]"
                onChange={handleInputChange}
                placeholder="Primer Apellido"
            />

            {/* Campo para el TIPO DE DOCUMENTO */}
            <label htmlFor="typeDocument" className="font-bold text-[14px]">
                Tipo de Documento
            </label>
            <input
                list="typeDocument"
                name="typeDocument"
                className="text-[14px] w-full box-border bg-[#fff] p-[5.78px_9px] mb-[10px] mt-[5px]"
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

            {/* Campo para el documento */}
            <label htmlFor="document" className="font-bold text-[14px]">
                Documento
            </label>
            <input
                type="number"
                name="document"
                className="text-[14px] w-full box-border p-[7.65px_9px] mb-[10px] border-b-[2.175px] border-b-[#6EA3C7]"
                onChange={handleInputChange}
                placeholder="Documento"
            />

            {/* Campo para la fecha de nacimiento */}
            <label htmlFor="date" className="font-bold">
                Fecha de Nacimiento
            </label>
            <input
                type="date"
                name="date"
                className="text-[14px] w-full box-border p-[7.65px_9px] mb-[10px] border-b-[2.175px] border-b-[#6EA3C7]"
                onChange={handleInputChange}
            />

            {/* Campo para la localidad */}
            <label htmlFor="locate" className="font-bold text-[14px]">
                Localidad
            </label>
            <input
                type="text"
                name="locate"
                className="text-[14px] w-full box-border p-[7.65px_9px] mb-[10px] border-b-[2.175px] border-b-[#6EA3C7]"
                onChange={handleInputChange}
            />

            {/* Campo para el número de teléfono */}
            <label htmlFor="phone" className="font-bold text-[14px]">
                Número de Teléfono
            </label>
            <input
                type="text"
                name="phone"
                className="text-[14px] w-full box-border p-[7.65px_9px] border-b-[2.175px] border-b-[#6EA3C7]"
                onChange={handleInputChange}
            />

            {/* Botón de envío del formulario */}
            <button
                onClick={() => setIsOpen(true)} // Se abre la ventana modal de advertencia
                type="submit"
                className="bg-[#6EA3C7] font-bold cursor-pointer w-[130px] h-[40px] text-white py-[2.175px] mb-3 rounded-lg mt-3 hover:bg-[#53709c] transition-colors mx-auto block"
            >
                ENVIAR
            </button>
    </form>

        {/* Modal de confirmación */}
        <ModalOP
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onConfirm={handleSubmitModal} // Solo cierra el modal
        />
        </>
    );
};

export default FormCardOP;
