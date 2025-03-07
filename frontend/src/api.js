import axios from "axios";

// Aca va la URL de la API cuando se tenga el backend solo se cambia la url
const api = axios.create({
    baseURL:"http://localhost:3000/api/Envioform"
})

export default api;