import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from '../ModalMovie/ModalMovie'
import { useState } from 'react';
import axios from 'axios';
import './style.scss'


function Movie({ item, isTow, render }) {
  const [short, setshort] = useState(false);
  const handleshort = () => setshort(!short);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // const send = () => {
  //   axios.post(`${process.env.REACT_APP_SERVER}/addMovie`,item)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  //   handleClose();
  // }


const deleteCard = () => {
  axios.delete(`${process.env.REACT_APP_SERVER}/Delete/${item.id}`).then(ele => {
    console.log('deleted')
    render(item.id)
  })

}


return (
  <>
    <Card >
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.poster_path} />
      <Card.Body style={{backgroundColor:'black'}}>
        
        {
          !isTow &&
          <button variant="primary" onClick={setShow} className='button'>Details<i class="fa-sharp fa-solid fa-circle-info"></i></button >
        }
        {
          isTow &&
          <>
            <Button variant="danger" onClick={deleteCard} className='button'>Delete<i class="fa-solid fa-trash"></i></Button>
          </>
        }
      </Card.Body>
    </Card>
    <ModalMovie handleClose={handleClose} show={show} item={item} isTow={isTow} />
  </>
);
  }
export default Movie;

  // <div>
  //   <p>{item.title}</p>
  // </div>
