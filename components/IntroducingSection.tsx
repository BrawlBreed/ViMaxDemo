// *********************
// Role of the component: IntroducingSection with the text "Introducing ViMax"
// Name of the component: IntroducingSection.tsx
// Developer: Zlatin Antonius
// Version: 1.0
// Component call: <IntroducingSection />
// Input parameters: no input parameters
// Output: Section with the text "Introducing ViMax" and button
// *********************

import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    <div className="py-20 border-t-4 border-b-4 border-white pt-24 bg-gradient-to-l from-white to-red-500">
      <div className="text-center flex flex-col gap-y-5 items-center">
        <h2 className="text-white text-8xl font-extrabold text-center mb-2 max-md:text-6xl max-[480px]:text-4xl">
          INTRODUCING <span className="text-black">VI</span><span className="text-red-600">MAX</span>
        </h2>
        <div>
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            Buy the latest electronics.
          </p>
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            The best electronics for tech lovers.
          </p>
          <Link href="/shop" className="block text-red-600 bg-white font-bold px-12 py-3 text-xl hover:bg-gray-100 w-96 mt-2  max-md:text-lg max-md:w-72 max-[480px]:w-60 mx-auto">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroducingSection;
