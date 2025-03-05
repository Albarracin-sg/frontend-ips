import FormCard from "../formCard/formCard"; // Importa el modal
import ipsLogo from "../../assets/ips.png"; // Importa el logo de la IPS

const Form = () => {

    return (
        <div className="relative min-h-screen w-screen bg-[#4187B5] flex justify-center items-center">
            <div className="absolute top-0 left-0 m-4">
                {/* Imagen de la IPS */}
                <img
                src={ipsLogo}
                alt="IPS Logo"
                className="w-20 h-10 md:w-30 md:h-15" // Mantiene el tamaño original
                />
            </div>
            <FormCard />
        </div>
    );
};

export default Form;
