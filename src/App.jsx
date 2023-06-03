// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import NewsItem from './NewsItem'


export default class App extends Component {  //class component start here
  // c = 'Aditi';
  render() {


    // console.log(ImageUrl, title, description, 17)

    return (
      <div className='my-3'>
        {/* <strong>hello my first class based components {this.c}</strong> */}
        <NavBar />
        <News />
      </div >
    )
  }
}




