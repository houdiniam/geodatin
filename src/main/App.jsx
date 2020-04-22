import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Logo from '../components/templates/Logo'
import Footer from '../components/templates/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo/>
            <Routes/>
            <Footer/>
        </div>
    </BrowserRouter>
