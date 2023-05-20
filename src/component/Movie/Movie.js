import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from '../ModalMovie/ModalMovie'
import { useState } from 'react';

function Movie({item}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<>
    <Card style={{ width: '18rem' , height:'100%',margin:'auto', marginTop:'20px'}}>
      <Card.Img variant="top" src={item.poster_path} alt={item.poster_path} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.overview}</Card.Text>
        <Card.Text>{item.comment}</Card.Text>
        <Button variant="primary" onClick={handleShow}>Favorite</Button>
      </Card.Body>
    </Card>
       <ModalMovie handleClose={handleClose} show ={show} item={item}/>
       </>
  );
  }
  export default Movie;
  
  // <div>
  //   <p>{item.title}</p>
  // </div>
  