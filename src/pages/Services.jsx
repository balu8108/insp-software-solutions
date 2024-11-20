import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard title="Consulting" description="Professional IT consulting services." />
          <ServiceCard title="Cloud Solutions" description="Scalable and secure cloud infrastructure." />
          <ServiceCard title="AI Solutions" description="Leverage AI to drive business success." />
        </div>
      </div>
  );
};

export default Services;
