import React from 'react'
import Movie from '../MovieCard'

export default function MovieList({ trend, isTow, render }) {
    return (
        <>
            {
                trend.map(item => {
                    return (
                        <>
                        <Movie item={item} isTow={isTow} render={render} />
                        
                        </>
                    )
                })
            }

        </>
    )
}