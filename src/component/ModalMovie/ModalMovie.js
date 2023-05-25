import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import './style.scss'
function Example({ show , handleClose , item ,isTow}) {
  
  // const send = (e) => {
  //   e.preventDefault();
  //    const obj = {
  //     comment : e.target.comment.value,
  //     ...item
  //   }
    
  //   // console.log(obj)
  //   axios.post(`${process.env.REACT_APP_SERVER}/addMovie`,obj)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  //     handleClose();
  // }
  // const updateCard = (e) => {
  //   e.preventDefault();
  //   const obj = {
  //     comment : e.target.comment.value
  //   }
  //   console.log(obj)
  //   axios.put(`${process.env.REACT_APP_SERVER}/Update/${item.id}`,obj).then(ele=>{
  //     console.log('updated')
  // })
  //   }
  const send = () => {
    axios.post(`${process.env.REACT_APP_SERVER}/addMovie`,item)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    handleClose();
  }
      
  
  return (
    <>

      <Modal show={show} onHide={handleClose} className='modal'>
        <Modal.Header closeButton>
          <Modal.Title>{item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body ><Card.Img style={{height:'400px'}} variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.poster_path} />
        </Modal.Body>
        
        {
          !isTow &&
          <>
           <Modal.Body>{item.overview}
        </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={send} className='button' >
            Add to Favourite<i class="fa-solid fa-heart"></i>
          </Button>
        </Modal.Footer>
          </>
          
        }
          {
            isTow &&
            
            <>

          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit'>
            Update
          </Button>
        </Modal.Footer>
            </>
        }

      </Modal>
    </>
  );
      }

export default Example;