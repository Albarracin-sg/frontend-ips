import ipsLogo from "../../assets/ips.png";


export default function Ticket() {
    return (
        <center>
            {/* Contenedor principal que centra todo el contenido */}
            <div className="relative min-h-screen w-screen bg-gradient-to-l from-[#E1EAF0] via-[#4187B5] to-[#2F688D] overflow-y-auto">
                {/*
        Contenedor de la imagen del logo de la IPS
        Posicionado de forma absoluta en la esquina superior izquierda
        */}
                <div className="absolute top-0 left-0 m-4">
                    {/*
            Imagen del logo de la IPS
            Clases para el tamaño en pantallas pequeñas (w-20 h-10)
            y medianas a grandes (md:w-30 md:h-15)
          */}
                    <img src={ipsLogo} alt="IPS Logo" className="w-20 h-10 md:w-30 md:h-15" />
                </div>

                {/* Contenedor del formulario */}
                <div>
                    {/*
            Formulario con estilos de fondo, borde, padding, ancho máximo,
            altura automática, márgenes y esquinas redondeadas
          */}
                    <form className="bg-[#d9d9d9] border-[20px] border-[#3c3c3c] p-5 md:p-[40px_50px_0px_50px] w-[90%] max-w-[500px] h-auto md:h-[600px] mx-auto mt-[80px] rounded-[0]">
                        {/*
            Elemento decorativo en la parte superior del formulario
            Posicionado de forma absoluta, centrado horizontalmente
            */}
                        <div className="absolute w-[150px] h-[50px] md:w-[192px] md:h-[60px] left-1/2 top-[20px] md:top-[30px] bg-[#1E1E1E] rounded-[10px] mt-[55px] -translate-x-1/2"></div>

                        {/* Título principal del formulario */}
                        <h1 className="text-[24px] md:text-[30px] tracking-widest mt-5 mb-10 font-extrabold">
                            TURNO GENERADO
                        </h1>

                        {/*
            Contenedor SVG para el diseño del ticket
            Define el ancho, alto, viewBox y namespace
            */}
                        <svg
                            width="225" // Ajustado para hacerlo más pequeño en móviles
                            height="296.44" // Ajustado para hacerlo más pequeño en móviles
                            viewBox="0 0 359 527"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto"
                        >
                            {/*
                Ruta (path) que define la forma del ticket
                Utiliza coordenadas y curvas para dibujar la forma
                Relleno de color blanco, borde negro
              */}
            <path
                d="M0.5 31.1915C0.5 20.8689 5.80706 11.2713 14.5498 5.78306L15.7981 4.99945C26.1875 -1.52251 39.5009 -1.06226 49.4151 6.16163L53.0571 8.8153C58.2174 12.5754 62.0436 17.8837 63.9789 23.9683L84.481 88.4252C85.4867 91.5871 87.01 94.5603 88.9888 97.2236L114.004 130.892C119.664 138.51 128.594 143 138.085 143H183H229.14C240.145 143 250.267 136.974 255.513 127.299L272.811 95.394C273.602 93.9345 274.271 92.4118 274.81 90.8416L297.841 23.7983C299.894 17.821 303.783 12.6449 308.952 9.00842L313.336 5.9243C323.327 -1.10423 336.659 -1.08436 346.629 5.97392V5.97392C354.273 11.3859 358.817 20.1701 358.817 29.5363V256.432C358.817 260.567 357.963 264.657 356.307 268.445L258.536 492.178C255.314 499.549 249.268 505.318 241.753 508.189L220 516.5L192.45 525.435C186.314 527.425 179.7 527.384 173.588 525.319L147.5 516.5L125.128 508.007C117.853 505.245 111.936 499.764 108.626 492.722L3.35002 268.764C1.47312 264.771 0.5 260.413 0.5 256.002V31.1915Z"
                fill="white"
                strokeWidth="2"
            />

                            {/*
                Texto del nombre dentro del SVG
                Centrado horizontal y verticalmente
                Color negro, tamaño de fuente ajustado, negrita
              */}
                            <text
                                x="50%"
                                y="38%"
                                textAnchor="middle"
                                fill="black"
                                className="text-[55px] font-bold"
                                dy=".3em"
                                textLength="320"
                                lengthAdjust="spacingAndGlyphs"
                            >
                                Juan Valderrama
                            </text>

                            {/*
                Texto de la fecha dentro del SVG
                Centrado horizontal y verticalmente
                Color negro, tamaño de fuente ajustado
              */}
                            <text
                                x="50%"
                                y="50%"
                                textAnchor="middle"
                                fill="black"
                                className="text-4xl font-normal"
                                dy=".3em"
                            >
                                30/02/2025
                            </text>

                            {/*
                Texto del número dentro del SVG
                Centrado horizontal y verticalmente
                Color negro, tamaño de fuente ajustado, negrita
              */}
                            <text
                                x="50%"
                                y="74%"
                                textAnchor="middle"
                                fill="black"
                                className="text-[108px] font-bold"
                                dy=".3em"
                            >
                                69
                            </text>
                        </svg>

                        {/*
            Mensaje de espera
            Alineado al centro, con subrayado y margen inferior
            */}
                        <div className="mt-6">
                            <label className="text-[16px] md:text-[18px] tracking-widest  mb-4">
                                ESPERA AL LLAMADO DEL NÚMERO
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </center>
    )
}
