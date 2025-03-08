import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./ventanaModal/modalOP"; // Importa el modal
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


    //Se ejecuta solo cuando el usuario envia el form
    const handleSubmit = async  (e) => {
        e.preventDefault();//Hace que no se recarge la pagina
        
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
            console.log("Datos enviados: " , datos); // verificar si si esta funcionando correctamente
            setEnviado(true);
        } 
        catch(error){
            console.error("Error al enviar debido a: ", error)
        }
    }

    //--------- VENTANA MODAL ---------
    const navigate = useNavigate(); // Hook para la navegación entre páginas
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura del modal

    // Maneja la confirmación del modal y redirige a la página de ticket
    const handleSubmitModal = () => {
        navigate("/ticket");
    };
    //------------------

    return (
        <>
        {enviado ? (
            <p className="text-green-600">✅ Datos enviados correctamente.</p>
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
                            type="text"
                            name="segundoApellido"
                            value={form.segundoApellido}
                            onChange={handleChange}
                            placeholder="Segundo Apellido"
                            className="w-full p-2 mb-2 border-b-2 border-[#6EA3C7]" 
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
                    placeholder="C.C"
                    required
                />


                {/* Campo para la fecha de nacimiento */}
                <label htmlFor="document" className="font-bold">
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

                {/* Localidad */}
                <label className="font-bold text-[14px]">Localidad</label>
                <select name="localidad"
                value={form.localidad}
                onChange={handleChange} 
                className="w-full p-2 mb-2 border-b-2 border-[#6EA3C7]" 
                required>

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
                    name="numeroTelefono"
                    value={form.numeroTelefono}
                    onChange={handleChange}
                    placeholder="Número de Teléfono"
                    className="text-[14px] w-full box-border p-[7.65px_9px] bg-none border-b-[2.175px] border-b-[#6EA3C7]" // Reducido en un 15%
                    required
                />
                <input
                    type="text"
                    name="tipoDeCitas"
                    value={form.tipoDeCitas}
                    onChange={handleChange}
                    placeholder="Tipo de Citas"
                    className="border p-2 w-full mb-2"
                    required
                />
                {/* Botón de envío del formulario */}
                <button
                onClick={() => setIsOpen(true)} //se abre la ventana modal de advertencia
                    type="submit"
                className="bg-[#6EA3C7] font-bold cursor-pointer w-[130px] h-[40px] text-white py-[2.175px] mb-3 rounded-lg mt-3 hover:bg-[#53709c] transition-colors mx-auto block" // Reducido en un 15%
                >
                    ENVIAR
                </button>
            </form>

            
        )}
            <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onConfirm={handleSubmitModal}
            />
        </>
    );
};

export default FormCard;
