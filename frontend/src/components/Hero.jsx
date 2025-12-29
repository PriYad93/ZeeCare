import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">{title}</h1>
          <p className="text-lg text-gray-700 max-w-xl">
            ZeeCare Medical Institute provides compassionate, modern healthcare
            with experienced specialists and patient-focused care. Book an
            appointment or explore services to begin your wellness journey.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="/appointment" className="btn purple-btn">
              Book Appointment
            </a>
            <a href="/about" className="btn white-btn">
              Learn More
            </a>
          </div>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image rounded-lg shadow-lg" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
