// import React from "react";
// import HomePage from "./HomePage";
// import {Link,NavLink} from 'react-router-dom'
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


// const Header=()=>{
//     return(
        
       
//     <div
//           className="h-64 w-screen bg-cover bg-[center_-25px]   justify-center "
//           style={{ backgroundImage: `url("/logo.png")` }} >
//            <div className="flex ">
//             <div className="flex justify-center pt-6 pl-130 text-white gap-15">
//                 <button className="flex border rounded-full  px-3 py-2"><NavLink to='/' className={({isActive})=>isActive?"text-pink-700":""}>Home</NavLink></button>
//                 <button className="flex border rounded-full  px-3 py-2"><NavLink to='/about' className={({isActive})=>isActive?"text-pink-700":""}>About</NavLink></button>
//                 <button className="flex border rounded-full  px-3 py-2"><NavLink to='/menu' className={({isActive})=>isActive?"text-pink-700":""}>Menu</NavLink></button>
//                 <button className="flex border rounded-full  px-4 py-2"><NavLink to='/cart' className={({isActive})=>isActive?"text-pink-700":""}>Cart</NavLink></button>
//                 <button className="flex border rounded-full  px-3 py-2"><NavLink to='/contact' className={({isActive})=>isActive?"text-pink-700":""}>Contact</NavLink></button>
//                 <div className="flex  ml-30 gap-6 pt-3 text-white ">
                
//                      <FaFacebookF className="cursor-pointer text-medium  rounded-full text-[#D78698] bg-white transition  duration-300 hover:text-pink-600 hover:scale-110" />
        
//                      <FaTwitter className="cursor-pointer transition text-white duration-300 hover:text-pink-600 hover:scale-110" />
                
//                      <FaYoutube className="cursor-pointer transition text-white duration-300 hover:text-pink-600 hover:scale-110" />
//                 </div>
//             </div>
                                                
        
//       </div>
//       </div>





//     )

// }
// export default Header
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div
            className="h-64 w-screen bg-cover bg-[center_-25px] justify-center"
            style={{ backgroundImage: `url("/logo.png")` }}>

            {/* ── DESKTOP NAV (original, untouched) ── */}
            <div className="hidden lg:flex">
                <div className="flex justify-center pt-6 pl-130 text-white gap-15">
                    <button className="flex border rounded-full px-3 py-2"><NavLink to='/' className={({ isActive }) => isActive ? "text-pink-700" : ""}>Home</NavLink></button>
                    <button className="flex border rounded-full px-3 py-2"><NavLink to='/about' className={({ isActive }) => isActive ? "text-pink-700" : ""}>About</NavLink></button>
                    <button className="flex border rounded-full px-3 py-2"><NavLink to='/menu' className={({ isActive }) => isActive ? "text-pink-700" : ""}>Menu</NavLink></button>
                    <button className="flex border rounded-full px-4 py-2"><NavLink to='/cart' className={({ isActive }) => isActive ? "text-pink-700" : ""}>Cart</NavLink></button>
                    <button className="flex border rounded-full px-3 py-2"><NavLink to='/contact' className={({ isActive }) => isActive ? "text-pink-700" : ""}>Contact</NavLink></button>
                    <div className="flex ml-30 gap-6 pt-3 text-white">
                        <FaFacebookF className="cursor-pointer text-medium rounded-full text-[#D78698] bg-white transition duration-300 hover:text-pink-600 hover:scale-110" />
                        <FaTwitter className="cursor-pointer transition text-white duration-300 hover:text-pink-600 hover:scale-110" />
                        <FaYoutube className="cursor-pointer transition text-white duration-300 hover:text-pink-600 hover:scale-110" />
                    </div>
                </div>
            </div>

            {/* ── MOBILE / TABLET HAMBURGER ── */}
            <div className="lg:hidden flex justify-end px-5 pt-5">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-3xl z-50">
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* ── MOBILE DROPDOWN MENU ── */}
            {menuOpen && (
                <div className="lg:hidden flex flex-col items-center gap-3 pt-3 pb-5 bg-black/60 text-white text-sm">
                    <button className="border rounded-full px-4 py-2 w-32 text-center" onClick={() => setMenuOpen(false)}>
                        <NavLink to='/' className={({ isActive }) => isActive ? "text-pink-400" : ""}>Home</NavLink>
                    </button>
                    <button className="border rounded-full px-4 py-2 w-32 text-center" onClick={() => setMenuOpen(false)}>
                        <NavLink to='/about' className={({ isActive }) => isActive ? "text-pink-400" : ""}>About</NavLink>
                    </button>
                    <button className="border rounded-full px-4 py-2 w-32 text-center" onClick={() => setMenuOpen(false)}>
                        <NavLink to='/menu' className={({ isActive }) => isActive ? "text-pink-400" : ""}>Menu</NavLink>
                    </button>
                    <button className="border rounded-full px-4 py-2 w-32 text-center" onClick={() => setMenuOpen(false)}>
                        <NavLink to='/cart' className={({ isActive }) => isActive ? "text-pink-400" : ""}>Cart</NavLink>
                    </button>
                    <button className="border rounded-full px-4 py-2 w-32 text-center" onClick={() => setMenuOpen(false)}>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-pink-400" : ""}>Contact</NavLink>
                    </button>
                    <div className="flex gap-6 pt-2">
                        <FaFacebookF className="cursor-pointer text-[#D78698] bg-white rounded-full p-0.5 text-xl transition duration-300 hover:text-pink-600 hover:scale-110" />
                        <FaTwitter className="cursor-pointer text-white text-xl transition duration-300 hover:text-pink-600 hover:scale-110" />
                        <FaYoutube className="cursor-pointer text-white text-xl transition duration-300 hover:text-pink-600 hover:scale-110" />
                    </div>
                </div>
            )}

        </div>
    );
}
export default Header;