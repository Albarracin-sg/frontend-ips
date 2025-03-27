// Función para guardar hasta 10 respuestas en localStorage
export const guardarRespuesta = (nuevaRespuesta) => {
    try {
        // Obtener respuestas previas o inicializar como array vacío
        let respuestas = JSON.parse(localStorage.getItem('respuestaAPI')) || [];

        // Agregar nueva respuesta al inicio
        respuestas.unshift(nuevaRespuesta);

        // Limitar a 10 elementos
        if (respuestas.length > 10) {
            respuestas.pop(); // Elimina el más antiguo
        }

        // Guardar nuevamente en localStorage
        localStorage.setItem('respuestaAPI', JSON.stringify(respuestas));
        return true;
    } catch (error) {
        console.error('Error al guardar en localStorage:', error);
        return false;
    }
};

// Función para obtener las respuestas desde localStorage
export const obtenerRespuesta = () => {
    try {
        return JSON.parse(localStorage.getItem('respuestaAPI')) || [];
    } catch (error) {
        console.error('Error al obtener de localStorage:', error);
        return [];
    }
};

// Función para eliminar todas las respuestas de localStorage
export const eliminarRespuesta = () => {
    try {
        localStorage.removeItem('respuestaAPI');
        return true;
    } catch (error) {
        console.error('Error al eliminar de localStorage:', error);
        return false;
    }
};
