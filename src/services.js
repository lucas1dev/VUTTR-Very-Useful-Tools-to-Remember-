import axios from 'axios'
const BASE_BACKEND_URL = 'http://localhost:3000'

export default {
    getAllTools: () =>
        axios.get(`${BASE_BACKEND_URL}/tools`),
    getSearchTools: (toolId) =>
        axios.get(`${BASE_BACKEND_URL}/tools?q=${toolId}`),
    getSearchTagTool: (toolId) =>
        axios.get(`${BASE_BACKEND_URL}/tools?tags_like=${toolId}`),
    addTools: (tools) =>
        axios.post(`${BASE_BACKEND_URL}/tools`,tools),
    deleteTool: (toolId) =>
        axios.delete(`${BASE_BACKEND_URL}/tools/${toolId}`),
}