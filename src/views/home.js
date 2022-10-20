import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lead Mobility Agent</title>
        <meta property="og:title" content="Lead Mobility Agent" />
      </Helmet>
    </div>
  )
}

export default Home
