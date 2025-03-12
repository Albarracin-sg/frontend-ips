const InicioOp = () => {
	return (
		<div className="bg-white p-12">
     	<div 
        className="max-w-5xl mx-auto p-6"
        style={{ 
			borderWidth: '10px', 
			borderStyle: 'solid',
			borderColor: '#3c3c3c',
			backgroundColor: '#d9d9d9' 
        }}
      	>
        {/* Barra de búsqueda */}
        <div className="flex mb-8 border-2 border-black p-4 bg-gray-800">
          <div className="flex-1 mr-4">
            <input 
              type="text" 
              placeholder="CEDULA" 
              className="w-full p-2 border-2 border-black"
            />
          </div>
          <div className="flex-1 mr-4">
            <input 
              type="text" 
              className="w-full p-2 border-2 border-black"
            />
          </div>
          <div>
            <button className="p-2 border-2 border-black bg-white">
              Buscar
            </button>
          </div>
        </div>
        
        {/* Formulario */}
        <div className="grid grid-cols-2 gap-6 p-4 border-2 border-black bg-gray-800">
			<div>
				<input 
					type="text" 
					placeholder="PRIMER NOMBRE" 
					className="w-full p-2 mb-4 border-2 border-black"
				/>
				<input 
					type="text" 
					placeholder="PRIMER APELLIDO" 
					className="w-full p-2 mb-4 border-2 border-black"
				/>
				<input 
					type="text" 
					placeholder="LOCALIDAD" 
					className="w-full p-2 mb-4 border-2 border-black"
				/>
				<input 
					type="text" 
					placeholder="TIPO DE DOCUMENTO" 
					className="w-full p-2 mb-4 border-2 border-black"
				/>
				<input 
					type="text" 
					placeholder="FECHA DE NACIMIENTO" 
					className="w-full p-2 mb-4 border-2 border-black"
				/>
			</div>
			<div>
				<input 
					type="text" 
					placeholder="SEGUNDO NOMBRE" 
					className="w-full p-2 mb-4 border-2 border-black"
				/>
				<input 
					type="text" 
					placeholder="SEGUNDO APELLIDO" 
					className="w-full p-2 mb-4 border-2 border-black"
				/>
				<input 
					type="text" 
					placeholder="NUMERO DE TELEFONO" 
					className="w-full p-2 mb-4 border-2 border-black"
				/>
				<input 
					type="text" 
					placeholder="DOCUMENTO" 
					className="w-full p-2 mb-4 border-2 border-black"
				/>
				<input 
					type="text" 
					placeholder="TIPO DE CITA" 
					className="w-full p-2 mb-4 border-2 border-black"
				/>
			</div>
			<div className="col-span-2 flex justify-center">
				<button className="px-10 py-3 bg-blue-400 text-black font-bold">
				guardar
				</button>
			</div>
        </div>
      </div>
    </div>
	)
}

export default InicioOp
