import React from "react";

const BackgroundPage: React.FC = () => {
  return (
    <div className="background-container">
      <video autoPlay loop muted className="background-video">
        <source src="video.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <h1 className="white">
          Welcome to <span className="yellow">Watch Store</span>
        </h1>
        <p>
          <i>
            Explore our exclusive collection of luxury watches designed to elevate your style. 
            Don&apos;t miss out—click the button below to find the perfect watch for you!
          </i>
        </p>
        <button className="hover-button">Shop Now</button>
      </div>
    </div>
  );
};

export default BackgroundPage;
