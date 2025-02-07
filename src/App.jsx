// import React from "react";

// const App = () => {
//   return (
//     <div>
//       <h1 className="text-primary text-xl font-primary">Vite + React</h1>
//       <p className="font-secondary text-2xl text-yellow-600">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   );
// };

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="font-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Testimonial />
    </div>
  );
};

export default App;
