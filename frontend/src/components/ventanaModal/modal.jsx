import React from "react";

// Componente Modal que recibe tres props:
// - isOpen: determina si el modal se muestra o no.
// - onClose: funcion para cerrar el modal.
// - onConfirm: funcion a ejecutar cuando el usuario confirma la accion.

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null; // No renderiza el modal si isOpen es false

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#000c] bg-opacity-50 p-4">
         {/* Contenedor del modal */}
            <div className="bg-white p-4 sm:p-5.67 rounded-lg shadow-lg w-[90%] sm:w-90.72 max-w-md">
        
                {/* Titulo del modal */}
                <h2 className="text-base sm:text-[15.26px] text-center font-bold mb-3 sm:mb-3.78">
                    ¡CUIDADO!
                </h2>
            
                {/* Mensaje de confirmacion */}
                <p className="text-center text-[13.3px] sm:text-[14.36px]">
                    ¿Estás seguro de que tus datos fueron CORRECTAMENTE digitados?
                </p>

                    {/* Botones de accion */}
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-4">
                        {/* Botón para cerrar el modal y corregir datos */}
                        <button
                            onClick={onClose}
                            className="bg-[#bd1d1d] text-white px-3 sm:px-3.78 py-2 rounded text-[13.3px] sm:text-[14.36px]">
                            Regresar
                        </button>
                
                        {/* Botón para confirmar la accion */}
                        <button 
                            onClick={onConfirm}
                            className="bg-[#1d8f1d] text-white px-3 sm:px-3.78 py-2 rounded text-[13.3px] sm:text-[14.36px]">
                            Estoy Seguro(a)
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default Modal;
