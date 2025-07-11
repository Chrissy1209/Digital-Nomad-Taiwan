"use client";
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const OurMembers = () => {
  const testimonials = [
    {
      name: "SARAH CHEN",
      role: "社群經理",
      quote:
        "與 DigitalNomadsTaiwan 合作改變了我的人生。有意義的連結文化幫助我在個人和專業上都獲得了成長。",
    },
    {
      name: "MARCUS LIU",
      role: "內容創作者",
      quote:
        "這裡的價值交換原則是真實的。每個人都貢獻自己獨特的強項，我們都從集體智慧中受益。",
    },
    {
      name: "EMMA WANG",
      role: "營運主管",
      quote:
        "我喜歡我們在這裡的長遠思考。每個決定都考慮到可持續性和影響力，而不僅僅是眼前的利益。",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          團隊成員怎麼說
        </h2>

        {/* Carousel for mobile */}
        <div className="md:hidden relative w-full max-w-md mx-auto">
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <p className="text-gray-600 italic mb-6 h-32">
              &quot;{currentTestimonial.quote}&quot;
            </p>
            <p className="font-bold text-gray-800">{currentTestimonial.name}</p>
            <p className="text-gray-500">{currentTestimonial.role}</p>
          </div>
          {testimonials.length > 1 && (
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={goToPrev}
                className="bg-[#FF7373] text-white p-3 rounded-full focus:outline-none hover:bg-[#E06666] transition-colors duration-200"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={goToNext}
                className="bg-[#FF7373] text-white p-3 rounded-full focus:outline-none hover:bg-[#E06666] transition-colors duration-200"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Grid for desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <p className="text-gray-600 italic mb-6">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="font-bold text-gray-800">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMembers;
