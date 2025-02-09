import React, { useEffect, useState } from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);
  return (
    <div id="testimonial" className="bg-[#f7f8fc] py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-secondary mb-3">
            What Our Clients Say
          </h2>
          <p className="text-lg mb-12 md:w-1/2 mx-auto">
            Hear from some of our satisfied clients about how our services have
            positively impacted their lives and well-being.
          </p>
        </div>
        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8">
          {testimonial.map((review, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-6 flex-1"
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <BsFillChatQuoteFill className="size-12 text-primary" />
              </div>
              <div className="flex flex-col space-y-3 mb-4">
                <p className="text-lg mb-2">{review.review}</p>
                <div className="flex gap-1">
                  <img
                    src={review.image}
                    alt="review-image"
                    className="size-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-gray-600">{review.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
