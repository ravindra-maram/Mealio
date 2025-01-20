import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="/logo.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({resName, cuisine}) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#e87a3a" }}>
      <img
        className="res-logo"
        src="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505"
        alt="res-logo"
      />
      <h3>{ resName }</h3>
      <h4>{ cuisine }</h4>
      <h4>4.5</h4>
      <h4>30 Mins</h4>
    </div>
  );
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard 
          resName="Hyderabad Point"
          cuisine="Telugu, Tamil, Indian"
        />
        <RestaurantCard 
          resName="KFC"
          cuisine="Burger, Fast Food"
        />
       
      </div>
    </div>
  );
}

const AppLayout = () => {
  return <div className="app">
    <Header />
    <Body />
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
