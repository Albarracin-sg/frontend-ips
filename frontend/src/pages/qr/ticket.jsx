import ipsLogo from "../../assets/ips.png";
import TicketCard from "../../components/ticketCard/ticketCard";

export default function Ticket() {
    return (
        <div className="relative min-h-screen w-screen bg-[#4187B5] flex justify-center items-center">
            {/*
                Contenedor de la imagen del logo de la IPS
                Posicionado de forma absoluta en la esquina superior izquierda
            */}
            <div className="absolute top-0 left-0 m-4">
                {/*Imagen del logo de la IPS
                Clases para el tamaño en pantallas pequeñas (w-20 h-10)
                y medianas a grandes (md:w-30 md:h-15)
                */}
                <img
                    src={ipsLogo}
                    alt="IPS Logo"
                    className="w-20 h-10 md:w-30 md:h-15"
                />
            </div>
                
            <TicketCard />
        </div>
    );
    }