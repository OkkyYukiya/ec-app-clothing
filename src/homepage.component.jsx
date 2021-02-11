import React from "react";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHAP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">POKET</h1>
            <span className="subtitle">SHAP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">NIKE</h1>
            <span className="subtitle">SHAP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">ADIDUS</h1>
            <span className="subtitle">SHAP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">VITON</h1>
            <span className="subtitle">SHAP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
