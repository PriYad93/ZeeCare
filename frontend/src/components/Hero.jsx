import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/appointment" className="btn purple-btn" aria-label="Book Appointment">
              Book Appointment
            </Link>
            <Link to="/about" className="btn white-btn" aria-label="Learn more about ZeeCare">
              Learn More
            </Link>
          </div>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="Healthcare professionals treating a patient" className="animated-image rounded-lg shadow-lg" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
