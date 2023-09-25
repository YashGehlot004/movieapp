import axios from "axios";
import BasicExample from "./Comman/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OffcanvasExample from "./Comman/Header";
import Pagination from 'react-bootstrap/Pagination';


function App() {

  let [mData, setmData] = useState([])
  let [update, setUpdate] = useState(1)

  let getFData = () => {

    
    let ApiBAse = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${update}`

    axios.get(ApiBAse)
      .then((res) => {
        setmData(res.data.results)

      })
  }

  let getData = (e) => {
    let inpValue = e.target.value
   

    if (inpValue != '') {

      let ApiUral = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${inpValue}`;

      axios.get(ApiUral)

        .then((res) => {
          setmData(res.data.results)
        })
    }

    else {
      getFData()
    }

  }

  let nextPage = () => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
    setUpdate(++update)
    getFData()

  }

  let PrevPage = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });

    update > 1 ? setUpdate(--update) : setUpdate(1)
    getFData()

  }

  useEffect(() => {
    getFData()

  }, [])




  return (
    <div className="">
      <OffcanvasExample/> 
      <div className=" py-2 ">
        
        
      </div>
     <div className="container-fluid">
     <div className="container">

<h1 className="text-center py-3 fs-1 Heading">
  The Biggest  Hits  Movies
</h1>

<form className="text-center" action="">
  <input autocomplete="off" onChange={(e) => getData(e)} className="w-100 py-2 px-3" type="text" placeholder="Search Here" />
</form>
<div className="row g-3  pt-4 g-3">
  <BasicExample Data={mData} />
</div>
</div>
     </div> 
      <Pagination  className="d-flex justify-content-center "> 
      <Pagination.Prev  onClick={() => PrevPage()} />
      <Pagination.Item>{update} </Pagination.Item>
      <Pagination.Next onClick={() => nextPage()} />
     </Pagination>
     
      
      <div className="p-3">
      <span className="fw-bold"> Made by Yash Gehlot </span>
      <a className="text-black fw-bold" href="https://www.linkedin.com/in/yash-gehlot-14304025a/"> Find on Likdin  </a>
      </div>
    </div>
  );
}

export default App;
