'use client'
import navData from "../data/navigation";
import NavList from "./navlist";
import { useState } from "react";

export default function Navbar(props){
    const {pageId} = props;

    const [click, setClick] = useState(false);
    const isClick = () => {
        setClick(!click);
    }

    const [border, setBorder] = useState(null);

    const borderId = (id) => {
        setBorder(id);
        console.log(border)
    }

    const navElements = navData.map((item, index) => {
        return <NavList navlink={item} borderId={borderId} border={border} isBorder={pageId == item.id}/>
    })

    return (
        <header className="fixed w-full z-50">
            <nav className="flex items-center justify-between px-8 py-8 md:py-0 md:px-0 md:pl-8 lg:py-20 relative ">
                <div>
                    <a href="#">
                        <img src="../assets/shared/logo.svg"/>
                    </a>
                </div>
                <div className="hidden lg:block w-5/12 absolute h-0.5 z-50 bg-white opacity-[0.5] left-36"></div>
                <div className="lg:w-6/12"> 
                    <div onClick={isClick} className={`md:hidden cursor-pointer relative z-50 ${click ? "hidden": "block"}`}>
                        <img src="../assets/shared/icon-hamburger.svg"/>
                    </div>
                    <div  onClick={isClick} className={`md:hidden  cursor-pointer relative z-50 ${click ? "block": "hidden"}`}>
                        <img src="../assets/shared/icon-close.svg"/>
                    </div>
                    <ul className={`h-screen w-6/12 absolute top-0 pt-28 pl-4 ${click ? "right-0 duration-300": "right-[-50%] "}
                    backdrop-blur-3xl backdrop-grayscale-[30%] md:flex md:relative md:h-auto md:right-0 md:pt-8 md:backdrop-contrast-[90%] md:w-auto font-['Barlow']
                    lg:pl-[5%]`}>
                        {navElements}
                    </ul>  
                </div>
            </nav>
        </header>
    );
}