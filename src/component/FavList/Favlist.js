import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import MovieList from '../MovieList';
import {  Row } from 'react-bootstrap';
import Navbar from '../Nav/Navbar'


export default function Favlist() {
  const [trend, settrend] = useState([]);

  const data = () => {
    axios.get(`${process.env.REACT_APP_SERVER}/getMovies`)
      .then(res => settrend(res.data))
      .catch(err => console.log(err))
  }
  const render = (id) => {
    settrend(fill=> fill.filter(item => item.id !==id))
  }
  useEffect(() => {
    data([]);
  }, []);
  return (
    <>
    <Row>
    <Navbar/>
      <MovieList trend={trend} isTow={true} render={render}/>
    </Row>
    </>
  )
}

