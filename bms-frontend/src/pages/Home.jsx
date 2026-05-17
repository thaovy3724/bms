import React from 'react'
import BannderSlider from '../components/shared/BannerSlider';
import Recommended from '../components/Recommended';
import LiveEvents from '../components/LiveEvents';

const Home = () => {
  return (
    <div>
        <BannderSlider/>
        <Recommended/>
        <LiveEvents/>
    </div>
  )
}

export default Home
    