import axios from 'axios'

const url = 'http://localhost:4000'

export const addUser =async(user)=>{

  

        return await axios.post(`${url}/add`,user);

    

}

export const getUser = async ()=>{

    return await axios.get(`${url}/`);

}