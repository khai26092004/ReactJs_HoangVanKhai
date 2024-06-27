import { useEffect, useState } from 'react';
import axios from './api/hvkApi'
import './App.css';
import HvkListUser from './components/HvkListUser';

function HvkApp() {
  const [HvkListUser,setHvkListUser] = useState([]);
  const hvkGetAllUsers = async ()=>{
    const hvkResponse = await axios.get("hvkUsers");
    console.log("Api data:",hvkResponse.data);
    setHvkListUser(hvkResponse.data)
  }
  useEffect(()=>{
    hvkGetAllUsers();
    console.log("State Data",hvkListUser);
  },[]) 

  return (
    <div className="container border my-3">
      <h1>On tap Api</h1>
      <hr/>
      <HvkListUser renderHvkListUser={HvkListUser}/>
    </div>
  );
}

export default HvkApp;
