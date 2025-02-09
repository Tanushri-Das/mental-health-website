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
            We provide compassionate support and proven strategies to help you
            navigate relationships, self-growth, and emotional well-being.
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
                    Strengthen your relationship through effective communication
                    and mutual understanding.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Develop deeper emotional connections.</li>
                    <li>Learn conflict resolution strategies.</li>
                    <li>Enhance trust and communication.</li>
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
                    Build a nurturing and positive environment for your child’s
                    emotional and mental well-being.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Improve parent-child bonding.</li>
                    <li>Learn positive discipline techniques.</li>
                    <li>Foster emotional intelligence in children.</li>
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
                    Overcome emotional barriers and regain clarity to move
                    forward in life.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Identify and break negative thought patterns.</li>
                    <li>Develop coping strategies for stress and anxiety.</li>
                    <li>Set clear and achievable personal goals.</li>
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
                    Boost your self-esteem and cultivate a positive mindset for
                    personal growth.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Build self-awareness and resilience.</li>
                    <li>Develop a growth-oriented mindset.</li>
                    <li>Overcome self-doubt and fear of failure.</li>
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
