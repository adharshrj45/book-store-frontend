import React from 'react'
import Banner from './Banner'
import Topsellers from './TopSellers'
import Recommended from './Recommended'
import News from './News'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Topsellers/>
      <Recommended/>
      <News/>
    </div>
  )
}

export default Home
