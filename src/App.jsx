// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import NewsItem from './NewsItem'
import { Routes, Route } from 'react-router-dom'



export default class App extends Component {  //class component start here
  // c = 'Aditi';
  render() {


    // console.log(ImageUrl, title, description, 17)

    return (
      <div className='my-3'>
        {/* <strong>hello my first class based components {this.c}</strong> */}
        <NavBar />

        <Routes>
          <Route exact path='/' element={<News pageSize={5} />} />
          <Route exact path='/business' element={<News category="business" pageSize={5} />} />
          <Route exact path='/sports' element={<News category="sports" pageSize={5} />} />
          <Route exact path='/general' element={<News category="general" pageSize={5} />} />
          <Route exact path='/technology' element={<News category="technology" pageSize={5} />} />
          <Route exact path='/entertainment' element={<News category="entertainment" pageSize={5} />} />
          <Route exact path='/health' element={<News category="health" pageSize={5} />} />

        </Routes>
      </div >
    )
  }
}




