
import React, { useEffect, useState } from 'react'

import { addUser, getUser } from '../../../service/apiCall';

function Conversation() {

    const [user,setUser] = useState([]);

    useEffect(()=>{fetchData()},[]);

    const fetchData =async()=>{

        try{

           const resp =  await getUser();

           setUser(resp);


        }catch(err){
            console.log(err);
        }
    }

  return (
    <div>Conversation</div>
  )
}

export default Conversation