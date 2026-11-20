import React from "react";
import Container from "../shared/Container";
import { Link, useLocation } from "react-router";

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
    _id
  } = medicine;

  return (
    <Container>
      <Link to={`/medicine/${_id}`}>
        <div>

          <div>
            <img src={image} alt="" />
          </div>

          <div className="flex text-text-muted justify-between items-center">
            <div>
              <h1>{name}</h1>
              <h1>{category}</h1>
            </div>
            <div>
              <p> Price</p>
              <p>{price}</p>
            </div>
          </div>

        </div>
      </Link>
    </Container>
  );
};

export default MedicineCard;
