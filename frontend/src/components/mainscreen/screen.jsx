import { useState, useEffect } from "react";
import ipsLogo from "../../assets/ipsBlack.png";

const Screen = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const baseWidth = 1172;
      const baseHeight = 709;
      const newScale = Math.min(
        window.innerWidth / baseWidth,
        window.innerHeight / baseHeight
      );
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center bg-[#d9d9d9]">
      <div
        className="w-[1320px] h-[709px] origin-center"
        style={{ transform: `scale(${scale})` }}
      >
        {/* CONTENIDO ESCALADO */}
        <div className="absolute top-[20px] right-[60px]">
          <img src={ipsLogo} alt="IPS Logo" className="w-[120px]" />
        </div>

        <div className="flex justify-end items-start px-[40px] pt-[40px] gap-10">
          {/* Turno actual */}
          <div className="bg-[#d9d9d9] border-[18px] border-[#3c3c3c] w-[400px] h-[300px] flex flex-col items-center justify-center text-center">
            <div className="relative w-[192px] h-[60px] bg-[#1E1E1E] rounded-[10px] mt-[-55px]" />
            <h2 className="text-3xl font-bold tracking-[3px] uppercase">
              Turno actual
            </h2>
            <h2 className="text-2xl font-bold uppercase my-4">
              Javier Alexander Gomez Quiroz
            </h2>
            <h2 className="text-5xl font-bold text-[#9B0000] uppercase">
              TURNO
            </h2>
          </div>

          {/* Reloj */}
          <div className="bg-gray-300 border-4 border-gray-500 mt-[60px] rounded-lg p-4 text-center shadow-lg w-[220px] h-[220px] flex flex-col items-center justify-center">
            <div className="text-6xl font-bold">
              {new Date().toLocaleTimeString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div className="text-xl mt-2">
              {new Date().toLocaleDateString("es-ES", {
                weekday: "short",
                day: "numeric",
                month: "numeric",
              })}
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="relative mt-10 overflow-x-auto shadow-md">
          <table className="w-full text-base text-center text-black font-semibold border border-gray-500">
            <thead className="text-sm uppercase bg-[#42A5F5] text-white font-bold">
              <tr>
                <th className="px-6 py-3 w-1/4 border border-gray-500">
                  MODULO / CONSULTA
                </th>
                <th className="px-6 py-3 w-2/4 border border-gray-500">
                  NOMBRE
                </th>
                <th className="px-6 py-3 w-1/4 border border-gray-500">
                  TURNO
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                "Javier Gomez",
                "Camilo Albarracin",
                "Alex Quiroz",
                "Esteban Molina",
                "Santiago Salazar",
              ].map((nombre, i) => (
                <tr key={i} className="bg-[#90CAF9]">
                  <th className="px-6 py-4 w-1/4 border border-gray-500 font-semibold">
                    {i + 1}
                  </th>
                  <td className="px-6 py-4 w-2/4 border border-gray-500">
                    {nombre}
                  </td>
                  <td className="px-6 py-4 w-1/4 border border-gray-500">
                    D290
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Screen;
