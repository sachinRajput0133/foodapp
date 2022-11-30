import React from 'react'

const NewsLetter = () => {
  return (
   <section id='newsletter'>
    <div className="newsletter wrapper py-5">
        <div className="container">
             <div className="row ">
                <div className="col-sm-12">
                    <div className='text-content text-center pb-4'>
                        <h2 >Hurry Up! Subscribe our newsletter and getr 25% off</h2>
                        <p>Limited time offer for this month.No Creditcard required</p>
                    </div>
                    <form action="" className='newsleter' >
                        <div className='row' >
                            <div className='col-md-8 col-12 offset-lg-1' >
                                <input className='form-control' placeholder='Email' type="email" />
                            </div>
                            <div className='col-md-2 col-12'>
                                <button className='main-btn'>Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
             </div>
        </div>

    </div>
   </section>
  )
}

export default NewsLetter