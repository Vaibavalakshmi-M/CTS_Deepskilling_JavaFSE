import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = () => {
  const employees = [
    { id: 1, name: "Aishu", role: "Developer" },
    { id: 2, name: "Kavi", role: "Designer" },
  ];

  return (
    <div>
      <h2>Employee List</h2>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};

export default EmployeeList;
