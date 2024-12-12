// *********************
// Role of the component: Classical hero component on home page
// Name of the component: Hero.tsx
// Developer: Zlatin Antonius
// Version: 1.0
// Component call: <Hero />
// Input parameters: no input parameters
// Output: Classical hero component with two columns on desktop and one column on smaller devices
// *********************

import { getRandomObject } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = async () => {

  const data = await fetch("http://localhost:3001/api/products", {
    method: "GET",
  });
  const products = await data.json();
  const product = getRandomObject(products);

  return (
    <div className="h-[700px] w-full bg-red-500 max-lg:h-[900px] max-md:h-[750px]">
      <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10">
        <div className="flex flex-col gap-y-5 max-lg:order-last col-span-2">
          <h1 className="text-6xl text-red-100 font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
            THE PRODUCT OF THE FUTURE <span className="text-white">{product.title ? `: ${product.title.toUpperCase()}` : "" }</span>
          </h1>
          <p className="text-white max-sm:text-sm">
            {product.description || `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi
            iure laudantium necessitatibus ab, voluptates vitae ullam. Officia
            ipsam iusto beatae nesciunt, consequatur deserunt minima maiores
            earum obcaecati. Optio, nam!`}
          </p>
          <div className="flex gap-x-1 max-lg:flex-col max-lg:gap-y-1">
            <Link href={`/product/${product.slug}`}>
              <button className="bg-white text-red-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
                BUY NOW
              </button>
            </Link>   
            <Link href={`/product/${product.slug}`}>           
              <button className="bg-white text-red-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
                LEARN MORE
              </button>
            </Link>
            
          </div>
        </div>
        <Image
          src={`/${product.mainImage}` || "/watch for banner.png"}
          width={400}
          height={400}
          alt="smart watch"
          className="max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto rounded-r-md rounded-l-md shadow-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
