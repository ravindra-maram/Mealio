import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="head">React Essentials JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));


// rendering of Functional Component or Any component
root.render(<Title />);

