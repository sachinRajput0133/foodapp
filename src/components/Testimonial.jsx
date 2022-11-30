import React from 'react'
import review1 from "../assets/images/review/review-1.jpg"
import review2 from "../assets/images/review/review-2.jpg"
const Testimonial = () => {
  return (
<section id='testimonial'>
    <div className='testimonial-section wrapper'>
       <div className="container text-center">
        <div className='text-center pb-4'>
            <h2>Testimonial</h2>
             <div className="row">
                <div className="col-sm-12 col-lg-10 offset-lg-1">

        

<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="carousel-caption  d-md-block">
      <img src={review1} className="d-block w-100" alt="..."/>
        <p>Some representative placeholder content for the first slide.</p>
        <h5>First slide label</h5>
      </div>
    </div>
    <div className="carousel-item">
      <div className="carousel-caption  d-md-block">
      <img src={review2} className="d-block w-100" alt="..."/>
        <p>Some representative placeholder content for the second slide.</p>
        <h5>Second slide label</h5>
      </div>
    </div>
    <div className="carousel-item">
      <div className="carousel-caption  d-md-block">
      <img src={review1} className="d-block w-100" alt="..."/>
        <p>Some representative placeholder content for the third slide.</p>
        <h5>Third slide label</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  
                </div>
             </div>
        </div>
       </div>

    </div>
</section>
  )
}

export default Testimonial