import './Header.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props => 
    <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark menu">
            <a className="navbar-brand" href="/">Tarefas</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <  span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active  " href="#/">Questão 1 <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/q2" className="nav-link active " href="#/q2">Questão 2</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/q3" className="nav-link active " href="#/q3">Questão 3</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/q4" className="nav-link active " href="#/q4">Questão 4</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>