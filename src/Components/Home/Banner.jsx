import React from "react";
import Container from "../shared/Container";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <Container>
        <div className="flex bg-background p-6 my-10 rounded-2xl gap-10">
          {/* left */}
    
            <div className="flex-1 py-10 space-y-4">
                <div className="flex  items-center gap-1 text-text  p-1 px-3 rounded-xl  border border-border"> <VscWorkspaceTrusted />Trusted by thousands of families</div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text max-w-120">Find the right <span className="text-primary">Medicine</span> for you and your family.</h1>
              <p className="text-text-muted">
                Search medicines, compare prices, check availability, and order
                from trusted pharmacies with confidence.
              </p>
              <form className="relative font-bold">
                <input  type="text"  placeholder="Search Your Medicine.." className="bg-white outline-primary placeholder-secondary rounded-xl py w-full border-2 shadow border-border px-15 py-5 "/>
                <span className="absolute top-5.5 left-6"><IoSearchOutline color="green" size={25}/></span>
                <button className="bg-primary absolute top-1 right-1 bottom-1 rounded-xl text-surface flex items-center gap-2 px-2 py-4 ">Find medicine <FaArrowRightLong /></button>
              </form> 
            </div>
     
          {/* right  */}
          <div className="flex-1">
            <img className="h-20 w-20" src="../../assets/Banner-medicine.png" alt="medicine" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
