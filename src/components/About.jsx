import React from 'react'
import img2 from "../assets/images/img/img-1.png"
import img3 from "../assets/images/img/img-2.png"

const About = () => {
  return (
   <section  id='about' >
    <div className='about-section wrapper'  >
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-12 mb-lg-0 mb-5"
                //  style={{border:"1px solid red"}}
                 >
                    <div className="card border-0">
                        <img src={img2} alt="" className='img-fluid' />
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 text-sec">
                    <h2>We pride overselves on making food from the best ingradients</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dolores optio necessitatibus earum cum, omnis quo, </p>
                    <button className='main-btn mt-4' >Learn more</button>
                </div>
            </div>
        </div>
        <div className="container food-type">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
                    <h2>We make everything by hand with the best possible ingriedients</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At dolorem illum aut architecto a, eaque magnam neque dolores ullam fuga. Obcaecati quod eveniet quia recusandae ipsa placeat labore sapiente quas!</p>
                    <ul className='list-unstyled py-3' >
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                      
                    </ul>
                    <button className='main-btn mt4'>Learn more</button>
                </div>
                <div className="col-lg-7 col-md-12 ">
                    <div className='card border-0'>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default About