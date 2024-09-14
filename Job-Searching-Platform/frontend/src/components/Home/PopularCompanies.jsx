import React from "react";
import { FaMicrosoft, FaApple, FaGoogle } from "react-icons/fa";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Microsoft Campus, Gachibowli, Hyderabad, Telangana ,India",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Google",
      location: "Google India Pvt.Ltd RMZ Infinity – Tower E Bangalore.",
      openPositions: 15,
      icon: <FaGoogle />,
    },
    {
      id: 3,
      title: "Apple",
      location: "High Tech City Main Road Madhapur, Hyderabad, Telangana,India",
      openPositions: 20,
      icon: <FaApple />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
