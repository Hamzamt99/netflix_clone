import React, { useState } from 'react';
import MovieList from '../MovieList';
import axios from 'axios';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';


export default function Trending() {

  const [trend, settrend] = useState([]);

  const data = () => {
    axios.get(`${process.env.REACT_APP_SERVER}/Upcoming`)
      .then(res => settrend(res.data.results))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    data([]);
  }, []);
  return (
    <>

      <Row className='Row'>
        <h2 className='text'><i class="fa-solid fa-clock"></i> Upcoming Movie</h2>
        <MovieList trend={trend} />
      </Row>
    </>

  )
}