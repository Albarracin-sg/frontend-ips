import { useState } from "react";
import ModalOP from "./ventanaModal/modalOP"; // Importa el modal

const FormCardOP = () => {
  // Estado para almacenar los valores del formulario
const [values, setValues] = useState({
    name: "",
    secondName: "",
    lastname: "",
    secondLastname: "",
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

  // Al confirmar el modal, cerramos y limpiamos el formulario
const handleSubmitModal = () => {
    setIsOpen(false); // Cierra el modal
    setValues({ // Resetea los valores del formulario
        name: "",
        secondName: "",
        lastname: "",
        secondLastname: "",
        typeDocument: "",
        document: "",
        date: "",
        locate: "",
        phone: "",
    });
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
        <h1 className="text-center text-[23.1px] mt-[10px] mb-[10px] font-extrabold tracking-[4px] leading-normal">
            FORMULARIO DE REGISTRO
        </h1>

       {/* Contenedor de nombres */}
        <div className="flex gap-4">
            <div className="w-1/2">
                <label htmlFor="name" className="text-[14px] font-bold">
                    Primer Nombre
                </label>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    className="text-[14px] w-full p-[10px_9px] mb-[10px] border-b-[2.175px] border-b-[#6EA3C7]"
                    onChange={handleInputChange}
                    placeholder="Primer Nombre"
                    required
                />
            </div>

            <div className="w-1/2">
                <label className="text-[14px] font-bold">Segundo Nombre</label>
                <input 
                    type="text" 
                    name="secondName" 
                    value={values.secondName} 
                    onChange={handleInputChange} 
                    placeholder="Segundo Nombre"
                    className="w-full p-2 mb-2 border-b-2 border-[#6EA3C7]" 
                />
            </div>
        </div>

        {/* Contenedor de apellidos */}
        <div className="flex gap-4">
            <div className="w-1/2">
                <label htmlFor="lastname" className="font-bold text-[14px]">
                    Primer Apellido
                </label>
                <input
                    type="text"
                    name="lastname"
                    value={values.lastname}
                    className="text-[14px] w-full p-[10px_9px] mb-[10px] border-b-[2.175px] border-b-[#6EA3C7]"
                    onChange={handleInputChange}
                    placeholder="Primer Apellido"
                    required
                />
            </div>

            <div className="w-1/2">
                <label className="text-[14px] font-bold">Segundo Apellido</label>
                <input 
                    type="text" 
                    name="secondLastname" 
                    value={values.secondLastname} 
                    onChange={handleInputChange} 
                    placeholder="Segundo Apellido"
                    className="w-full p-2 mb-2 border-b-2 border-[#6EA3C7]" 
                />
            </div>
        </div>


        {/* Campo para el TIPO DE DOCUMENTO */}
        <label className="font-bold text-[14px]">Tipo de Documento</label>
        <input
            list="typeDocument"
            name="typeDocument"
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border-b-2 border-[#6EA3C7]"
            placeholder="C.C"
            required
        />

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
            required
        />

        <datalist id="typeDocument">
            <option value="Cédula de ciudadanía" />
            <option value="Pasaporte" />
            <option value="Tarjeta de identidad" />
            <option value="Cédula de extranjería" />
            <option value="Registro civil" />
            <option value="Permiso especial de permanencia" />
        </datalist>


        {/* Campo para la fecha de nacimiento */}
        <label htmlFor="document" className="font-bold">
            Fecha de Nacimiento
        </label>
        <input
            type="date"
            name="date"
            className="text-[14px] w-full box-border p-[7.65px_9px] mb-[10px] bg-none border-b-[2.175px] border-b-[#6EA3C7]" // Reducido en un 15%
            onChange={handleInputChange}
            required
        />

        {/* Localidad */}
        <label className="font-bold text-[14px]">Localidad</label>
        <select name="locate" value={values.locate} onChange={handleInputChange} className="w-full p-2 mb-2 border-b-2 border-[#6EA3C7]" required>
            <option value="" disabled>Seleccione una localidad</option>
            <option value="usaquen">Usaquén</option>
            <option value="chapinero">Chapinero</option>
            <option value="santa_fe">Santa Fe</option>
            <option value="san_cristobal">San Cristóbal</option>
            <option value="usme">Usme</option>
            <option value="tunjuelito">Tunjuelito</option>
            <option value="bosa">Bosa</option>
            <option value="kennedy">Kennedy</option>
            <option value="fontibon">Fontibón</option>
            <option value="engativa">Engativá</option>
            <option value="suba">Suba</option>
            <option value="barrios_unidos">Barrios Unidos</option>
            <option value="teusaquillo">Teusaquillo</option>
            <option value="los_martires">Los Mártires</option>
            <option value="antonio_nariño">Antonio Nariño</option>
            <option value="puente_aranda">Puente Aranda</option>
            <option value="la_candelaria">La Candelaria</option>
            <option value="rafael_uribe_uribe">Rafael Uribe Uribe</option>
            <option value="ciudad_bolivar">Ciudad Bolívar</option>
            <option value="sumapaz">Sumapaz</option>
            <option value="soacha">Soacha</option>
        </select>

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
            onClick={() => setIsOpen(true)}
            type="button"
            className="bg-[#6EA3C7] font-bold cursor-pointer w-[130px] h-[40px] text-white py-[2.175px] mb-3 rounded-lg mt-3 hover:bg-[#53709c] transition-colors mx-auto block"
        >
            ENVIAR
        </button>
    </form>

        {/* Modal de confirmación */}
        <ModalOP isOpen={isOpen} onClose={() => setIsOpen(false)} onConfirm={handleSubmitModal} />
    </>
);
};

export default FormCardOP;
