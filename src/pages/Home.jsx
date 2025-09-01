import React, { useEffect } from 'react'

//Home Component Imports
import HomeHero from '../components/home/HomeHero'
import About from '../components/home/About'

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts or page is refreshed
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, []);

  return (
    <div className='flex flex-col'>
        <HomeHero />
        <About />
    </div>
  )
}

export default Home
