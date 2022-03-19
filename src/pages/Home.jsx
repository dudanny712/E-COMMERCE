import React from 'react'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
// import OpeningPage from '../components/OpeningPage'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        {/* <OpeningPage/> */}
        <Announcements/>
        <Navbar/>
        <Slider/>
        <Categories/>
        </div>
  )
}

export default Home