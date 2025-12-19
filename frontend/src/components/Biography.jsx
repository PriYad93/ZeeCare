import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          In the heart of Prayagraj, Zeecare medical institute stands tall as a beacon of health, hope, and healing. Since its inception, our hospital system has been dedicated to providing exceptional care, advancing medical science, and serving our diverse community with compassion and integrity. This biography encapsulates our journey, milestones, and the values that define us.
          </p>
          <p>
          Driven by our mission to serve, Zeecare medical institute rapidly expanded its reach, establishing multiple facilities across [region/city]. Each new hospital and clinic brought us closer to our goal of ensuring access to quality healthcare for all. Our growth was not just geographical but also marked by advancements in medical technology, recruitment of top-tier talent, and partnerships with leading academic institutions.
          </p>
          <p>May God Bless All!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
