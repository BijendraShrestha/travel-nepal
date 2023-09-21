import React from 'react'
import '../Navbar/navbar.scss'
import {AiOutlineSearch} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg ">
            <div className="container ">
                
                <Link className="navbar-brand" to="#">
                    <img src={require('../../assets/logo-travel.png')} alt="logo" className='logo'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0 justify-content-center">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#offers">Offers</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#news">News</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    
                    
                </ul>
                <button className="btn " type="submit"><AiOutlineSearch /></button>
                
                </div>
            </div>
    </nav>
    
   </>
  )
}

export default Navbar
