import React, { useState } from 'react';
import MovieList from '../MovieList';
import axios from 'axios';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ReactCardCarousel from 'react-card-carousel';

export default function Trending() {

  const [trend, settrend] = useState([]);

  const data = () => {
    axios.get(`${process.env.REACT_APP_SERVER}/trending`)
      .then(res => settrend(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    data([]);
  }, []);
  return (
    <>
      <Row className='Row'>
        <h2 className='text'><i class="fa-solid fa-arrow-trend-up"></i> Trending Movie</h2>
        <MovieList trend={trend} />
      </Row>
    </>

  )
}
