import React from 'react'
import '../Top/top.scss'
import { BsFacebook } from 'react-icons/bs';
import { BsPinterest } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Top() {
  return (
    <section className='section-wrapper py-2'>
    <div className='container top-container'>
        <div className="row top-row">
            <div className="col-lg-2 top-left">
            <span>+987656432310</span>
            </div>
            <div className="col-lg-8  social ">
                <Link><BsFacebook className='me-3 icons'/></Link>
                <Link><BsPinterest className='me-3 icons'/></Link>
                <Link><BsInstagram className='me-3 icons'/></Link>
                <Link><BsTwitter className='me-3 icons'/></Link>
                <Link><FaLinkedinIn className='me-3 icons'/></Link>
            </div>
            <div className="col-lg-2 top-right">
                <span>Login</span>
                 <span>|</span>
                 <span>Register</span>
            </div>
        </div>
      
    </div>
    </section>
  )
}

export default Top
