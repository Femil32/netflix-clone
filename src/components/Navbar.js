import React, { useEffect, useState } from 'react'
import Avtar from '../Imgs/avtar.jpg'

function Navbar() {
    const [handleNavShow, setHandleNavShow] = useState()

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if (window.scrollY > 100) {
                setHandleNavShow(true);
            }else setHandleNavShow(false);
        });
        return () => {
            window.removeEventListener("scroll",null);
        };
    }, [])

    return ( 
        <div className={`fixed flex top-0 justify-between p-4 z-50 w-full border-none outline-none  ${handleNavShow && 'nav-fade'}`}>
            <img className="w-20 object-contain cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"/>
            <img className="w-10 object-contain cursor-pointer" src={Avtar} alt="avtar"/>
        </div>
    )
}

export default Navbar
