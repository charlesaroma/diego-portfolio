import React from "react";

//Portfolio Component Imports
import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioDetails from "../components/portfolio/PortfolioDetails";

const Portfolio = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PortfolioHero />
      <PortfolioDetails />
    </div>
  );
};

export default Portfolio;
