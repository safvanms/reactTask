import React from 'react'
import Header from '../Header/Header'
import './about.css'


export default function About() {
  return (
    <div>
      <Header/>
      <div className="dummyPage">
        <h1>About Page</h1>
        <img src="https://picsum.photos/300/300" alt="about" />
      </div>
    </div>
  )
}
