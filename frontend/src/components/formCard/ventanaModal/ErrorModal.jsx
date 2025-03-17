import React from 'react'

const ErrorModal = ({ isOpen, onClose, message }) => {
	if (!isOpen) return null

	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-[#000c] bg-opacity-50 p-4 z-50"
			onClick={onClose} // Cierra el modal al hacer clic en el fondo
		>
			{/* Contenedor del modal con onClick para evitar que el clic dentro lo cierre */}
			<div
				className="bg-white p-4 sm:p-5.67 rounded-lg shadow-lg w-[90%] sm:w-90.72 max-w-md relative"
				onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal lo cierre
			>
				{/* Botón de cierre (X) */}
				<button
					onClick={onClose}
					className="absolute top-0 right-2 text-black text-[18px] px-2 py-1 rounded cursor-pointer"
				>
					x
				</button>

				{/* Ícono de error */}
				<div className="flex justify-center mb-3">
					<div className="rounded-full bg-red-100 p-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="text-red-600"
						>
							<circle cx="12" cy="12" r="10"></circle>
							<line x1="15" y1="9" x2="9" y2="15"></line>
							<line x1="9" y1="9" x2="15" y2="15"></line>
						</svg>
					</div>
				</div>

				{/* Título */}
				<h2 className="text-base sm:text-[15.26px] text-center font-bold mb-3 sm:mb-3.78">
					ERROR
				</h2>

				{/* Mensaje */}
				<p className="text-center text-[13.3px] sm:text-[14.36px]">
					{message ||
						'Ocurrió un error al cargar los datos. Por favor, intente nuevamente.'}
				</p>

				{/* Botón */}
				<div className="flex justify-center mt-4">
					<button
						onClick={onClose}
						className="bg-[#bd1d1d] hover:bg-[#8f1d1d] cursor-pointer text-white px-4 sm:px-5 py-2 rounded text-[13.3px] sm:text-[14.36px]"
					>
						Cerrar
					</button>
				</div>
			</div>
		</div>
	)
}

export default ErrorModal
