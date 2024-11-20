import React from "react";
import image1 from "../assets/nitin.png"; // Replace with your image path
import image2 from "../assets/bala.png"; // Replace with your image path

const AboutUs = () => {
  return (
      <div className="container mx-auto py-10">
        {/* About Us Text Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            INSP Software Solutions is a leading provider of innovative and scalable software solutions.
            Our mission is to help businesses transform with technology and deliver exceptional value to
            our clients. With a dedicated team of professionals, we offer services that address a wide range
            of business needs, from custom software development to IT consulting.
          </p>
        </div>

        {/* Our Team Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Our Team</h2>
        </div>

        {/* Images and Subtext Section */}
        <div className="flex justify-center space-x-10">
          {/* First Image and Text */}
          <div className="text-center">
            <img src={image1} alt="Team Member 1"
                 className="w-64 h-64 object-cover rounded-lg shadow-md"/>
            <p className="text-lg font-medium mt-4">NITIN SACHAN[IIT MADRAS]</p>
            <p className="text-lg font-normal mt-4">Founder & CEO</p>
          </div>

          {/* Second Image and Text */}
          <div className="text-center">
            <img src={image2} alt="Team Member 2"
                 className="w-64 h-64 object-cover rounded-lg shadow-md"/>
            <p className="text-lg font-medium mt-4">ATLURI BALACHANDAR[IIT
              KGP]</p>
            <p className="text-lg font-normal mt-4">CTO</p>
          </div>
        </div>
      </div>
  );
};

export default AboutUs;
