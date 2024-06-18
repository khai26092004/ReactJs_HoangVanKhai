
import './App.css';
import { React, useEffect, useState } from 'react'
import axios from 'axios';
import HvkStudentList from './components/HvkStudentList';

function HvkApp() {
  const [hvkStudentList, setHvkStudentList]=useState([]);
  //Get data from api
  const hvkGetStudent = async () => {
    try {
    const response = await axios.get("https://666a9a1d7013419182cfff5a.mockapi.io/api/hvkv1/hvkstudent");
    setHvkStudentList(response.data);
    } catch (error) {
    console.error("Error fetching data:", error);
    }
    };
    useEffect(() => {
      hvkGetStudent();
    },[]);
  return (
    <div className='container border mt-5 p-3'>
      <h1 className='text-center my-3'>Xử lý chức năng CRUD - HOOK-Api</h1>
      <hr/>
      <HvkStudentList renderHvkStudentList={hvkStudentList}/>
    </div>
  );
}

export default HvkApp;
