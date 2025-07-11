import React from "react";

const headCounts = [
  {
    icon: "👥",
    title: "社群活動總召",
    description: "主導每月活動規劃與執行，建立系統化培訓計畫。",
    benefits: "交通補助 + 利潤分成",
    priority: true,
    bgColor: "bg-red-100",
    textColor: "text-red-600",
    url: "https://docs.google.com/document/d/1lKxu9tCq-s2QEF9vFiJqiV5s6zoLAMXQ-wSgItpKYfM/edit?usp=share_link",
  },
  {
    icon: "📢",
    title: "行銷企劃",
    description: "推動社群成長與夥伴關係，為全球與台灣受眾創作內容。",  
    benefits: "交通補助 + 利潤分成",
    priority: true,
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    url: "https://docs.google.com/document/d/1BiofaoPizF_0Rjut6MLJKaiG2vlDlwLNzAZwINAH78Y/edit?usp=share_link",
  },
  {
    icon: "🎤",
    title: "雙語主持人",
    description: "以中英雙語主持活動，創造引人入勝的體驗並促進破冰活動。",
    benefits: "交通補助 + 利潤分成",
    priority: true,
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
    url: "https://docs.google.com/document/d/1zy8JFaqxT8bDSnz70vL7oSclIE6XYE8nds8BhGvIl0Q/edit?usp=share_link",
  },
  {
    icon: "🤝",
    title: "接待",
    description: "管理報到流程、處理國際支付並創造第一印象。",
    benefits: "交通補助 + 團隊獎金",
    priority: false,
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    url: "https://docs.google.com/document/d/1CqdzHbZBVWlhH0GXHwGKenEfoHmtYJRnvzBk3dmayB0/edit?usp=share_link",
  },
  {
    icon: "📷",
    title: "攝影師",
    description: "記錄社群時刻、創造視覺故事並支援行銷活動。",
    benefits: "交通補助 + 團隊獎金",
    priority: false,
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-600",
    url: "https://docs.google.com/document/d/1ivIeW_uliVDa5mqHMIAjht6yuQhUT4uh2yvRxvML5Zs/edit?usp=share_link",
  },
  {
    icon: "🎬",
    title: "短影片製作",
    description: "創作活動精華、製作宣傳內容並開發故事導向內容。",
    benefits: "交通補助 + 團隊獎金",
    priority: false,
    bgColor: "bg-pink-100",
    textColor: "text-pink-600",
    url: "https://docs.google.com/document/d/10joUiuLinYQp9sb6wVEj-vDSfblCor8hSw48ZWKjwlQ/edit?usp=share_link",
  },
  {
    icon: "🍰",
    title: "餐飲管理",
    description: "協調國際菜單、管理供應商關係並處理飲食需求。",
    benefits: "交通補助 + 團隊獎金",
    priority: false,
    bgColor: "bg-orange-100",
    textColor: "text-orange-600",
    url: "https://docs.google.com/document/d/1VKakQz0Znq72-pFDtuWYDP9Mx7yy3TzhCdiXZZxgRvo/edit?usp=share_link",
  },
  {
    icon: "🛠️",
    title: "活動幫手",
    description: "支援活動運營、學習社群管理並獲得國際經驗。",
    benefits: "交通費",
    priority: false,
    bgColor: "bg-teal-100",
    textColor: "text-teal-600",
    url: "https://docs.google.com/document/d/1cDqJmKQniP0Z2fgMftjFUfPFcvV8kvUNstNTx-pJquE/edit?usp=share_link",
  },
];

const OpenPositions = () => {
  return (
    <section id="open-positions" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          開放職位
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {headCounts.map((position) => (
            <div
              key={position.title}
              className="group relative bg-gray-50 rounded-xl p-6 flex flex-col shadow-lg hover:shadow-2xl transform transition-all duration-300"
            >
              {position.priority && (
                <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  優先
                </span>
              )}
              <div
                className={`${position.bgColor} text-white text-3xl rounded-4xl w-20 h-20 flex items-center justify-center mb-4 group-hover:rotate-15 group-hover:scale-110 duration-300`}
              >
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
                href={position.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline self-start hover:text-blue-900 group-hover:scale-110 duration-300"
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
