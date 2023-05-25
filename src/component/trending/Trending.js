import React, { useState } from 'react';
import MovieList from '../MovieList';
import axios from 'axios';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';


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
    <h2 className='texts'>Trending Movie</h2>
      <Row style={{  height: '100vh'}}>
        <MovieList trend={trend} />
      </Row>
    </>

  )
}