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
    <h3 className='text'>Upcoming Movie</h3>

      <Row style={{  height: '100vh'}}>
        <MovieList trend={trend} />
      </Row>
    </>

  )
}