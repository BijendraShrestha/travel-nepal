import React from 'react'
import '../Offers/offers.scss'
function Offers() {
  return (
    <section className='offer-section'>
        <div className="container offer-container">
            <h2 className="offer-h2 text-center my-4 fw-bold">
                The Best Offers With Rooms
            </h2>
            <div className="row py-3 offer-row">
                <div className="col-lg-3 offer-div-img">
                    <img src={require('../../assets/offer-01.webp')} alt="" className='offer-img '/>
                    <h3 className='offer-h3 '>Lorem ipsum</h3>
                </div>
                <div className="col-lg-3 offer-div-content">
                    <h4><span>$70</span>Per Night</h4>
                    
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae voluptas accusamus accusantium nesciunt quas quibusdam sint velit fuga, veritatis quidem aliquam, nemo ut beatae eum.</p>
                    
                    <button>Read More</button>
                </div>
                <div className="col-lg-3 offer-div-img">
                    <img src={require('../../assets/offer-02.webp')} alt="" className='offer-img'/>
                    <h3 className='offer-h3 '>Lorem ipsum</h3>
                </div>
                <div className="col-lg-3 offer-div-content">
                <h4><span>$50</span>Per Night</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae voluptas accusamus accusantium nesciunt quas quibusdam sint velit fuga, veritatis quidem aliquam, nemo ut beatae eum.</p>
                    
                    <button>Read More</button>
                </div>
            </div>

            <div className="row py-3 offer-row">
                <div className="col-lg-3 offer-div-img">
                    <img src={require('../../assets/offer-03.webp')} alt="" className='offer-img '/>
                    <h3 className='offer-h3 '>Lorem ipsum</h3>
                </div>
                <div className="col-lg-3 offer-div-content">
                    <h4><span>$90</span>Per Night</h4>
                    
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae voluptas accusamus accusantium nesciunt quas quibusdam sint velit fuga, veritatis quidem aliquam, nemo ut beatae eum.</p>
                    
                    <button>Read More</button>
                </div>
                <div className="col-lg-3 offer-div-img">
                    <img src={require('../../assets/offer-04.webp')} alt="" className='offer-img'/>
                    <h3 className='offer-h3 '>Lorem ipsum</h3>
                </div>
                <div className="col-lg-3 offer-div-content">
                <h4><span>$30</span>Per Night</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae voluptas accusamus accusantium nesciunt quas quibusdam sint velit fuga, veritatis quidem aliquam, nemo ut beatae eum.</p>
                    
                    <button>Read More</button>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Offers
