import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import { Row } from 'react-bootstrap';

export default function Favlist() {
  const [trend, settrend] = useState([]);

  const data = () => {
    axios.get(`${process.env.REACT_APP_SERVER}/getMovies`)
      .then(res => settrend(res.data))
      .catch(err => console.log(err))
  }
  console.log(trend)
  useEffect(() => {
    data([]);
  }, []);
  return (
    <>
      <Row>

        <MovieList trend={trend} />
       
      </Row>

    </>
  )
}

