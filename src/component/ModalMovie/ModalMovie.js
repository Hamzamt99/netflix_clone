import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example({ show , handleClose , item}) {
  
  const send = () => {
    axios.post(`${process.env.REACT_APP_SERVER}/addMovie`,item)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }
  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{item.overview}
        </Modal.Body>
          <textarea className='textarea' rows={5} placeholder='write your comment here ...'>{item.comment}</textarea>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={send}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;