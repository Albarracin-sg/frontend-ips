// respuestaStorage.js

// Función para guardar la respuesta en localStorage
export const guardarRespuesta = (respuesta) => {
    try {
        //Se convierte el parametro (respuesta del servidor) en formato Guason (JSON) y se guarda bajo la llave 'respuestaAPI'
        //setItem - guarda informacion
        localStorage.setItem('respuestaAPI', JSON.stringify(respuesta));
        return true;
    } catch (error) {
        console.error('Error al guardar en localStorage:', error);
        return false;
    }
    //Toda esta informacion de respuesta del server o back va quedar almacenada en esta funcion (guardarRespuesta())
};

// Función para obtener la respuesta desde localStorage
export const obtenerRespuesta = () => {
    try {
        //Se guarda la informacion de la funcion de guardarRespueta() con la llave 'respuestaAPI' dentro de una constante
        const respuestaGuardada = localStorage.getItem('respuestaAPI');
        //Si respuesta guardada 'existe' entonces la convierte devuelta en un formato JS si no retorna 'null'
        return respuestaGuardada ? JSON.parse(respuestaGuardada) : null;
    } catch (error) {
        console.error('Error al obtener de localStorage:', error);
        return null;
    }
};

// Función para eliminar la respuesta de localStorage
export const eliminarRespuesta = () => {
    try {
        localStorage.removeItem('respuestaAPI');
        return true;
    } catch (error) {
        console.error('Error al eliminar de localStorage:', error);
        return false;
    }
};