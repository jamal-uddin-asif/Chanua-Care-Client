import React from 'react';
import Banner from '../../Components/Home/Banner';
import MedicineCard from '../../Components/Home/MedicineCard';
import { IoSearchOutline } from 'react-icons/io5';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className='grid grid-cols-3'>

            <MedicineCard icon={<IoSearchOutline/>}/>
            </div>
            Home page here
        </div>
    );
};

export default Home;