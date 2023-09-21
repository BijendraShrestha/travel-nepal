import React from 'react'
import '../Search/search.scss'
import { FaHotel } from 'react-icons/fa';
import { BsFillBusFrontFill } from 'react-icons/bs';
import { GiCommercialAirplane } from 'react-icons/gi';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { RiShip2Fill } from 'react-icons/ri';
import { GiGameConsole } from 'react-icons/gi';
function Search() {
  return (
    <section className='search'>
      <div className="search-container">
        <div className="search-flex">
        
            <div className="search-tab d-flex align-items-center active">
                <FaHotel className='search-img' size={30}/>
                <span>Hotels</span>
            </div>
            <div className="search-tab d-flex align-items-center ">
            <BsFillBusFrontFill className='search-img' size={30}/>
                <span>Car rentals</span>
            </div>
            <div className="search-tab d-flex align-items-center ">
            <GiCommercialAirplane className='search-img' size={30}/>
                <span>Flights</span>
            </div>
            <div className="search-tab d-flex align-items-center ">
            <FaUmbrellaBeach className='search-img' size={30}/>
                <span>Trips</span>
            </div>
            <div className="search-tab d-flex align-items-center ">
            <RiShip2Fill className='search-img' size={30}/>
                <span>Cuises</span>
            </div>
            <div className="search-tab d-flex align-items-center ">
            <GiGameConsole className='search-img' size={30}/>
                <span>Activities</span>
            </div>
        </div>

        </div>

      <div className="search-form  py-3">
      <form className="row gy-2 gx-3 container d-flex justify-content-between align-items-center ">
        <div className="col-xl">
            <label className="" htmlFor="autoSizingInput">Destination</label>
            <input type="text" className="form-control" id="autoSizingInput" placeholder="" />
        </div>
        <div className="col-xl">
            <label className="" htmlFor="autoSizingInput">Check-in</label>
            <input type="text" className="form-control" id="autoSizingInput" placeholder="DD-MM-YY" />
        </div>
        <div className="col-xl">
            <label className="" htmlFor="autoSizingInput">Check-out</label>
            <input type="text" className="form-control" id="autoSizingInput" placeholder="DD-MM-YY" />
        </div>
        <div className="col-xl">
            <label className="" htmlFor="autoSizingSelect">Adults</label>
            <select className="form-select" id="autoSizingSelect">
            <option selected>Choose...</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
            </select>
        </div>
        <div className="col-xl">
            <label className="" htmlFor="autoSizingSelect">Children</label>
            <select className="form-select" id="autoSizingSelect">
            <option selected>Choose...</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
            </select>
        </div>
        
        <div className="col-xl align-self-end text-center">
            <button type="submit">Submit</button>
        </div>
        </form>

      </div>
    </section>
  )
}

export default Search
