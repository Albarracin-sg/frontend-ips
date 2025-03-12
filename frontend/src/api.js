import axios from 'axios';

// Instancia general de la API
const api = axios.create({
    baseURL: "http://localhost:3000/api/Envioform"
});


const api2 = axios.create({
    baseURL: "http://localhost:3000/api/api2"
});

const api3 = axios.create({
    baseURL: "http://localhost:3000/api/api3"
});

// Exportación nombrada
export { api, api2, api3 };
