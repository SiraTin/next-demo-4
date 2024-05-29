'use client'
import { useState } from "react";

export default function NavList(props){
    const {navlink, borderId, border, isBorder} = props;
        
    return (
    <li className="py-4 md:mx-4 md:py-0 lg:mx-[2%]">
        <a href={navlink.link} onClick={()=>{borderId(navlink.id)}} className={`block after:block after:mt-2 md:after:mt-8 after:bg-white after:duration-300 after:h-0.5 hover:after:w-full hover:after:bg-[#979797]
        ${isBorder ? "after:w-full" : "after:w-0"} `} >
            <span className="mr-2 md:hidden lg:inline-block">{navlink.number} </span>{navlink.name.toUpperCase()}
        </a>
    </li>
    );
}