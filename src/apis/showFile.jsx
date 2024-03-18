import axios from "axios"
const apiUrl = __API_URL__;



export const showFile=async ()=>{
    
    try {
       const response=await axios.get(`${apiUrl}`) 
       return response.data.allFile
    } catch (error) {
        console.log(error)
    }
}