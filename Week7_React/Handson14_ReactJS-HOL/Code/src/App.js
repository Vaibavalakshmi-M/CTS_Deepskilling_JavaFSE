import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import ThemeContext from "./ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <h1>Employee Management</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
        <EmployeeList />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
