import { useState, useEffect } from "react";
import ipsLogo from "../../assets/ipsBlack.png";

const Screen = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = { weekday: "short", day: "numeric", month: "numeric" };
  const formattedDate = currentTime.toLocaleDateString("es-ES", options);
  let hours = currentTime.getHours();
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return (
    <div className="absolute bg-[#d9d9d9] border-[#3c3c3c] h-screen w-screen flex flex-col overflow-y-auto ">
      <div className="absolute top-[20px] right-[60px]">
        <img src={ipsLogo} alt="IPS Logo" className="w-[120px]" />
      </div>
      <div className="flex flex-grow justify-end items-start p-[40px_40px_0px_40px] gap-10">
        <div className="bg-[#d9d9d9] border-[18px] border-[#3c3c3c] w-[400px] h-[300px] flex flex-col items-center justify-center text-center ">
          <div className="relative w-[192px] h-[60px] bg-[#1E1E1E] rounded-[10px] mt-[-55px]" />
          <h2 className="text-3xl font-bold tracking-[3px] uppercase">
            Turno actual
          </h2>
          <h2 className="text-2xl font-bold uppercase my-4">
            Javier Alexander Gomez Quiroz
          </h2>
          <h2 className="text-5xl font-bold text-[#9B0000] uppercase">TURNO</h2>
        </div>
        <div className="bg-gray-300 border-4 border-gray-500 mt-[60px] rounded-lg p-4 text-center shadow-lg w-[220px] flex flex-col items-center justify-center h-[220px]">
          <div className="text-6xl font-bold">{formattedTime}</div>
          <div className="text-xl mt-2">{formattedDate}</div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs  uppercase bg-[#42A5F5] text-white">
            <tr>
              <th scope="col" className="px-6 py-4">
                MODULO / CONSULTA
              </th>
              <th scope="col" className="px-6 py-4">
                NOMBRE
              </th>
              <th scope="col" className="px-6 py-4">
                TURNO
              </th>
            </tr>
          </thead>
          <tbody className="text-black">
            <tr className="bg-[#90CAF9] border-b border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-black whitespace-nowrap"
              >
                1
              </th>
              <td className="px-6 py-4.5">Javier Gomez</td>
              <td className="px-6 py-4.5">D290</td>
            </tr>
            <tr className="bg-[#90CAF9] border-b border-gray-200">
              <th
                scope="row"
                className="px-6 py-4.5 font-medium text-black whitespace-nowrap"
              >
                2
              </th>
              <td className="px-6 py-4.5">Camilo Albarracin</td>
              <td className="px-6 py-4.5">D290</td>
            </tr>
            <tr className="bg-[#90CAF9] border-b border-gray-200">
              <th
                scope="row"
                className="px-6 py-4.5 font-medium text-black whitespace-nowrap"
              >
                3
              </th>
              <td className="px-6 py-4.5">Alex Quiroz</td>
              <td className="px-6 py-4.5">D290</td>
            </tr>
            <tr className="bg-[#90CAF9] border-b border-gray-200">
              <th
                scope="row"
                className="px-6 py-4.5 font-medium text-black whitespace-nowrap"
              >
                4
              </th>
              <td className="px-6 py-4.5">Esteban Molina</td>
              <td className="px-6 py-4.5">D290</td>
            </tr>
            <tr className="bg-[#90CAF9]">
              <th
                scope="row"
                className="px-6 py-5 font-medium text-black whitespace-nowrap"
              >
                5
              </th>
              <td className="px-6 py-4.5">Santiago Salazar</td>
              <td className="px-6 py-4.5">D290</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Screen;
