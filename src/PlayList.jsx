import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import OffcanvasExample from './Comman/Header';





const PlayList =  () => {
    let imgPath = ('https://image.tmdb.org/t/p/w1280');

    let [Data,setData] = useState([]);

   let getDAta=()=>{
    
    let GetData = JSON.parse(localStorage.getItem("userdetail")) ?? [] ;
    setData(GetData)

   }

   let removeItem=(v)=>{

    toast.warning('Removed')

      let GetData = JSON.parse(localStorage.getItem("userdetail")) ?? [] ;
      
      let filtErdata = GetData.filter((vall)=>vall.id != v)
      
      localStorage.setItem('userdetail', JSON.stringify(filtErdata));

      getDAta()
   }

   let showMore=(values)=>{


   }
   
  

    useEffect(()=>{
      getDAta()
    },[])

  return (

    <>
     <OffcanvasExample/>
  
    <div className='container'>
      <div className='row'>
      {
      
      (Data.length>=1) 



      ?

      Data.map((v,i)=>{
        return(
         <div className='col-lg-3 col-12 mt-5 ' key={i}>
         <Card className=' Cards '>
       <Card.Img variant="top" src={imgPath+v.poster_path} />
       <Card.Body>
         <Card.Title> {v.original_title}</Card.Title>
         <Card.Text style={{height:'50px',overflow:'hidden'}} className=''>
          {v.overview }
         </Card.Text>
         <div className='d-flex justify-content-between'>
         <button onClick={()=>removeItem(v.id)} className='btn1 px-3 rounded-2'> Remove </button>
         </div>
       </Card.Body>
     </Card>
     </div>
        )
      
    })

      :

    <h1 className='text-center text-white'> No Data Found</h1>
        
      }
         </div>
         <ToastContainer position='top-center'  autoClose={1000}    draggable />
    </div>
    </>
  )
}

export default PlayList
