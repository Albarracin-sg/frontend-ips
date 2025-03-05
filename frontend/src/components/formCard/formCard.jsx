import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./ventanaModal/modal"; // Importa el modal

const FormCard = () => {
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

  const navigate = useNavigate(); // Hook para la navegación entre páginas
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura del modal

  // Maneja la confirmación del modal y redirige a la página de ticket
  const handleSubmitModal = () => {
    navigate("/ticket");
  };

  return (
    <>
      {/* Formulario de registro */}
      <form
        className="bg-[#d9d9d9] border-[12px] border-[#3c3c3c] p-[0_40px] w-[90%] max-w-[500px]    " // Mantiene el tamaño original
        onSubmit={handleSubmit}
      >
        {/* Contenedor adicional para el formulario (coso negro) */}
        <div className="relative w-[192px] h-[45px]  left-[100px] mt-[-20px] bg-[#1E1E1E] rounded-[10px]"></div>
        {/* Título del formulario */}
        <h1 className="text-center text-[23.1px]  mt-[10px]  font-extrabold tracking-[4px] leading-normal">
          FORMULARIO DE REGISTRO
        </h1>
        {/* Campo para el nombre */}
        <label htmlFor="name" className="text-[14px] font-bold">
          Nombre
        </label>
        <input
          type="text "
          name="name "
          className="text-[14px] w-full box-border p-[10px_9px] mb-[10px] bg-none border-b-[2.175px] border-b-[#6EA3C7]" // Reducido en un 15%
          onChange={handleInputChange}
          placeholder="Primer Nombre"
        />
        <label htmlFor="name" className="font-bold text-[14px]">
          Apellido
        </label>
        <input
          type="text"
          name="lastname"
          className="text-[14px] w-full box-border p-[10px_9px] mb-[10px] bg-none border-b-[2.175px] border-b-[#6EA3C7]"
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
          className="text-[14px] w-full box-border bg-[#fff] p-[5.78px_9px] mb-[10px] mt-[5px]" // Reducido en un 15%
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

        <label htmlFor="document" className="font-bold text-[14px]">
          Documento
        </label>
        <input
          type="number"
          name="document"
          className="text-[14px] w-full box-border p-[7.65px_9px] mb-[10px] bg-none border-b-[2.175px] border-b-[#6EA3C7]" // Reducido en un 15%
          onChange={handleInputChange}
          placeholder="Documento"
        />

        {/* Campo para la fecha de nacimiento */}

        <label htmlFor="document" className="font-bold">
          Fecha de Nacimiento
        </label>
        <input
          type="date"
          name="date"
          className="text-[14px] w-full box-border p-[7.65px_9px] mb-[10px] bg-none border-b-[2.175px] border-b-[#6EA3C7]" // Reducido en un 15%
          onChange={handleInputChange}
        />

        {/* Campo para la localidad */}

        <label htmlFor="document" className="font-bold text-[14px]">
          Localidad
        </label>
        <input
          type="text"
          name="locate"
          className="text-[14px] w-full box-border p-[7.65px_9px] mb-[10px] bg-none border-b-[2.175px] border-b-[#6EA3C7]" // Reducido en un 15%
          onChange={handleInputChange}
        />

        {/* Campo para el número de teléfono */}

        <label htmlFor="document" className="font-bold text-[14px]">
          Numero de Telefono
        </label>
        <input
          type="text"
          name="phone"
          className="text-[14px] w-full box-border p-[7.65px_9px] bg-none border-b-[2.175px] border-b-[#6EA3C7]" // Reducido en un 15%
          onChange={handleInputChange}
        />
        {/* Botón de envío del formulario */}
        <button
          onClick={() => setIsOpen(true)} //se abre la ventana modal de advertencia
          type="submit"
          className="bg-[#6EA3C7] font-bold cursor-pointer w-[130px] h-[40px] text-white py-[2.175px] mb-3 rounded-lg mt-3 hover:bg-[#3e577d] transition-colors mx-auto block" // Reducido en un 15%
        >
          ENVIAR
        </button>
      </form>

      {/* Modal de confirmación */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleSubmitModal}
      />
    </>
  );
};

export default FormCard;
