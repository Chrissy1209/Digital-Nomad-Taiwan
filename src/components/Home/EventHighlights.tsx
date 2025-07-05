"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "../Button";

const EventHighlights = () => {
  const [activeTab, setActiveTab] = useState("每月聚會");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const highlights = [
    {
      name: "每月聚會",
      images: [
        "https://via.placeholder.com/600x400?text=每月聚會+1",
        "https://via.placeholder.com/600x400?text=每月聚會+2",
        "https://via.placeholder.com/600x400?text=每月聚會+3",
      ],
    },
    {
      name: "一日同事",
      images: [
        "https://via.placeholder.com/600x400?text=一日同事+1",
        "https://via.placeholder.com/600x400?text=一日同事+2",
        "https://via.placeholder.com/600x400?text=一日同事+3",
      ],
    },
    {
      name: "專業講座",
      images: [
        "https://via.placeholder.com/600x400?text=專業講座+1",
        "https://via.placeholder.com/600x400?text=專業講座+2",
        "https://via.placeholder.com/600x400?text=專業講座+3",
      ],
    },
    {
      name: "冒險活動",
      images: [
        "https://via.placeholder.com/600x400?text=冒險活動+1",
        "https://via.placeholder.com/600x400?text=冒險活動+2",
        "https://via.placeholder.com/600x400?text=冒險活動+3",
      ],
    },
  ];

  const currentImages =
    highlights.find((h) => h.name === activeTab)?.images || [];

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  };

  // Reset image index when active tab changes
  useState(() => {
    setCurrentImageIndex(0);
  }, [activeTab]);

  return (
    <section
      id="events"
      className="py-20 sm:py-32 bg-white text-center animate-fade-in-up"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl font-bold mb-12">活動亮點</h3>
        <ul className="flex flex-wrap justify-center gap-4 mb-12">
          {highlights.map((highlight) => (
            <li
              key={highlight.name}
              className={`cursor-pointer px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ${
                activeTab === highlight.name
                  ? "bg-[#FF7373] text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(highlight.name)}
            >
              {highlight.name}
            </li>
          ))}
        </ul>

        {/* Carousel for small screens */}
        <div className="md:hidden relative w-full max-w-2xl mx-auto mb-12">
          {currentImages.length > 0 && (
            <img
              src={currentImages[currentImageIndex]}
              alt={`${activeTab} image ${currentImageIndex + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          )}
          {currentImages.length > 1 && (
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={goToPrevImage}
                className="bg-[#FF7373] text-white p-3 rounded-full focus:outline-none hover:bg-[#E06666] transition-colors duration-200"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={goToNextImage}
                className="bg-[#FF7373] text-white p-3 rounded-full focus:outline-none hover:bg-[#E06666] transition-colors duration-200"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Grid for medium and larger screens */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image}
                alt={`${activeTab} image ${index + 1}`}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        <Button
          title="更多詳情"
          link="https://drive.google.com/file/d/1HyXWKWzMt70DGR4EnqQn7d5BmqDNV99u/view"
          target={true}
        />
      </div>
    </section>
  );
};

export default EventHighlights;
