"use client";

import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const roles = [
  {
    name: "🌱 探索者",
    subtitle: "對數位遊牧和社群生活充滿好奇",
    bgColor: "bg-red-100",
    headerTextColor: "text-red-800",
    bodyTextColor: "text-red-700",
    core: [
      "參與社群討論和活動",
      "提出問題，分享想法",
      "了解社群的價值觀和目標",
    ],
    requirements: ["無需特定技能", "一顆開放和學習的心"],
  },
  {
    name: "💪 貢獻者",
    subtitle: "運用你的技能，為社群添磚加瓦",
    bgColor: "bg-blue-100",
    headerTextColor: "text-blue-900",
    bodyTextColor: "text-blue-700",
    core: [
      "定期參與社群活動",
      "在特定領域做出貢獻 (例如: 技術、內容、活動策劃)",
      "協助新成員融入社群",
    ],
    requirements: ["具備一項或多項專業技能", "願意投入時間和精力"],
  },
  {
    name: "🚀 核心團隊",
    subtitle: "共同塑造社群的未來",
    bgColor: "bg-orange-100",
    headerTextColor: "text-orange-900",
    bodyTextColor: "text-orange-700",
    core: [
      "參與社群的決策和規劃",
      "領導專案或活動",
      "維護社群的健康和活躍度",
    ],
    requirements: ["對社群有深入的理解和認同", "具備領導和組織能力"],
  },
  {
    name: "🌟 願景家",
    subtitle: "引領社群，走向更廣闊的世界",
    bgColor: "bg-green-100",
    headerTextColor: "text-green-900",
    bodyTextColor: "text-green-700",
    core: [
      "定義社群的長期願景和戰略",
      "對外代表社群，拓展合作夥伴",
      "激勵和引導核心團隊",
    ],
    requirements: ["豐富的行業經驗和人脈", "卓越的領導力和遠見"],
  },
];

const Roles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<(typeof roles)[0]>();

  const openModal = (value: (typeof roles)[0]) => {
    setModalContent(value);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <section id="roles" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
          角色
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
          社群建立不僅僅是關於群體中的各種技能，可用性與一致性也同樣重要。
          {/* <br /> */}
          我們的支持系統釋放了人們為社群貢獻的潛力。
        </p>
        <div className="grid grid-cols-4 mb-12 md:grid-cols-4 gap-2 text-center m-auto max-w-4xl">
          {roles.map((role) => (
            <div className="mb-4" key={role.name}>
              <div
                key={role.name}
                className={`border border-gray-100 ${
                  role.bgColor
                } text-white text-3xl rounded-4xl w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-6 mx-auto hover:rotate-15 hover:scale-110 duration-300 cursor-pointer`}
                onClick={() => openModal(role)}
              >
                {role.name.split(" ")[0]}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                {role.name.split(" ")[1]}
              </h3>
            </div>
          ))}
        </div>
        <p className="text-center mt-4 text-gray-500">
          投入程度： 低 &lt;------&gt; 高
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && modalContent && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 relative overflow-hidden">
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 ${modalContent.headerTextColor} hover:opacity-75 cursor-pointer z-20`}
            >
              <FaTimes size={24} />
            </button>
            <div
              className={`p-8 text-center ${modalContent.headerTextColor} ${modalContent.bgColor}`}
            >
              <div className="text-5xl mb-4">
                {modalContent.name.split(" ")[0]}
              </div>
              <h3 className="text-3xl font-bold mb-2">
                {modalContent.name.split(" ")[1]}
              </h3>
              <p className="text-lg">{modalContent.subtitle}</p>
            </div>
            <div className="p-8">
              <div>
                <h4
                  className={`text-xl font-bold ${modalContent.bodyTextColor} mb-4`}
                >
                  核心職責
                </h4>
                <ul
                  className={`list-disc list-inside ${modalContent.bodyTextColor} space-y-2`}
                >
                  {modalContent.core.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h4
                  className={`text-xl font-bold ${modalContent.bodyTextColor} mb-4`}
                >
                  任職要求
                </h4>
                <ul
                  className={`list-disc list-inside ${modalContent.bodyTextColor} space-y-2`}
                >
                  {modalContent.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Roles;
