import React from "react"
import Header from "./header"
import Footer from "./footer"
import { FaThumbsUp, FaLightbulb, FaGem, FaAppleAlt, FaMedkit } from "react-icons/fa";
const AboutPage=()=>{
    return(
        <>
      <Header/>


      <div className="flex flex-col gap-0 w-screen bg-[#f2edea]  h-200 ">

        <div className="flex  w-screen h-[70%]">
              <div className="flex h-auto w-[40%]">
               
                <div
                     style={{ backgroundImage: "url('https://i.pinimg.com/1200x/83/fc/d6/83fcd605f04ac644cfa763b276db9068.jpg')" }}
                     className="h-full w-full bg-center  bg-no-repeat bg-[length:60%]"
                ></div>
                
              </div>
              <div className="flex mt-8 flex-col ">
                <div className="mt-20">
                    <h2 className=" font-bold">HOW IT'S MADE</h2>
                    <h1 className="text-3xl font-bold text-pink-800">A TASTE OF PARADISE !</h1>
                    <p>Indulge in the taste of paradise with every scoop of my ice cream, where creamy swirls of sweetness dance on your taste buds.</p>
                </div>
                <div className="flex justify-between mt-30">
                    <div className="flex flex-col items-center">
                        <FaThumbsUp className="text-black text-xl hover:scale-110 transition" />
                        <h2 className="font-bold mt-5 text-xl text-pink-800">HYGIENIC PROCESS</h2>
                        <p className="mt-3 text-center">The ice cream is crafted through a <br/> hygienic process, ensuring purity and safety.</p>

                    </div>
                    <div className="flex flex-col items-center pr-10">
                         <FaLightbulb className="text-black  text-2xl" />
                        <h2 className="font-bold mt-5 text-xl text-pink-800">MORDERN EQUIPMENT</h2>
                        <p className=" text-center mt-3">State-of-the-art modern equipment is employed in<br/> its production, guaranteeing efficiency and precision</p>

                    </div>
                </div>

              </div>
        </div>
        <div className=" w-screen pt-18 h-[40%]">
            <div className="flex justify-between pl-20">
                <div className="flex flex-col items-center">
                    <FaMedkit className="text-black text-xl" />
                    <h2 className="font-bold mt-5 text-xl text-pink-800">BIO MILK AND CREAM</h2>
                    <p className=" text-center mt-3">Bio milk and cream, sourced from organic farms,<br/>form the base of our creamy delight.</p>
                </div>
                <div className="flex pl-5 ml-22 flex-col items-center">
                    <FaAppleAlt className="text-black text-xl" />
                    <h2 className="font-bold mt-5 text-xl text-pink-800">FRESH FRUIT ADDED</h2>
                    <p className=" text-center mt-3">Fresh fruits, carefully selected for their quality<br/> and flavor, are added to enhance the taste and nutrition.</p>

                </div>
                <div className="flex pl-15 ml-16 flex-col items-center">
                    <FaGem className="text-black text-xl" />
                    <h2 className="font-bold mt-5 text-xl text-pink-800">DELICIOUS ICECREAM</h2>
                    <p className=" text-center mt-3">The culmination of these steps results in a delicious<br/> ice cream, a treat for the senses.</p>
                </div>

                



                
                <div></div>
                <div></div>
            </div>
        </div>





      </div>

      
      <Footer/>
      
    </>
    )
}
export default AboutPage