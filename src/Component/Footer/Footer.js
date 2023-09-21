import React from 'react'
import '../Footer/footer.scss'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
function Footer() {
  return (
    <section className='footer-section py-5'>
      <div className="container footer-container">
      <div className="row footer-row">

        <div className="col-lg-3 footer-block">
                <h3 className='footer-h3'>About Travel</h3>
                <p className='footer-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque debitis explicabo corrupti, saepe dolore unde molestias ex beatae facilis.</p>
                <div className="awards d-flex justify-content-start">
                    <img src={require('../../assets/award-01.png')} alt="" className='img-footer'/>
                    <img src={require('../../assets/award-02.png')} alt="" className='img-footer'/>
                </div>
        </div>

        <div className="col-lg-3 footer-block">
                <h3 className='footer-h3'>Contact Information</h3>
                <p className='footer-p'>Lorem ipsum dolor sit amet</p>
                <BsFillTelephoneFill className='footer-icon'/>
                <AiTwotoneMail className='footer-icon'/>
                <ImLocation className='footer-icon'/>
            </div>

            <div className="col-lg-3 footer-block">
                <h3 className='footer-h3'>Latest Post</h3>
                <p className='footer-p'>Life is a beautiful journey not a destination</p>
                <span className='footer-span'>March 17, 2023 | No Comments</span>
            </div>

            <div className="col-lg-3 footer-block">
                <h3 className='footer-h3'>Subscribe Us</h3>
                <p className='footer-p'>Lorem ipsum dolor sit amet</p>
                <input type="email"  placeholder='Your Email..'/>
                <button type='button' className='footer-botton'>Subscribe Us</button>
            </div>

      </div>
      </div>
    </section>
  )
}

export default Footer
