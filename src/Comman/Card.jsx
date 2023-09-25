import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function BasicExample({Data}) {
  
    let imgPath = ('https://image.tmdb.org/t/p/w1280');

    let SendData=(e)=>{
      let idData = e
     
      console.log(idData)
      let GetData = JSON.parse(localStorage.getItem("userdetail")) ?? [] ;

      if(GetData.some((items)=> items.id===idData.id)){
        toast.warning('Alreday add')
      }
      else{
        toast.success('Add to playlist')
        let finaldatas = [...GetData,idData];
        localStorage.setItem('userdetail', JSON.stringify(finaldatas));
      }

       
    }

    
   
  return (  
    
  <>

  
{
  
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
          <Button onClick={()=>SendData(v)} className='btn1'>Add to Playlist</Button>
        </Card.Body>
        
      </Card>
      </div>

    )
   })

}  
    <ToastContainer position='top-center'  autoClose={1000}    draggable />
  </>
  );
}

export default BasicExample;