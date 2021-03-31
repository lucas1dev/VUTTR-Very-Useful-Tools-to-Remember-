import axios from 'axios'
const BASE_BACKEND_URL = 'http://localhost:3000'

export default {
    getAllTools: () =>
        axios.get(`${BASE_BACKEND_URL}/tools`),
    getTagTool: (toolId) =>
        axios.get(`${BASE_BACKEND_URL}/tools?tags_like=${toolId}`),
    addTools: (tools) =>
        axios.post(`${BASE_BACKEND_URL}/tools`,tools),
    deleteTool: (toolId) =>
        axios.delete(`${BASE_BACKEND_URL}/tools/${toolId}`),
}