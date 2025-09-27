import React from "react";

const FeatureCard = ({ feature }: { feature: any }) => {
  return (
    <div
      className="text-center bg-white px-6 py-10 "
      style={{ boxShadow: "0 4.325px 64.871px 0 rgba(0, 0, 0, 0.08)" }}
    >
      <div className="w-20 h-20 mx-auto mb-6   flex items-center justify-center">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 font-space-grotesk">
        {feature.title}
      </h3>
      <p className="text-gray-600 w-[70%] mx-auto font-inter">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureCard;
