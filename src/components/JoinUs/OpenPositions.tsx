import React from 'react';

const OpenPositions = () => {
  return (
    <section id="open-positions" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          開放職位
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "👥",
              title: "社群活動總召",
              description:
                "主導月度活動的規劃與執行，並提供系統化的培訓計畫。",
              benefits: "交通補助 + 利潤分成",
              priority: true,
              bgColor: "bg-red-100",
              textColor: "text-red-600",
            },
            {
              icon: "📢",
              title: "行銷企劃",
              description:
                "推動社群成長與合作夥伴關係，同時為全球和台灣受眾創作內容。",
              benefits: "交通補助 + 利潤分成",
              priority: true,
              bgColor: "bg-blue-100",
              textColor: "text-blue-600",
            },
            {
              icon: "🎤",
              title: "雙語主持人",
              description:
                "以中英雙語主持活動，創造引人入勝的體驗並促進破冰活動。",
              benefits: "交通補助 + 利潤分成",
              priority: true,
              bgColor: "bg-purple-100",
              textColor: "text-purple-600",
            },
            {
              icon: "🤝",
              title: "接待",
              description: "管理報到流程、處理國際支付並創造第一印象。",
              benefits: "交通補助 + 團隊獎金",
              priority: false,
              bgColor: "bg-green-100",
              textColor: "text-green-600",
            },
            {
              icon: "📷",
              title: "攝影師",
              description: "記錄社群時刻、創造視覺故事並支援行銷活動。",
              benefits: "交通補助 + 團隊獎金",
              priority: false,
              bgColor: "bg-indigo-100",
              textColor: "text-indigo-600",
            },
            {
              icon: "🎬",
              title: "短影片製作",
              description:
                "創作活動亮點、製作宣傳內容並開發故事驅動的內容。",
              benefits: "交通補助 + 團隊獎金",
              priority: false,
              bgColor: "bg-pink-100",
              textColor: "text-pink-600",
            },
            {
              icon: "🍰",
              title: "餐飲管理",
              description: "協調國際菜單、管理供應商關係並處理飲食需求。",
              benefits: "交通補助 + 團隊獎金",
              priority: false,
              bgColor: "bg-orange-100",
              textColor: "text-orange-600",
            },
            {
              icon: "🛠️",
              title: "活動助理",
              description: "支援活動運營、學習社群管理並獲得國際曝光。",
              benefits: "交通費",
              priority: false,
              bgColor: "bg-teal-100",
              textColor: "text-teal-600",
            },
          ].map((position) => (
            <div
              key={position.title}
              className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col"
            >
              {position.priority && (
                <span className={`bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-4`}>
                  優先
                </span>
              )}
              <div className={`${position.bgColor} text-white text-3xl rounded-4xl w-20 h-20 flex items-center justify-center mb-4`}>
                {position.icon}
              </div>
              <h3 className={`text-gray-800 text-2xl font-bold mb-3`}>
                {position.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {position.description}
              </p>
              <p className="text-gray-600 mb-4 font-bold">
                福利：{position.benefits}
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline self-start"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
