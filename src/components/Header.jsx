import React, { useEffect, useRef, useState } from 'react'
import logo from "../assets/images/logo.png"
const Header = () => {
// const [toggleShowMenu, setToggleShowMenu] = useState(true)
const showMenu=useRef()
  const [show,setShow]=useState(false)
  useEffect(()=>{
      window.addEventListener("scroll",()=>{
          if(window.scrollY > 20){
                        setShow(true)
          }else{
              setShow(false)
          }
      })
    
  },[])
  
const toggleShowMenuHandle=()=>{
        showMenu.current.classList.remove("show")
}

  return (
    <header>
       <nav className={`navbar navbar-expand-md navigation-wrap ${show && "scroll-on" }  `}>
                   <div className="container">
           <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <i className="fas fa-stream  navbar-toggler-icon"></i>
              </button>
      <div ref={showMenu} className={`collapse navbar-collapse `} id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li onClick={()=>toggleShowMenuHandle()} className="nav-item"  >
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li onClick={()=>toggleShowMenuHandle()}  className="nav-item">
          <a className="nav-link" href="#about">About Us</a>
        </li>
        
        <li onClick={()=>toggleShowMenuHandle()}  className="nav-item">
          <a className="nav-link " href="#explore-food" tabindex="-1" aria-disabled="true">Explore Foods</a>
        </li>
        <li onClick={()=>toggleShowMenuHandle()}  className="nav-item">
          
          <a className="nav-link " href="#testimonial" tabindex="-1" aria-disabled="true">Reviews</a>
        </li>
        <li onClick={()=>toggleShowMenuHandle()}  className="nav-item">
          <a className="nav-link " href="#faq" tabindex="-1" aria-disabled="true">FAQ</a>
        </li>
         <li onClick={()=>toggleShowMenuHandle()}  ><button className='main-btn' >1200 345 123</button></li>
      </ul>
    
    </div>
  </div>
</nav>
      </header>
  )
}

export default Header