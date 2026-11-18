import Container from '@/Components/shared/Container';
import React from 'react';

const AllMedicines = ({medicines, loading}) => {
    console.log({medicines, loading})
    return (
        <div>
            <Container>All medicines</Container>
        </div>
    );
};

export default AllMedicines;