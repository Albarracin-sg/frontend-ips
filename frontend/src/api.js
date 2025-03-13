import axios from 'axios';

// Aca va la URL de la API cuando se tenga el backend solo se cambia la url
const api = axios.create({
    baseURL:"http://192.168.1.78:3000/api/Envioform",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api;