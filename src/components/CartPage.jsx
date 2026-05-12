// import React from "react";
// import Header from "./header";
// import Footer from "./footer";
// import {useNavigate} from 'react-router-dom'
// import {toast} from "sonner";

// const CartPage=()=>{

//     const navigate=useNavigate();
//     function handleClick(){
//         navigate('/menu')
//     }
//     return(
//         <>
//         <Header/>
//         <div className="w-screen flex justify-center items-center h-170 ">
//             <div className="w-326 h-150 justify-between flex  border border-1">

//                 <div className="flex justify-center items-center  h-150 w-163">
//                     <div className="border h-100 w-100">
//                         <h1 className=" text-3xl font-bold mt-25 text-center">Cart</h1>
//                         <button onClick={handleClick} className="text-white bg-pink-700 rounded-lg px-10 py-3 ml-30 mt-20">Add Items+</button>

//                     </div>
//                 </div>


                
//                 <div className=" flex flex-col gap-4  h-150 w-163">   
//                     <label className="ml-10 mt-10" for="Name">Name:</label>
//                     <input className="border border-2 py-2 pl-3 mx-10 rounded-lg" id="Name" placeholder="Enter your name " />
//                     <label className="ml-10" for="Email">Email:</label>
//                     <input className="border border-2 py-2 mx-10 pl-3 rounded-lg" id="Email" placeholder="Enter your Email address " />
//                     <label className="ml-10" for="phone">Phone no:</label>
//                     <input className="border  border-2 py-2 mx-10 pl-3 rounded-lg" id="phone" placeholder="Enter your mobile number " />
//                     <label className="ml-10" for="address">Address:</label>
//                     <input className="border border-1 py-10  mx-10 pl-3 rounded-lg" id="address" placeholder="Enter your Address details ..." />
//                     <button className="bg-pink-700 text-white border px-2 py-2 mx-65 my-5 rounded-xl " onClick={()=>{toast.success("Order Placed")}}>Place Order</button>
                    
                    
                    
//                 </div>


//             </div>

//         </div>
//         <Footer/>
//         </>
//     )
// }
// export default CartPage






// import React from "react";
// import Header from "./header";
// import Footer from "./footer";
// import { useNavigate } from 'react-router-dom';
// import { toast } from "sonner";

// const CartPage = () => {
//     const navigate = useNavigate();
//     function handleClick() {
//         navigate('/menu');
//     }

//     return (
//         <>
//         <Header />

//         <div className="w-screen flex justify-center items-center  h-auto lg:h-170 py-10 lg:py-0">

//             <div className="w-full max-w-sm sm:max-w-2xl lg:w-326 h-auto lg:h-150 flex flex-col lg:items-center lg:justify- lg:flex-row border border-1 mx-4 lg:mx-0">

//                 {/* ── Cart box ── */}
//                 <div className="flex justify-center items-center h-auto lg:h-150 lg:p-35 w-full lg:w-163 py-10 lg:py-0">
//                     <div className="border  h-100 w-100">
//                         <h1 className="text-3xl font-bold mt-25 text-center">Cart</h1>
//                         <button
//                             onClick={handleClick}
//                             className="text-white bg-pink-700 rounded-lg px-10 py-3 ml-30 mt-20"
//                         >Add Items+</button>
//                     </div>
//                 </div>

//                 {/* ── Order form ── */}
//                 <div className="flex flex-col gap-4 h-auto lg:h-150 w-full lg:w-163 pb-6 lg:pb-0">
//                     <label className="ml-10 mt-10" htmlFor="Name">Name:</label>
//                     <input className="border border-2 py-2 pl-3 mx-10 rounded-lg" id="Name" placeholder="Enter your name" />

//                     <label className="ml-10" htmlFor="Email">Email:</label>
//                     <input className="border border-2 py-2 mx-10 pl-3 rounded-lg" id="Email" placeholder="Enter your Email address" />

//                     <label className="ml-10" htmlFor="phone">Phone no:</label>
//                     <input className="border border-2 py-2 mx-10 pl-3 rounded-lg" id="phone" placeholder="Enter your mobile number" />

//                     <label className="ml-10" htmlFor="address">Address:</label>
//                     <input className="border border-1 py-10 mx-10 pl-3 rounded-lg" id="address" placeholder="Enter your Address details ..." />

//                     <button
//                         className="bg-pink-700 text-white border px-2 py-2 mx-10 lg:mx-65 my-5 rounded-xl"
//                         onClick={() => { toast.success("Order Placed") }}
//                     >Place Order</button>
//                 </div>

//             </div>
//         </div>

//         <Footer />
//         </>
//     )
// }
// export default CartPage;


// import React from "react";
// import Header from "./header";
// import Footer from "./footer";
// import { useNavigate } from 'react-router-dom';
// import { toast } from "sonner";

