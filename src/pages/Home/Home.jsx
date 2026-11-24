import React, { useContext, useEffect, useState } from "react";
import Banner from "../../Components/Home/Banner";

import { useAxiosInstance } from "@/Hooks/useAxiosInstance";
import AllMedicines from "./medicines/AllMedicines";
import { useAxiosSecure } from "@/Hooks/useAxiosSecure";

const Home = () => {
  
  const axiosInstance = useAxiosInstance();
  const axiosSecure = useAxiosSecure()
  const [medicines, setMedicines] = useState([])
  const [loading, setLoading] = useState(false)

  
  useEffect(()=>{
    async function fetchMedicine () {
      setLoading(true) //Loading start!
      const res = await axiosSecure.get('/medicine')
      if(res.data){
        setMedicines(res.data)
        setLoading(false) //Loading stop!
      }
       setLoading(false) //Loading stop!
    }
     fetchMedicine()
  }, [axiosInstance])


  return (
    <div>
      <Banner />
      <AllMedicines medicines={medicines} loading={loading}/>
      <div className="grid grid-cols-3"></div>
    </div>
  );
};

export default Home;
