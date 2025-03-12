import { useState } from 'react';
import axios from 'axios';
/*
TAREAS PARA EL 11 DE MARZO

* QUE GUARDE TAMBIEN LOS DATOS DE LA CEDULA				v
* MODIFICAR ESTILOS										
* AVERIGUAR SOBRE GET									
* QUE SE LIMPIE EL CAMPO DE BUSQUEDA					v


*/
const InicioOp = () => {
	const [dato,setDato] = useState({
		datoEnviado:"",
		opcionSeleccionada:""
	})

	const handleSubmit  = async (e) => {
		e.preventDefault();	
		
		const datosBusq = {
			busqueda: {
				DatoEnviado : OpcionBusqueda 
			},
		}

		try{
			console.log(datosBusq)
			const response = await axios.post('http://localhost:3000/api/datoX',datosBusq)
		}
		catch (error) {
			console.error("3RROR",error)
		}
		
		setDato({
			datoEnviado:"",
			opcionSeleccionada:""
		})
	}


	return (
		<div className="relative min-h-screen  bg-[#4187B5] flex justify-center items-center overflow-auto ">
			<div className="max-w-5xl mx-auto bg-[#d9d9d9] border-[7px] border-[#3c3c3c]  p-6">
				{/* Barra de búsqueda */}
				<form onSubmit={handleSubmit} className="flex mb-4 pb-6 border-b-2 border-[#3c3c3c] p-4">
					<div className="flex-1 mr-4">
						<select 
						type="text"
						className="w-full p-2 border-2 border-black"
						value={dato.opcionSeleccionada}
						onChange={(e) => setDato({ ...dato, opcionSeleccionada: e.target.value })}	
						>
						<option value="opcionBuscar">Opcion a Buscar</option>
						<option value="cedula">Cédula</option>
						<option value="turno">Turno</option>
						</select>
					</div>
					<div className="flex-1 mr-4">
						<input 
						type="text"
						name='datoEnviado'
						placeholder='Digita la busqueda...'
						value={dato.datoEnviado} 
						onChange={(e)=> setDato({...dato, datoEnviado: e.target.value })}
						className="w-full p-2 border-b-[2px] border-l-[2px] border-b-[#6EA3C7] border-l-[#6EA3C7] "
						/>
					</div>
					<div>
						<button 
						type='submit' 
						className="p-2  bg-[#6EA3C7] hover:bg-blue-700 text-white rounded transition-colors font-bold">
						Buscar
						</button>
					</div>
				</form>
				
				{/* Formulario */}
				<div className="grid grid-cols-2 gap-6 p-4 pt-2 ">
				<div>
					<input 
					type="text" 
					placeholder="PRIMER NOMBRE" 
					className="w-full p-[8px_7px] border-b-[2px] border-l-[2px] mb-4 border-b-[#6EA3C7] border-l-[#6EA3C7] bg-transparent focus:border-transparent "
					/>
					<input 
					type="text" 
					placeholder="PRIMER APELLIDO" 
					className="w-full p-[8px_7px] border-b-[2px] border-l-[2px] mb-4 border-b-[#6EA3C7] border-l-[#6EA3C7] bg-transparent"
					/>
					<input 
					type="text" 
					placeholder="LOCALIDAD" 
					className="w-full p-[8px_7px] border-b-[2px] border-l-[2px] mb-4 border-b-[#6EA3C7] border-l-[#6EA3C7] bg-transparent"
					/>
					<input 
					type="text" 
					placeholder="TIPO DE DOCUMENTO" 
					className="w-full p-[8px_7px] border-b-[2px] border-l-[2px] mb-4 border-b-[#6EA3C7] border-l-[#6EA3C7] bg-transparent"
					/>
					<input 
					type="text" 
					placeholder="FECHA DE NACIMIENTO" 
					className="w-full p-[8px_7px] border-b-[2px] border-l-[2px] mb-4 border-b-[#6EA3C7] border-l-[#6EA3C7] bg-transparent"
					/>
				</div>
				<div>
					<input 
					type="text" 
					placeholder="SEGUNDO NOMBRE" 
					className="w-full p-[8px_7px] border-b-[2px] border-l-[2px] mb-4 border-b-[#6EA3C7] border-l-[#6EA3C7] bg-transparent"
					/>
					<input 
					type="text" 
					placeholder="SEGUNDO APELLIDO" 
					className="w-full p-[8px_7px] border-b-[2px] border-l-[2px] mb-4 border-b-[#6EA3C7] border-l-[#6EA3C7] bg-transparent"
					/>
					<input 
					type="text" 
					placeholder="NUMERO DE TELEFONO" 
					className="w-full p-[8px_7px] border-b-[2px] border-l-[2px] mb-4 border-b-[#6EA3C7] border-l-[#6EA3C7] bg-transparent"
					/>
					<input 
					type="text" 
					placeholder="DOCUMENTO" 
					className="w-full p-[8px_7px] border-b-[2px] border-l-[2px] mb-4 border-b-[#6EA3C7] border-l-[#6EA3C7] bg-transparent"
					/>
					<input 
					type="text" 
					placeholder="TIPO DE CITA" 
					className="w-full p-[8px_7px] border-b-[2px] border-l-[2px] mb-4 border-b-[#6EA3C7] border-l-[#6EA3C7] bg-transparent"
					/>
				</div>
				<div className="col-span-2 flex justify-center">
					<button className="px-10 py-3 cursor-pointer bg-[#6EA3C7] hover:bg-blue-700 text-white rounded transition-colors font-bold">
					GUARDAR
					</button>
				</div>
				</div>
			</div>
		</div>
	)
}

export default InicioOp
