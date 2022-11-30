import React from 'react'

const TopBanner = () => {
  return (
   <section id='home'>
    <div className='container-fluid px-0 top-banner' >
       <div className='container'>
          <div className='row'>
            <div  className='col-md-6 col-lg-5' >
                <h1>Good food chises are good investments</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt aspernatur totam .</p>
            <div className='mt-4'>
                <button className='main-btn'>Order Now <i className='fa fa-shopping-basket ps-3' ></i></button>
                <button className='white-btn ms-lg-4 mt-lg-0 mt-4 '>Order Now <i className='fa fa-angle-right '/> </button>
            </div>
           
            </div>
          </div>

       </div>

    </div>
   </section>
  )
}

export default TopBanner