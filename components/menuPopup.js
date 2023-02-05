import React, { useState } from 'react';

export default function MenuPopup({
    link = "",
    text = "Button Text"
}) {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
  return (
    <>
 
    <div>
     
        <img onClick={toggleMenu} class="icon" src="menu-icon.png"></img>
    </div>
    {open === true &&
           <div class="openMenu">
             <h1 onClick={toggleMenu} class="exit">X</h1>
             <div class="menuCont">
                <ul>
                    <li> <a href="/">Home</a></li>
                    <li> <a href="/about">About</a></li>
                    <li> <a href="/contact">Contact</a></li>
                </ul>

             </div>
         
           </div>
        
        }
    </>
  )
}
