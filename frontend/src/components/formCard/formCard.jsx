import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./ventanaModal/modal";
import api from "../../api";

const FormCard = () => {
    const [form, setForm] = useState({
        primerNombre: "",
        segundoNombre: "",
        primerApellido: "",
        segundoApellido: "",
        localidad: "",
        numeroDocumento: "",
        fechaNacimiento: "",
        tipoDocumento: "",
        numeroTelefono: "",
        tipoDeCitas: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validarCamposRequeridos = () => {
        return (
            form.primerNombre.trim() !== "" &&
            form.primerApellido.trim() !== "" &&
            form.localidad.trim() !== "" &&
            form.numeroDocumento.trim() !== "" &&
            form.fechaNacimiento.trim() !== "" &&
            form.tipoDocumento.trim() !== "" &&
            form.numeroTelefono.trim() !== "" &&
            form.tipoDeCitas.trim() !== ""
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validarCamposRequeridos()) {
            alert("Por favor, completa todos los campos requeridos.");
            return;
        }

        const datos = {
            data: {
                PrimerNombre: form.primerNombre,
                SegundoNombre: form.segundoNombre,
                PrimerApellido: form.primerApellido,
                SegundoApellido: form.segundoApellido,
                Localidad: form.localidad,
                NumeroDocumento: form.numeroDocumento,
                FechaNacimiento: form.fechaNacimiento,
                TipoDeDocumento_ID: form.tipoDocumento,
                NumeroTelefono: form.numeroTelefono,
                TipoDeCitas_ID: form.tipoDeCitas,
            },
        };

        try {
            await api.post("/", datos);
        } catch (error) {
            console.error("Error al enviar debido a: ", error);
        }
    };

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmitModal = () => {
        navigate("/ticket");
    };

    return (
        <>
            <form
                className="bg-[#d9d9d9] border-[7px] border-[#3c3c3c] p-[0_15px] max-w-[320px] mx-auto
                sm:bg-[#d9d9d9] sm:border-[10px] sm:border-[#3c3c3c] sm:p-[0_30px] sm:w-[90%] sm:max-w-[500px]
                lg:bg-[#d9d9d9] lg:border-[12px] lg:border-[#3c3c3c] lg:p-[0_30px] lg:w-[90%] lg:max-w-[400px]"
                onSubmit={handleSubmit}
            >
                {/* Contenedor adicional para el formulario (rectángulo negro) */}
                <div className="relative w-[142px] h-[45px] left-[70px] mt-[-20px] bg-[#1E1E1E] rounded-[10px]
                sm:relative sm:w-[192px] sm:h-[45px] sm:left-[110px] sm:mt-[-20px]
                lg:relative lg:w-[180px] lg:h-[40px] lg:left-[85px] lg:mt-[-15px]"></div>
                
                {/* Título del formulario */}
                <h1 className="text-center text-[17px] mt-[323] mb-[5px] font-extrabold tracking-[2.53px] leading-5.1
                sm:text-[23.1px] sm:mt-[10px] sm:mb-[10px] sm:font-extrabold sm:tracking-[4px] px-[10px] sm:leading-normal
                lg:text-[23px] lg:mt-[5px] lg:mb-[8px] lg:font-extrabold lg:tracking-[2px] lg:px-[20px] lg:leading-6">
                    FORMULARIO DE REGISTRO
                </h1>

                {/* Contenedor de nombres */}
                <div className="flex gap-4 mb-2">
                    <div className="w-1/2">
                        <label htmlFor="name" className="text-[12.5px] font-bold
                        sm:text-[14px] lg:text-[12px]">
                            Primer Nombre
                        </label>
                        <input
                            className="text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                            sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
                            lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]"
                            type="text"
                            name="primerNombre"
                            value={form.primerNombre}
                            onChange={handleChange}
                            placeholder="Primer Nombre"
                            required
                        />
                    </div>

                    <div className="w-1/2">
                        <label className="text-[12.5px] font-bold
                        sm:text-[14px] lg:text-[12px]">
                            Segundo Nombre
                        </label>
                        <input 
                            className="text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                            sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
                            lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]"
                            type="text"
                            name="segundoNombre"
                            value={form.segundoNombre}
                            onChange={handleChange}
                            placeholder="Segundo Nombre"
                        />
                    </div>
                </div>

                {/* Contenedor de apellidos */}
                <div className="flex gap-4 mb-2">
                    <div className="w-1/2">
                        <label htmlFor="lastname" className="text-[12.5px] font-bold
                        sm:text-[14px] lg:text-[12px]">
                            Primer Apellido
                        </label>
                        <input
                            className="text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                            sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
                            lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]"
                            type="text"
                            name="primerApellido"
                            value={form.primerApellido}
                            onChange={handleChange}
                            placeholder="Primer Apellido"
                            required
                        />
                    </div>

                    <div className="w-1/2">
                        <label className="text-[12.5px] font-bold
                        sm:text-[14px] lg:text-[12px]">
                            Segundo Apellido
                        </label>
                        <input 
                            className="text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                            sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
                            lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]"
                            type="text"
                            name="segundoApellido"
                            value={form.segundoApellido}
                            onChange={handleChange}
                            placeholder="Segundo Apellido"
                        />
                    </div>
                </div>

                {/* Contenedor de Localidad y Teléfono */}
                <div className="flex gap-4 mb-2">
                    {/* Localidad */}
                    <div className="w-1/2">
                        <label className="text-[12.5px] font-bold
                        sm:text-[14px] lg:text-[12px]">
                            Localidad
                        </label>
                        <select
                            name="localidad"
                            value={form.localidad}
                            onChange={handleChange}
                            className="text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                            sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
                            lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]"
                            required
                        >
                            <option value="" disabled>Seleccione su localidad</option>
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
                    </div>

                    {/* Número de Teléfono */}
                    <div className="w-1/2">
                        <label htmlFor="numeroTelefono" className="text-[12.5px] font-bold
                        sm:text-[14px] lg:text-[12px]">
                            Número de Teléfono
                        </label>
                        <input
                            type="text"
                            name="numeroTelefono"
                            value={form.numeroTelefono}
                            onChange={handleChange}
                            placeholder="Número de Teléfono"
                            className="text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                            sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
                            lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]"
                            required
                        />
                    </div>
                </div>

                {/* Campo para el TIPO DE DOCUMENTO */}
                <div className="mb-2">
                    <label className="text-[12.5px] font-bold sm:text-[14px] lg:text-[12px]">
                        Tipo de Documento
                    </label>
                    <input
                        className="text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                        sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
                        lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]"
                        name="tipoDocumento"
                        id="tipoDocumento"                        
                        value={form.tipoDocumento}
                        onChange={handleChange}
                        placeholder="Seleccione un tipo"
                        list="tipoDocumento"
                        required
                    />
                    <datalist id="tipoDocumento">
                        <option value="Cédula de ciudadanía" />
                        <option value="Pasaporte" />
                        <option value="Tarjeta de identidad" />
                        <option value="Cédula de extranjería" />
                        <option value="Registro civil" />
                        <option value="Permiso especial de permanencia" />
                    </datalist>
                </div>

                {/* Campo para el documento */}
                <div className="mb-2">
                    <label htmlFor="document" className="text-[12.5px] font-bold
                    sm:text-[14px] lg:text-[12px]">
                        Documento
                    </label>
                    <input
                        className="text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                        sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
                        lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]"
                        type="number"
                        name="numeroDocumento"
                        value={form.numeroDocumento}
                        onChange={handleChange}
                        placeholder="Numero de Documento"
                        required
                    />
                </div>

                {/* Campo para la fecha de nacimiento */}
                <div className="mb-2">
                    <label htmlFor="document" className="text-[12.5px] font-bold
                    sm:text-[14px] lg:text-[12px]">
                        Fecha de Nacimiento
                    </label>
                    <input
                        className="text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                        sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
                        lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]"
                        type="date"
                        name="fechaNacimiento"
                        value={form.fechaNacimiento}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Campo para el TIPO DE CITA */}
                <div className="mb-3">
                    <label htmlFor="tipoDeCitas" className="text-[12.5px] font-bold sm:text-[14px] lg:text-[12px]">
                        Tipo de Cita
                    </label>
                    <input
                        type="text"
                        name="tipoDeCitas"
                        value={form.tipoDeCitas}
                        onChange={handleChange}
                        placeholder="Seleccione un tipo"
                        list="tipoDeCitas"
                        className="text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                        sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
                        lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]"
                        required
                    />
                    <datalist id="tipoDeCitas">
                        <option value="prioritaria" />
                        <option value="no prioritaria" />
                    </datalist>
                </div>


                {/* Botón de envío del formulario */}
                <button
                    type="button"
                    className="bg-[#6EA3C7] text-[15px] font-bold cursor-pointer w-[90px] h-[35px] text-white mb-3 rounded-lg hover:bg-[#53709c] transition-colors mx-auto block
                    sm:w-[130px] sm:h-[40px] sm:mb-3 sm:rounded-lg
                    lg:w-[100px] lg:h-[30px] lg:text-[13px]"
                    onClick={() => {
                        if (validarCamposRequeridos()) {
                            setIsOpen(true);
                        } else {
                            alert("Por favor, completa todos los campos requeridos.");
                        }
                    }}
                >
                    ENVIAR
                </button>
            </form>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onConfirm={handleSubmitModal}
            />
        </>
    );
};

export default FormCard;