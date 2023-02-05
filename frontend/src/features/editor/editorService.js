import axios from "axios";

const API_URL = 'api/editor/'

// Create new Editor
const createEditor = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.post(API_URL,config)
  
    return response.data
  }
  
// Get user Notes
const getEditor = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL, config)
  
    return response.data
  }
  
// Get user goals
const updateEditor = async (editorData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL, editorData, config)
  
    return response.data
  }
  

const editorService = {
    createEditor,
    getEditor, 
    updateEditor
}

export default editorService