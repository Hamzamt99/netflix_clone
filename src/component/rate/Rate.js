import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './style.scss'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

function Rate() {
    const [rate, setrate] = useState([]);

    const data = () => {
      axios.get(`${process.env.REACT_APP_SERVER}/rate`)
        .then(res => setrate(res.data.results))
        .catch(err => console.log(err))
    }

    useEffect(() => {
      data([]); 
    }, []);
    return (
      <>
        <h2 className='text'>Top Rated</h2>
      
      <div className='section'>
        {
          rate.length && (
      
            <Carousel className='hero'>
            <Carousel.Item>
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w500/${rate[1].poster_path}`}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w500/${rate[10].poster_path}`}
                alt="Second slide"
              />
      
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w500/${rate[5].poster_path}`}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w500/${rate[8].poster_path}`}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w500/${rate[11].poster_path}`}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w500/${rate[14].poster_path}`}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w500/${rate[6].poster_path}`}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w500/${rate[7].poster_path}`}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
            )
          
        }
      </div>
      </>
    )
}

export default Rate

    
