'use client';

import React, { useState, useEffect } from 'react';
import { FaTimes } from "react-icons/fa";

const values = [
  {
    icon: "🌟",
    title: "以人為本 (PEOPLE-FIRST)",
    description: "我們將社群成員的需求和福祉放在首位，致力於創造一個支持性、包容且賦予力量的環境。",
  },
  {
    icon: "🧠",
    title: "成長心態 (GROWTH MINDSET)",
    description: "我們鼓勵持續學習、適應和創新。我們相信挑戰是成長的機會，並支持彼此探索新技能和想法。",
  },
  {
    icon: "💬",
    title: "開放溝通 (OPEN COMMUNICATION)",
    description: "我們提倡透明、誠實和尊重的交流。我們相信開放的對話能建立信任，促進理解，並解決問題。",
  },
  {
    icon: "🤝",
    title: "有意義的連結 (MEANINGFUL CONNECTIONS)",
    description: "我們致力於建立深厚、真誠的關係，超越表面的互動。我們相信這些連結是社群力量的基石。",
  },
  {
    icon: "⚖️",
    title: "價值交換 (VALUE EXCHANGE)",
    description: "我們鼓勵互惠互利，讓每個人都能貢獻自己的獨特價值，並從社群中獲得支持和資源。",
  },
  {
    icon: "🌱",
    title: "可持續成長 (SUSTAINABLE GROWTH)",
    description: "我們專注於長期的發展和影響力，確保我們的行動不僅能滿足當前需求，也能為未來世代創造持久的價值。",
  },
];

const CultureValues = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<typeof values[0]>();

  const openModal = (value: typeof values[0]) => {
    setModalContent(value);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
          我們的文化與價值觀
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
          這些核心原則塑造了我們的社群文化，並指導我們做出的每一個決定。
          <br />
          點擊每個價值觀，了解更多我們如何將其付諸實踐。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center cursor-pointer">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              onClick={() => openModal(value)}
            >
              <p className="text-2xl font-semibold text-gray-800">
                {value.icon} {value.title.split(' (')[0]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full mx-4 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              <FaTimes size={24} />
            </button>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-left">
              {modalContent?.icon} {modalContent?.title.split(' (')[0]}
            </h3>
            <p className="text-gray-700 text-lg text-left mb-6">
              {modalContent?.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CultureValues;
