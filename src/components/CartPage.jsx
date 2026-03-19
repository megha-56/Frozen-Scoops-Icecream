import React from "react";
import Header from "./header";
import Footer from "./footer";
import {useNavigate} from 'react-router-dom'

const CartPage=()=>{

    const navigate=useNavigate();
    function handleClick(){
        navigate('/menu')
    }
    return(
        <>
        <Header/>
        <div className="w-screen flex justify-center items-center h-170 ">
            <div className="w-326 h-150 justify-between flex  border border-1">

                <div className="flex justify-center items-center bg-pink-100 h-150 w-163">
                    <div className="border h-100 w-100">
                        <h1 className=" text-3xl font-bold mt-25 text-center">Cart</h1>
                        <button onClick={handleClick} className="text-white bg-pink-700 rounded-lg px-10 py-3 ml-30 mt-20">Add Items</button>

                    </div>
                </div>


                
                <div className="bg-sky-50 flex flex-col gap-4  h-150 w-163">   
                    <label className="ml-10 mt-10" for="Name">Name:</label>
                    <input className="border border-2 py-2 pl-3 mx-10 rounded-lg" id="Name" placeholder="Enter your name " />
                    <label className="ml-10" for="Email">Email:</label>
                    <input className="border border-2 py-2 mx-10 pl-3 rounded-lg" id="Email" placeholder="Enter your Email address " />
                    <label className="ml-10" for="phone">Phone no:</label>
                    <input className="border  border-2 py-2 mx-10 pl-3 rounded-lg" id="phone" placeholder="Enter your mobile number " />
                    <label className="ml-10" for="address">Address:</label>
                    <input className="border border-1 py-10  mx-10 pl-3 rounded-lg" id="address" placeholder="Enter your Address details ..." />
                    <button className="bg-pink-700 text-white border px-2 py-2 mx-65 my-5 rounded-xl ">Place Order</button>
                    
                    
                    
                </div>


            </div>

        </div>
        <Footer/>
        </>
    )
}
export default CartPage