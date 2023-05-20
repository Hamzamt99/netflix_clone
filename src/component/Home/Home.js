import React, { useState } from 'react';
import MovieList from '../MovieList/MovieList';
import axios from 'axios';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';

export default function Home() {

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
      <Row>

        <MovieList trend={trend} />

      </Row>

    </>
  )
}
