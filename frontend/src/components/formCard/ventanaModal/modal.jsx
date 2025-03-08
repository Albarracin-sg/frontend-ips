import React from "react";

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000c] bg-opacity-50 p-4">
      {/* Contenedor del modal con relative para que el botón se posicione dentro */}
      <div className="bg-white p-4 sm:p-5.67 rounded-lg shadow-lg w-[90%] sm:w-90.72 max-w-md relative">
        {/* Botón de cierre (X) dentro del div blanco */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-[18px] px-2 py-1 rounded cursor-pointer"
        >
          x
        </button>

        {/* Contenido del modal */}
        <h2 className="text-base sm:text-[15.26px] text-center font-bold mb-3 sm:mb-3.78">
          ¡CUIDADO!
        </h2>

        <p className="text-center text-[13.3px] sm:text-[14.36px]">
          ¿Estás seguro de que tus datos fueron CORRECTAMENTE digitados?
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-4">
          <button
            onClick={onClose}
            className="bg-[#bd1d1d] hover:bg-[#8f1d1d] cursor-pointer text-white px-3 sm:px-3.78 py-2 rounded text-[13.3px] sm:text-[14.36px]"
          >
            Regresar
          </button>

          <button
            onClick={onConfirm}
            className="bg-[#1d8f1d] hover:bg-[#437938] cursor-pointer text-white px-3 sm:px-3.78 py-2 rounded text-[13.3px] sm:text-[14.36px]"
          >
            Estoy Seguro(a)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
