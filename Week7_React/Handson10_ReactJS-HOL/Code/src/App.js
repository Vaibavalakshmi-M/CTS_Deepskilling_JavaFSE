import React from "react";

const element = "Office Space";

const sr = "https://img.freepik.com/free-photo/beautiful-office-space-cartoon-style_23-2151043206.jpg?semt=ais_hybrid&w=740";

const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;

const ItemName = { Name: "DBS", Rent: 50000, Address: "Chennai" };

function App() {
  const rentStyle = {
    color: ItemName.Rent > 60000 ? "green" : "red",
  };

  return (
    <div>
      <h1>{element}, at Affordable Range</h1>

      {jsxatt}

      <h1>Name: {ItemName.Name}</h1>

      <h3 style={rentStyle}>Rent: Rs. {ItemName.Rent}</h3>

      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;
