import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from '../ModalMovie/ModalMovie'
import { useState } from 'react';
import axios from 'axios';

function Movie({item,isTow,render}) {
  const [short, setshort] = useState(false);
  const handleshort = () => setshort(!short);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteCard = () => {
    axios.delete(`${process.env.REACT_APP_SERVER}/Delete/${item.id}`).then(ele=>{
      console.log('deleted')
      render(item.id)
  })
      
  }
 

  return (
<>
    <Card style={{ width: '18rem' , height:'100%',margin:'auto',marginTop:'30px'}}>
      <Card.Img  variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.poster_path} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          <p>{short?item.overview.substring(0, 30)+" ...":item.overview}</p>
          <a className='button' onClick={handleshort}>{short?<p>see more</p>:<p>see less</p>}</a>
        </Card.Text>
        {
          !isTow &&
        <Button variant="primary" onClick={handleShow}>Favorite</Button>
        }
         {
          isTow &&
          <>
        <Button variant="success" onClick={handleShow}>Update</Button>
        <Button variant="danger" onClick={deleteCard} >Delete</Button>
          </>
        }
      </Card.Body>
    </Card>
       <ModalMovie handleClose={handleClose} show ={show} item={item} isTow={isTow}/>
       </>
  );
  }
  export default Movie;
  
  // <div>
  //   <p>{item.title}</p>
  // </div>
  