import React from "react";

const officeSpaces = [
  {
    name: "DLF Cyber City",
    rent: 55000,
    address: "Chennai, Tamil Nadu",
    image: "https://via.placeholder.com/300x200?text=DLF+Cyber+City"
  },
  {
    name: "Tidel Park",
    rent: 65000,
    address: "Coimbatore, Tamil Nadu",
    image: "https://via.placeholder.com/300x200?text=Tidel+Park"
  },
  {
    name: "WeWork Hub",
    rent: 48000,
    address: "Bangalore, Karnataka",
    image: "https://via.placeholder.com/300x200?text=WeWork+Hub"
  }
];

function OfficeSpace() {
  return (
    <div>
      <h1>Office Space Rental App</h1>
      {officeSpaces.map((office, index) => {
        const rentStyle = {
          color: office.rent > 60000 ? "green" : "red"
        };

        return (
          <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <img src={office.image} alt={office.name} width="300" height="200" />
            <h2>{office.name}</h2>
            <p style={rentStyle}>Rent: ₹{office.rent}</p>
            <p>Address: {office.address}</p>
          </div>
        );
      })}
    </div>
  );
}

export default OfficeSpace;
