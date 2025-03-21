// respuestaStorage.js

// Función para guardar la respuesta en localStorage
export const guardarRespuesta = (respuesta) => {
    try {
        localStorage.setItem('respuestaAPI', JSON.stringify(respuesta));
        return true;
    } catch (error) {
        console.error('Error al guardar en localStorage:', error);
        return false;
    }
};

// Función para obtener la respuesta desde localStorage
export const obtenerRespuesta = () => {
    try {
        const respuestaGuardada = localStorage.getItem('respuestaAPI');
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