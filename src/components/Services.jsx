import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import service1 from "../assets/service1.webp";
import service2 from "../assets/service2.webp";
import service3 from "../assets/service3.webp";
import service4 from "../assets/service4.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const Services = () => {
  return (
    <div id="services" className="bg-[#f7f8fc]">
      <div className="pt-28 px-4 container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center space-y-5"
        >
          <h2 className="text-4xl font-bold font-secondary text-heroBg">
            What Can We Do Together
          </h2>
          <p className="md:w-1/2 mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
            aspernatur adipisci consequuntur aut harum quasi doloribus maxime
            accusamus explicabo a?
          </p>
        </motion.div>
        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              {" "}
              <TabList className="flex flex-wrap justify-between items-center md:gap-8 gap-4 ">
                <Tab
                  className="px-4 py-2 cursor-pointer outline-none text-lg text-center"
                  selectedClassName="bg-white font-semibold"
                >
                  Couple Counseling
                </Tab>
                <Tab
                  className="px-4 py-2 cursor-pointer outline-none text-lg text-center"
                  selectedClassName="bg-white font-semibold"
                >
                  Parenting Skills
                </Tab>
                <Tab
                  className="px-4 py-2 cursor-pointer outline-none text-lg text-center"
                  selectedClassName="bg-white font-semibold"
                >
                  Feeling Stuck
                </Tab>
                <Tab
                  className="px-4 py-2 cursor-pointer outline-none text-lg text-center"
                  selectedClassName="bg-white font-semibold"
                >
                  Self-Confidence
                </Tab>
              </TabList>
            </motion.div>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Couple Counseling
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    at rerum tempora dolores repudiandae asperiores iste
                    quaerat, exercitationem, perferendis, explicabo non
                    provident nisi.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Effective Communication Techniques</li>
                    <li>Conflict Resolution Strategies</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={service1}
                    className="w-full md:h-[446px] h-auto rounded-2xl object-cover"
                    alt=""
                  />
                </div>
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Parenting Skills
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    at rerum tempora dolores repudiandae asperiores iste
                    quaerat, exercitationem, perferendis, explicabo non
                    provident nisi.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={service2}
                    className="w-full md:h-[446px] h-auto rounded-2xl object-cover"
                    alt=""
                  />
                </div>
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Feeling Stuck
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    at rerum tempora dolores repudiandae asperiores iste
                    quaerat, exercitationem, perferendis, explicabo non
                    provident nisi.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={service3}
                    className="w-full md:h-[446px] h-auto rounded-2xl object-cover"
                    alt=""
                  />
                </div>
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Self-Confidence
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    at rerum tempora dolores repudiandae asperiores iste
                    quaerat, exercitationem, perferendis, explicabo non
                    provident nisi.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={service4}
                    className="w-full md:h-[446px] h-auto rounded-2xl object-cover"
                    alt=""
                  />
                </div>
              </motion.div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
