import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/AboutPage/About';
import Contact from './components/ContactPage/Contact';
import Login from './components/Login/Login';

export default function App() {
	return (
		<React.StrictMode>
			<div className="App">
				<div className='container'>
					<BrowserRouter>
						<Routes>
							<Route index path='/' element={<Login />} />
							<Route index path='/home/:id' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='/contact' element={<Contact/>} />
						</Routes>
					</BrowserRouter>
				</div>
			</div >
		</React.StrictMode>
	);
}


