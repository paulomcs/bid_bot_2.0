import React from "react";
import { IoIosArrowBack } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from "react";

export default function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const { className } = props;
    const handleHamb = () => {
        setIsOpen(!isOpen);
    }

    return (
    <div className={className}>
      <nav className={` bg-white shadow-md rounded-sm mb-[100px] h-screen`}>
        <button onClick={handleHamb}>{isOpen?<IoIosArrowBack/>:<RxHamburgerMenu/>}</button>
        
      </nav>
    </div>
  );
}

