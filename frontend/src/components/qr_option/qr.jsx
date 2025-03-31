import ipsLogo from '../../assets/ips.png'

export default function QR() {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Formulario enviado')
    }

    return (
        <div className="relative min-h-screen w-screen bg-gradient-to-l bg-[#6ea3c7] overflow-hidden flex flex-col items-center">
            {/* Logo container - responsive */}
            <div className="absolute top-0 left-0 m-2 sm:m-3">
                <img
                    src={ipsLogo}
                    alt="IPS Logo"
                    className="w-24 h-12 sm:w-30 sm:h-15 lg:w-36 lg:h-18"
                />
            </div>

            {/* Title - responsive */}
            <h1
                className="text-center text-white text-[60px] sm:text-[90px] lg:text-[111px] 
                    font-bold tracking-wide mt-6 sm:mt-9 lg:mt-12"
            >
                TURNOS
            </h1>

            {/* Form - responsive */}
            <form
                className="bg-white shadow-2xl p-4 sm:p-6 lg:p-7 
                    w-[419px] sm:w-[479px] lg:w-[569px] 
                    h-[419px] sm:h-[479px] lg:h-[569px] 
                    mt-3 sm:mt-4 lg:mt-6 
                    rounded-[23px] sm:rounded-[27px] lg:rounded-[30px]"
                onSubmit={handleSubmit}
            ></form>

            {/* Instructions text - responsive */}
            <div className="mt-3 sm:mt-4 lg:mt-6 px-6 sm:px-0">
                <label
                    className="text-[27px] sm:text-[32px] lg:text-[36px] 
                        tracking-wider sm:tracking-widest 
                        mb-3 sm:mb-4 lg:mb-6 
                        font-bold text-white text-center block whitespace-pre-line"
                >
                    Scaneame con tu celular {'\n'} para obtener el turno
                </label>
            </div>
        </div>
    )
}