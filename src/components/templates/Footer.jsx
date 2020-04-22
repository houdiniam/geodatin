import './Footer.css'
import React from 'react'
import insta from '../../assets/img/instagram.png'

export default props =>
    <footer className="footer navbar-dark bg-dark">
        <span>
            Desenvolvido por:  
            <a href="https://www.instagram.com/houdiniam/" rel="noopener noreferrer" target="_blank">
                <img src={insta} alt=""/>
            </a>
        </span>
    </footer>