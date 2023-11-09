import React from "react";
import { GiReturnArrow } from 'react-icons/gi';
import { GiRapidshareArrow } from 'react-icons/gi';



import { useState } from "react";

export default function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const { className } = props;
    const handleHamb = () => { 
        setIsOpen(!isOpen);
    }

    return (
    <div className={className}>
      <nav className={` bg-white shadow-md rounded-sm mb-[] h-screen`}>
        <button onClick={handleHamb}>{isOpen?<GiReturnArrow/>:<GiRapidshareArrow/>}</button>
        
      </nav>
    </div>
  );
}

