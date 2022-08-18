import React, { useEffect, useState } from 'react'
import s from "../styles/Nav.module.css"
import netflix from "../img/Netflix.png"

function Nav() {

    const [show,handleShow] = useState(false);

    useEffect(() => {
     window.addEventListener("scroll", ()=>{
        if(window.scrollY>100){
            handleShow(true)
        }else{
            handleShow(false)
        }
        return ()=>{
            window.removeEventListener("scroll")
        } 
     })
    
      return () => {
        
      }
    }, [])
    

    return (
    <div className={`${s.nav} ${show && s.nav_balck}`}>
        <img
        className={s.nav_logo}
        src= {netflix}
        alt="not found"
        />
        <img
        className={s.nav_avatar}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="not found"
        />
        
    </div>
  )
}

export default Nav