import React from 'react'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/NewsLetter'
import Products from '../components/Products'
// import OpeningPage from '../components/OpeningPage'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        {/* <OpeningPage/> */}
        <Announcements/>
        <Navbar/>
        <Slider/>
        <Products/>
        <Categories/>
        <Newsletter/>
        <Footer/>
        </div>
  )
}

export default Home