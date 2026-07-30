import React from "react";
import Container from "../shared/Container";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

const Banner = () => {
  return (
    <div>
      <Container>
        <div className=" md:flex  bg-background p-6 my-10 rounded-2xl gap-10">
          {/* left */}
    
            <div className="flex-1 py-10 space-y-4">
                <div className="flex  items-center gap-1 text-text  p-1 px-3 rounded-xl  border border-border"> <VscWorkspaceTrusted />Trusted by thousands of families</div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text max-w-120">Find the right <span className="text-primary">Medicine</span> for you and your family.</h1>
              <p className="text-text-muted">
                Search medicines, compare prices, check availability, and order
                from trusted pharmacies with confidence.
              </p>
              <form className="relative font-bold">
                <input  type="text"  placeholder="Search..." className="bg-white outline-primary placeholder-secondary rounded-xl py w-full border-2 shadow border-border px-15 py-5 "/>
                <span className="absolute top-5.5 left-6"><IoSearchOutline color="green" size={25}/></span>
                <button className="bg-primary group border border-border hover:bg-surface hover:text-text hover:border-primary ease-in-out duration-300 absolute top-1 right-1 bottom-1 rounded-xl text-surface flex items-center gap-2 px-2 py-4 ">Find medicine <span className="group-hover:translate-x-1"><FaArrowRightLong /></span></button>
              </form> 
              
              <div>
              <button className="inline-flex items-center gap-2 border-2 border-border rounded-xl text-surface hover:bg-surface hover:text-text bg-secondary p-2 font-bold hover:text-surface mr-2 transition-all duration-200">
      <FiPlus className="w-5 h-5" />
      <span>Add medicine</span>
    </button>
              </div>
            </div>
     
          {/* right  */}
          <div className="flex-1">
            <img className="h-full w-full " src="/src/assets/Banner-medicine.png" alt="medicine" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
