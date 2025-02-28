import { useState } from "react";
import ipsLogo from "../../assets/ips.png";

/**
 * Componente funcional Form
 * Este componente representa un formulario de registro con los campos:
 * - Nombre
 * - Documento
 * - Condición
 */
const formop = () => {
    const [values, setValues] = useState({
        name: "",
        typeDocument: "",
        document: "",
        condition: "",
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Manejo de cambios en los inputs
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    // Muestra el modal en lugar de enviar directamente el formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsModalOpen(true);
    };

    // Función para confirmar el envío
    const confirmSubmit = () => {
        setIsModalOpen(false);
        console.log(values); // Aquí puedes hacer la solicitud a la API
    };

    return (
        <div className="relative flex min-h-screen w-screen bg-gradient-to-l from-[#E1EAF0] via-[#4187B5] to-[#2F688D] overflow-y-auto">
        <div className="absolute top-0 left-0 m-4">
            <img
            src={ipsLogo}
            alt="IPS Logo"
            className="w-20 h-10 md:w-30 md:h-15"
            />
        </div>

        <form
            className="flex justify-between bg-[#d9d9d9] border-[21px] border-[#3c3c3c] p-4.75 border-r-[21px] mt-[89px] ml-21 md:p-[42px_52px_0px_52px] w-[90%] max-w-[1330px] h-[617.5px]"
            onSubmit={handleSubmit}
        >
            {/* Lado izquierdo - Formulario original */}
            <div className="w-[45.6%]">
            <h1 className="text-center text-[19.38px] md:text-[21.945px] mb-[14.535px] mt-[-30px] font-extrabold leading-[24.225px] tracking-[4.0375px] whitespace-pre-line">
                FORMULARIO {"\n"}DE{"\n"} REGISTRO
            </h1>

            {/* Campo para el nombre */}
            <label htmlFor="name" className="font-bold">
                Nombre
            </label>
            <input
                type="text"
                name="name"
                className="text-[14.25px] w-full box-border p-[9.5px_8.55px] mt-[-9.5] mb-[19px] bg-none border-b-[2.06625px] border-b-[#6EA3C7]" // Reducido en un 15%
                onChange={handleInputChange}
                placeholder="Primer Nombre"
            />
            <label htmlFor="name" className="font-bold">
                Apellido
            </label>
            <input
                type="text"
                name="lastname"
                className="text-[14.25px] w-full box-border p-[9.5px_8.55px] mb-[19px] bg-none border-b-[2.06625px] border-b-[#6EA3C7]" // Reducido en un 15%
                onChange={handleInputChange}
                placeholder=" Primer Apellido"
            />
            {/* Campo para el TIPO DE DOCUMENTO */}
            <label htmlFor="typeDocument" className="font-bold">
                Tipo de Documento
            </label>
            <input
                list="typeDocument"
                name="typeDocument"
                className="text-[14.25px] w-full box-border bg-[#fff] p-[5.78px_9px] mb-[19px] mt-[7.225px]" // Reducido en un 15%
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
                className="text-[14.25px] w-full box-border p-[9.5px_8.55px] mb-[19px] bg-none border-b-[2.06625px] border-b-[#6EA3C7]" // Reducido en un 15%
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
                className="text-[14.25px] w-full box-border bg-[#fff] p-[5.78px_9px] mb-[19px] mt-[7.225px]" // Reducido en un 15%
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
                type="submit"
                className="bg-[#6EA3C7] font-bold w-[142.5px] h-[47.5px] text-white py-[2.06625px] mt-0 rounded-lg hover:bg-[#3c3c3c] transition-colors mx-auto block" // Reducido en un 15%
            >
                ENVIAR
            </button>
            </div>

            {/* Lado derecho - Turno generado */}
            <div className="w-[45.6%] border-l-2 border-[#3c3c3c] pl-7.6 flex flex-col items-center">
            <h1 className="text-[27.36px] mt-[45.6px] text-center tracking-widest mb-10 font-extrabold">
                TURNO GENERADO
            </h1>

            <svg
                height="258.4" // Reduced by 20% from 340
                viewBox="0 0 359 527"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto mb-3.8 mt-[-15.2px]" // Adjusted margins
            >
                <path
                d="M0.5 31.1915C0.5 20.8689 5.80706 11.2713 14.5498 5.78306L15.7981 4.99945C26.1875 -1.52251 39.5009 -1.06226 49.4151 6.16163L53.0571 8.8153C58.2174 12.5754 62.0436 17.8837 63.9789 23.9683L84.481 88.4252C85.4867 91.5871 87.01 94.5603 88.9888 97.2236L114.004 130.892C119.664 138.51 128.594 143 138.085 143H183H229.14C240.145 143 250.267 136.974 255.513 127.299L272.811 95.394C273.602 93.9345 274.271 92.4118 274.81 90.8416L297.841 23.7983C299.894 17.821 303.783 12.6449 308.952 9.00842L313.336 5.9243C323.327 -1.10423 336.659 -1.08436 346.629 5.97392V5.97392C354.273 11.3859 358.817 20.1701 358.817 29.5363V256.432C358.817 260.567 357.963 264.657 356.307 268.445L258.536 492.178C255.314 499.549 249.268 505.318 241.753 508.189L220 516.5L192.45 525.435C186.314 527.425 179.7 527.384 173.588 525.319L147.5 516.5L125.128 508.007C117.853 505.245 111.936 499.764 108.626 492.722L3.35002 268.764C1.47312 264.771 0.5 260.413 0.5 256.002V31.1915Z"
                fill="#fff"
                stroke=""
                strokeWidth=""
                />
                <text
                x="50%"
                y="38%"
                textAnchor="middle"
                fill="black"
                fontSize="45.6px" // Reduced by 20% from 60px
                dy=".3em"
                textLength="243.2" // Reduced by 20% from 320
                lengthAdjust="spacingAndGlyphs"
                fontWeight="bold"
                >
                Juan Valderrama
                </text>
                <text
                x="50%"
                y="50%"
                textAnchor="middle"
                fill="black"
                fontSize="36.48px" // Reduced by 20% from 48px
                dy=".3em"
                >
                30/02/2025
                </text>
                <text
                x="50%"
                y="74%"
                textAnchor="middle"
                fill="black"
                fontSize="82.08px" // Reduced by 20% from 108px
                dy=".3em"
                fontWeight="bold"
                >
                69
                </text>
            </svg>

            <div className="mb-3.8 text-center">
                <label className="text-[18.24px] tracking-widest">
                {" "}
                {/* Reduced by 20% from 24px */}
                ESPERA AL LLAMADO DEL NÚMERO
                </label>
            </div>
            <button
                type="submit"
                className="bg-[#6EA3C7] font-bold w-[190px] h-[66.5px] text-white py-[3.099375px] mt-9.5 rounded-lg hover:bg-[#3c3c3c] transition-colors mx-auto block text-[11.77335px]"
            >
                SIGUIENTE TURNO
            </button>
            </div>
        </form>
        {/* Modal de confirmación */}
        {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#000c] bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg text-center font-bold mb-4">¡CUIDADO!</h2>
            <p className="text-center">
                ¿Estás seguro de que tus datos fueron CORRECTAMENTE digitados?
            </p>
            <div className="flex justify-center mt-4">
                <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#bd1d1d] text-white px-4 py-2 rounded mr-4"
                >
                Regresar
                </button>
                <button
                onClick={confirmSubmit}
                className="bg-[#1d8f1d] text-white px-4 py-2 rounded"
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

export default formop;