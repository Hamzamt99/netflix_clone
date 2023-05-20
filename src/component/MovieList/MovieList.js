import React from 'react'
import Movie from '../Movie/Movie'


export default function MovieList({trend}) {
  return(
    <>
    {
        trend.map(item =>{
            return(
                <Movie  item = {item} />
            )
        })
    }
   
    </>
)
}
