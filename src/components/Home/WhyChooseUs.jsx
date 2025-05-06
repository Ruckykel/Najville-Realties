import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600 sm:mt-4">
            At Najville Realties, we believe in enriching lives through thoughtful design and construction. We take a holistic approach to development, handling every aspect of your project to provide a seamless and stress-free experience.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-11 sm:grid-cols-2 lg:grid-cols-4">
          <CoreValueSection
            icon={<img src="/Trust.svg" alt="Integrity" />}
            title="Integrity"
            description="At Najville Realties, our mission is to deliver innovative and sustainable real estate solutions through exceptional architectural design, precise construction, creative interior decoration, and quality equipment supplies."
          />
          <CoreValueSection
            icon={<img src="/Innovation.svg" alt="Innovation" />}
            title="Innovation"
            description="At Najville Realties, our mission is to deliver innovative and sustainable real estate solutions through exceptional architectural design, precise construction, creative interior decoration, and quality equipment supplies."
          />
          <CoreValueSection
            icon={<img src="/Customer.svg" alt="Customer-Centricity" />}
            title="Customer-Centricity"
            description="At Najville Realties, our mission is to deliver innovative and sustainable real estate solutions through exceptional architectural design, precise construction, creative interior decoration, and quality equipment supplies."
          />
          <CoreValueSection
            icon={<img src="/Sustainability.svg" alt="Sustainability" />}
            title="Sustainability"
            description="At Najville Realties, our mission is to deliver innovative and sustainable real estate solutions through exceptional architectural design, precise construction, creative interior decoration, and quality equipment supplies."
          />
        </div>
      </div>
    </section>
  );
};

const CoreValueSection = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-8 h-8 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default WhyChooseUs;