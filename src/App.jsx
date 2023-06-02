// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
export default class App extends Component {  //class component start here
  // c = 'Aditi';
  render() {
    let { title, description } = this.props
    return (
      <div>
        {/* <strong>hello my first class based components {this.c}</strong> */}
        <NavBar />
        <News />
        <div class="card" style={{ width: "18rem" }}>
          <img src="https://indianexpress.com/article/technology/science/scientist-expand-search-intelligent-alien-life-8640221/" class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div >
    )
  }
}



