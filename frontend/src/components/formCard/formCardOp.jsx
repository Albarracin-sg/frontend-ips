import { useState } from "react";
import ModalOp from "./ventanaModal/modalOP";
import api from "../../api"

const FormCard = () => {
  // Estado para almacenar los valores del formulario
        
    // 
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
    })

    // 
    const [enviado,setEnviado] = useState(false);

    //Actualiza SOLO EL CAMPO MODIGICADO sin perder valores anteriores 
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const validarCamposRequeridos = () => {
        return (
            form.primerNombre.trim() !== "" && //trim() elimina espacios al inicio o al final
            form.primerApellido.trim() !== "" && // si los valores tienen algo es true si toda los campos son true la funcion da true 
            form.localidad.trim() !== "" &&
            form.numeroDocumento.trim() !== "" &&
            form.fechaNacimiento.trim() !== "" &&
            form.tipoDocumento.trim() !== "" &&
            form.numeroTelefono.trim() !== "" &&
            form.tipoDeCitas.trim() !== ""
        );
    };

    //Se ejecuta solo cuando el usuario envia el form
    const handleSubmit = async  (e) => {
        e.preventDefault();//Hace que no se recarge la pagina
        
        if (!validarCamposRequeridos()) {
            alert("Por favor, completa todos los campos requeridos.");
            return;
        }

        //constante para almacenar los valores del formulario con el estilo de la BD
        const datos ={
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
        }
        try{
            await api.post("/", datos);// envia datos al back
            setEnviado(true);
        } 
        catch(error){
            console.error("Error al enviar debido a: ", error)
        }
    }

    //--------- VENTANA MODAL ---------
    const [isOpen, setIsOpen] = useState(false);
    const handleSubmitModal = () => {
        setIsOpen(false); // Cierra el modal
    
        // Resetea los valores del formulario
        setForm({ 
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
    };
    
    

    //------------------

    return (
        <>
        {enviado ? (
            <p className="text-green-600"> Datos enviados correctamente.</p>
        ) : (
            <form
                className="bg-[#d9d9d9] border-[12px] border-[#3c3c3c] p-[0_40px] w-[90%] max-w-[500px]    " // Mantiene el tamaño original
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
                            className="text-[14px] w-full p-[10px_9px] mb-[10px] border-b-[2.175px] border-b-[#6EA3C7]"
                            type="text "
                            name="primerNombre"
                            value={form.primerNombre}
                            onChange={handleChange}
                            placeholder="Primer Nombre"
                            required
                                />
                    </div>

                    <div className="w-1/2">
                        <label className="text-[14px] font-bold">Segundo Nombre</label>
                        <input 
                            className="text-[14px] w-full p-[10px_9px] mb-[10px] border-b-[2.175px] border-b-[#6EA3C7]"
                            type="text"
                            name="segundoNombre"
                            value={form.segundoNombre}
                            onChange={handleChange}
                            placeholder="Segundo Nombre"
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
                            className="text-[14px] w-full p-[10px_9px] mb-[10px] border-b-[2.175px] border-b-[#6EA3C7]"
                            type="text"
                            name="primerApellido"
                            value={form.primerApellido}
                            onChange={handleChange}
                            placeholder="Primer Apellido"
                            required
                        />
                    </div>

                    <div className="w-1/2">
                        <label className="text-[14px] font-bold">Segundo Apellido</label>
                        <input 
                            className="text-[14px] w-full p-[10px_9px] mb-[10px] border-b-[2.175px] border-b-[#6EA3C7]" 
                            type="text"
                            name="segundoApellido"
                            value={form.segundoApellido}
                            onChange={handleChange}
                            placeholder="Segundo Apellido"
                        />
                    </div>
                </div>

                {/* Contenedor de Localidad y Teléfono */}
                <div className="flex gap-4">
                    {/* Localidad */}
                    <div className="w-1/2">
                        <label className="font-bold text-[14px]">Localidad</label>
                        <select
                            name="localidad"
                            value={form.localidad}
                            onChange={handleChange}
                            className="text-[14px] w-full p-[10px_9px] mb-[10px] border-b-[2.175px] border-b-[#6EA3C7]"
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
                        <label htmlFor="numeroTelefono" className="font-bold text-[14px]">
                            Número de Teléfono
                        </label>
                        <input
                            type="text"
                            name="numeroTelefono"
                            value={form.numeroTelefono}
                            onChange={handleChange}
                            placeholder="Número de Teléfono"
                            className="text-[14px] w-full p-[10px_9px] mb-[10px] border-b-[2.175px] border-b-[#6EA3C7]"
                            required
                        />
                    </div>
                </div>

                {/* Campo para el TIPO DE DOCUMENTO */}
                <label className="font-bold text-[14px]">Tipo de Documento</label>
                <input
                    className="w-full p-2 mb-2 border-b-2 border-[#6EA3C7]"
                    list="tipoDocumento"
                    name="tipoDocumento"
                    value={form.tipoDocumento}
                    onChange={handleChange} 
                    placeholder="C.C"
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

                {/* Campo para el documento */}

                <label htmlFor="document" className="font-bold text-[14px]">
                    Documento
                </label>
                <input
                    className="text-[14px] w-full box-border p-[7.65px_9px] mb-[10px] bg-none border-b-[2.175px] border-b-[#6EA3C7]" // Reducido en un 15%
                    type="number"
                    name="numeroDocumento"
                    value={form.numeroDocumento}
                    onChange={handleChange}
                    placeholder="Numero de Documento"
                    required
                />


                {/* Campo para la fecha de nacimiento */}
                <label htmlFor="document" className="font-bold text-[14px]">
                    Fecha de Nacimiento
                </label>
                <input
                    className="text-[14px] w-full box-border p-[7.65px_9px] mb-[10px] bg-none border-b-[2.175px] border-b-[#6EA3C7]" // Reducido en un 15%
                    type="date"
                    name="fechaNacimiento"
                    value={form.fechaNacimiento}
                    onChange={handleChange}
                    required
                />

                {/* Campo para el tipo de cita */}
                <label htmlFor="document" className="font-bold text-[14px]">
                    Tipo de Cita
                </label>
                <input
                    type="text"
                    name="tipoDeCitas"
                    value={form.tipoDeCitas}
                    onChange={handleChange}
                    placeholder="Tipo de Citas"
                    className="text-[14px] w-full box-border p-[7.65px_9px] bg-none border-b-[2.175px] border-b-[#6EA3C7]"
                    required
                />
                {/* Botón de envío del formulario */}
                <button
                onClick={() => {
                    if (validarCamposRequeridos()) {
                        setIsOpen(true);
                    } else {
                        alert(" Por favor, completa todos los campos requeridos.");
                    }
                }} //se abre la ventana modal de advertencia
                    type="submit"
                className="bg-[#6EA3C7] font-bold cursor-pointer w-[130px] h-[40px] text-white py-[2.175px] mb-3 rounded-lg mt-3 hover:bg-[#53709c] transition-colors mx-auto block" // Reducido en un 15%
                >
                    ENVIAR
                </button>
            </form>

            
        )}
            {/* Modal de confirmación */}
            <ModalOp isOpen={isOpen} onClose={() => setIsOpen(false)} onConfirm={handleSubmitModal} />
    </>
    );
};

export default FormCard;