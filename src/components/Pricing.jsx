import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const Pricing = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("pricingData.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  const handleScrollToContact = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div id="pricing" className="bg-[#f7f8fc] pt-32">
      <div className="container mx-auto px-8">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-secondary mb-3">
            Affordable Pricing for Every Business
          </h2>
          <p className="text-lg mb-12 md:w-2/3 mx-auto">
            Whether you're a small startup or a large enterprise, our flexible
            pricing plans are designed to meet your unique needs, helping you
            grow without breaking the bank.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col md:flex-row gap-8 pb-12 justify-center items-stretch text-center"
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-2xl mb-4">{pkg.name}</h3>
                <hr className="w-24 border text-primary border-primary mx-auto" />
                <p className="text-3xl font-bold mb-4">
                  {pkg.price} <span className="text-lg font-normal">/mo</span>
                </p>
                <p className="text-lg mb-4">{pkg.description}</p>
                <ul className="list-disc list-inside space-y-2 mb-6 text-left mx-auto">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheckCircle className="text-primary size-6 me-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={handleScrollToContact}
                className="bg-primary text-white px-6 py-2 rounded cursor-pointer mx-auto"
              >
                Get Started
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