// const CartPage = () => {
//     const navigate = useNavigate();
//     function handleClick() {
//         navigate('/menu');
//     }

//     return (
//         <>
//         <Header />

//         <div className="w-screen flex justify-center items-center h-auto lg:h-170 py-10 lg:py-0">

//             <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-5xl h-auto lg:h-150 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 border border-1 mx-4 lg:mx-0 px-6 lg:px-10">

//                 {/* ── Cart box ── */}
//                 <div className="flex justify-center items-center h-auto lg:h-150 w-full lg:w-1/2 py-10 lg:py-0 lg:p-8">
//                     <div className="border h-100 w-full max-w-xs">
//                         <h1 className="text-3xl font-bold mt-25 text-center">Cart</h1>
//                         <button
//                             onClick={handleClick}
//                             className="text-white bg-pink-700 lg:ml-20 rounded-lg px-10 py-3 ml-10 mt-20"
//                         >Add Items+</button>
//                     </div>
//                 </div>

//                 {/* ── Divider ── */}
//                 <div className="hidden lg:block w-px bg-gray-200 self-stretch my-8" />

//                 {/* ── Order form ── */}
//                 <div className="flex flex-col gap-4 h-auto lg:h-150 w-full lg:w-1/2 pb-6 lg:pb-0 lg:py-8">
//                     <label className="ml-2 mt-4 lg:mt-8" htmlFor="Name">Name:</label>
//                     <input className="border border-2 py-2 pl-3 rounded-lg" id="Name" placeholder="Enter your name" />

//                     <label className="ml-2" htmlFor="Email">Email:</label>
//                     <input className="border border-2 py-2 pl-3 rounded-lg" id="Email" placeholder="Enter your Email address" />

//                     <label className="ml-2" htmlFor="phone">Phone no:</label>
//                     <input className="border border-2 py-2 pl-3 rounded-lg" id="phone" placeholder="Enter your mobile number" />

//                     <label className="ml-2" htmlFor="address">Address:</label>
//                     <input className="border border-1 py-10 pl-3 rounded-lg" id="address" placeholder="Enter your Address details ..." />

//                     <button
//                         className="bg-pink-700 text-white border px-2 py-2 mt-2 mb-6 rounded-xl"
//                         onClick={() => { toast.success("Order Placed") }}
//                     >Place Order</button>
//                 </div>

//             </div>
//         </div>

//         <Footer />
//         </>
//     );
// }
// export default CartPage;
import React from "react";
import Header from "./header";
import Footer from "./footer";
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const CartPage = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/menu');
    }

    return (
        <>
        <Header />

        <div className="w-screen flex justify-center items-center h-auto lg:h-170 py-10 lg:py-0">

            <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-5xl h-auto lg:h-150 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 border border-1 mx-4 lg:mx-0 px-6 lg:px-10">

                {/* ── Cart box ── */}
                <div className="flex justify-center items-center h-auto lg:h-150 w-full lg:w-1/2 py-10 lg:py-0 lg:p-8">
                    <div className="border h-100 w-full max-w-xs">
                        <h1 className="text-3xl font-bold mt-25 text-center">Cart</h1>
                        <button
                            onClick={handleClick}
                            className="text-white bg-pink-700 lg:ml-20 rounded-lg px-10 py-3 ml-10 mt-20"
                        >Add Items+</button>
                    </div>
                </div>

                {/* ── Divider ── */}
                <div className="hidden lg:block w-px bg-gray-200 self-stretch my-8" />

                {/* ── Order form ── */}
                <div className="flex flex-col gap-4 h-auto lg:h-150 w-full lg:w-1/2 pb-6 lg:pb-0 lg:py-8">
                    <label className="ml-2 mt-4 lg:mt-8" htmlFor="Name">Name:</label>
                    <input className="border border-2 py-2 pl-3 rounded-lg" id="Name" placeholder="Enter your name" />

                    <label className="ml-2" htmlFor="Email">Email:</label>
                    <input className="border border-2 py-2 pl-3 rounded-lg" id="Email" placeholder="Enter your Email address" />

                    <label className="ml-2" htmlFor="phone">Phone no:</label>
                    <input className="border border-2 py-2 pl-3 rounded-lg" id="phone" placeholder="Enter your mobile number" />

                    <label className="ml-2" htmlFor="address">Address:</label>
                    <input className="border border-1 py-10 pl-3 rounded-lg" id="address" placeholder="Enter your Address details ..." />

                    <button
                        className="bg-pink-700 text-white border px-2 py-2 mt-2 mb-6 rounded-xl"
                        onClick={() => { toast.success("Order Placed") }}
                    >Place Order</button>
                </div>

            </div>
        </div>

        <Footer />
        </>
    );
}
export default CartPage;