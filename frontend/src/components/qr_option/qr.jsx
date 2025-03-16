    import ipsLogo from "../../assets/ips.png";

    export default function QR() {
        const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Formulario enviado");
        };
    
        return (
        <div className="relative min-h-screen w-screen bg-gradient-to-l from-[#E1EAF0] via-[#4187B5] to-[#2F688D] overflow-hidden flex flex-col items-center">
            {/* Logo container - responsive */}
            <div className="absolute top-0 left-0 m-2 sm:m-4">
            <img
                src={ipsLogo}
                alt="IPS Logo"
                className="w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12"
            />
            </div>
    
            {/* Title - responsive */}
            <h1
            className="text-center text-white text-[40px] sm:text-[60px] lg:text-[74px] 
                    font-bold tracking-wide mt-4 sm:mt-6 lg:mt-8"
            >
            TURNOS
            </h1>
    
            {/* Form - responsive */}
            <form
            className="bg-white shadow-2xl p-3 sm:p-4 lg:p-5 
                    w-[280px] sm:w-[320px] lg:w-[380px] 
                    h-[280px] sm:h-[320px] lg:h-[380px] 
                    mt-2 sm:mt-3 lg:mt-4 
                    rounded-[15px] sm:rounded-[18px] lg:rounded-[20px]"
            onSubmit={handleSubmit}
            ></form>
    
            {/* Instructions text - responsive */}
            <div className="mt-2 sm:mt-3 lg:mt-4 px-4 sm:px-0">
            <label
                className="text-[18px] sm:text-[21px] lg:text-[24px] 
                        tracking-wider sm:tracking-widest 
                        mb-2 sm:mb-3 lg:mb-4 
                        font-bold text-white text-center block whitespace-pre-line"
            >
                Scaneame con tu celular {"\n"} para obtener el turno
            </label>
            </div>
        </div>
        );
    }