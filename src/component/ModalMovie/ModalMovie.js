import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

function Example({ show , handleClose , item ,isTow}) {
  
  const send = (e) => {
    e.preventDefault();
     const obj = {
      comment : e.target.comment.value,
      ...item
    }
    
    // console.log(obj)
    axios.post(`${process.env.REACT_APP_SERVER}/addMovie`,obj)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      handleClose();
  }
  const updateCard = (e) => {
    e.preventDefault();
    const obj = {
      comment : e.target.comment.value
    }
    console.log(obj)
    axios.put(`${process.env.REACT_APP_SERVER}/Update/${item.id}`,obj).then(ele=>{
      console.log('updated')
  })
    }
      
  
  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body ><Card.Img style={{height:'400px'}} variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.poster_path} />
        </Modal.Body>
        
        <form onSubmit={send}>
        {
          !isTow &&
          <>
          <input id='comment'  type='text' defaultValue={item.comment} placeholder='comment here'/>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit'>
            Save Changes
          </Button>
        </Modal.Footer>
          </>
          
        }
        </form>
         <form onSubmit={updateCard}>
          {
            isTow &&
            
            <>
             <Modal.Body>comment :"{item.comment}</Modal.Body>
          <input id='comment' type='text' defaultValue={item.comment}  style={{width:'100%',height:'50px'}}/>
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

          </form>
      </Modal>
    </>
  );
      }

export default Example;