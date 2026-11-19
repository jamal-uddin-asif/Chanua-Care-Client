import MedicineCard from "@/Components/Cards/MedicineCard";
import Container from "@/Components/shared/Container";
import React from "react";

const AllMedicines = ({ medicines, loading }) => {
  console.log(medicines);
  return (
    <div>
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
          {loading ? (
            <p className="text-4xl animate-bounce text-center">Loading...</p>
          ) : (
            medicines.map((medicine) => <MedicineCard medicine={medicine} />)
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllMedicines;
