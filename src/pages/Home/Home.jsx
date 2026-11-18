import React, { useEffect, useState } from "react";
import Banner from "../../Components/Home/Banner";

import { useAxiosInstance } from "@/Hooks/useAxiosInstance";
import AllMedicines from "./medicines/AllMedicines";

const Home = () => {
  
  const axiosInstance = useAxiosInstance();
  const [medicines, setMedicines] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(()=>{
    async function fetchMedicine () {
      setLoading(true) //Loading start!
      const res = await axiosInstance.get('/medicine')
      if(res.data){
        setMedicines([...medicines, res.data])
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
