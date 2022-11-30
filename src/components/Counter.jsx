import React from 'react'


const Counter = () => {
    
  return (
    <section id='counter'>
        <section className='counter-section'>
            <div className="container">
                <div className="row text-center">
                     <div className='col-md-3 mb-lg-0 mb-md-0 mb-5'>
                        <h2>
                            <span id='count1' className='light' >1245</span>+
                        </h2>
                        <p>SAVINGS</p>
                     </div>
                     <div className='col-md-3 mb-lg-0 mb-md-0 mb-5'>
                        <h2>
                            <span id='count2' className='light' >1145</span>+
                        </h2>
                        <p>PHOTOS</p>
                     </div>
                     <div className='col-md-3 mb-lg-0 mb-md-0 mb-5'>
                        <h2>
                            <span id='count3' className='light'>4236</span>+
                        </h2>
                        <p>ROCKETS</p>
                     </div>
                     <div className='col-md-3 mb-lg-0 mb-md-0 mb-5'>
                        <h2>
                            <span id='count4' className='light' >2456</span>+
                        </h2>
                        <p>GLOBES</p>
                     </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Counter