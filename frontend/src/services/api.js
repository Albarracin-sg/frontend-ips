import axios from 'axios';

// Aca va la URL de la API cuando se tenga el backend solo se cambia la url
const api = axios.create({
    baseURL:"http://localh:3000",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api;