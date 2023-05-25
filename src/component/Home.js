import React from 'react'
import Trending from './trending/Trending'
import Navbar from './Nav/Navbar'
import Rate from './rate/Rate'
import Upcoming from './upcoming'
function Home() {
  return (
    <>
      <Navbar />
      <Rate/>
      <Trending />
      <Upcoming/>
    </>
  )
}

export default Home
