import React from 'react'
import '../Tours/tour.scss'

function Tours() {
  return (
    <div className='tours py-5'>
        <div className="container">
            <div className="tours-intro text-center">
            <h2 className='tour-h2'>We have the best tours</h2>
            <p className='tour-p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
                convallis tortor.
                Suspendisse potenti. In faucibus massa arcu, vitae cursus mi
                hendrerit nec.
            </p>
            </div>

            <div className="row">

            <div className="col-lg-4 " >
                <img src={require('../../assets/pack-1.jpg')} className="card-img-top tour-img-pack" alt="..." />
                
                <div className="tour-card-body">
                    <h5 className="card-title">Helicopter Tour</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo a eveniet commodi possimus placeat ipsum sed eos dolores dignissimos rem, tempora veniam. Similique, amet et?</p>
                    <button type="button" className="tour-button">See More...</button>
                </div>
            </div>

            <div className=" col-lg-4" >
                <img src={require('../../assets/pack-2.jpg')} className="card-img-top" alt="..." />
                <div className="tour-card-body">
                    <h5 className="card-title">Mountain Flight</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo a eveniet commodi possimus placeat ipsum sed eos dolores dignissimos rem, tempora veniam. Similique, amet et?</p>
                    <button type="button" className="tour-button">See More...</button>
                </div>
            </div>

            <div className=" col-lg-4" >
                <img src={require('../../assets/pack-3.jpg')} className="card-img-top" alt="..." />
                <div className="tour-card-body">
                    <h5 className="card-title">Kathmandu City Tour</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo a eveniet commodi possimus placeat ipsum sed eos dolores dignissimos rem, tempora veniam. Similique, amet et?</p>
                    <button type="button" className="tour-button">See More...</button>
                </div>
            </div>

            </div>
        </div>
      
    </div>
  )
}

export default Tours
