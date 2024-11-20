import React from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  return (
      <div>
        <Hero />
        <div className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard title="Web Development" description="Build modern, responsive websites." />
            <ServiceCard title="Mobile Apps" description="Create cutting-edge mobile solutions." />
            <ServiceCard title="Custom Software" description="Tailored software for your needs." />
          </div>
        </div>
      </div>
  );
};

export default Home;
