import React from "react";
import Container from "../shared/Container";

const MedicineCard = ({ medicine }) => {
  const {
    name,
    image,
    category,
    genericName,
    dosage,
    price,
    quantity,
    expiryDate,
    manufacturer,
    description,
  } = medicine;

  return (
    <Container>
      <div>
        <div>

          <div>
            <img src={image} alt="" />
          </div>
          <div>
            
          </div>

        </div>
      </div>
    </Container>
  );
};

export default MedicineCard;
