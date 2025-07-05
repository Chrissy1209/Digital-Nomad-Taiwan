import React from 'react';
import Button from "../Button";

const ApplicationProcess = () => {
  return (
    <section id="howToApply" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          申請流程
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-12">
          {[
            {
              num: 1,
              title: "提交申請",
              description: "填寫我們的線上申請表，包含您的背景和興趣。",
            },
            {
              num: 2,
              title: "初步審核",
              description:
                "我們的團隊會審核您的申請，並將您與合適的機會進行匹配。",
            },
            {
              num: 3,
              title: "面試與評估",
              description:
                "參加一場輕鬆的面試，討論您的目標以及我們如何互相支持。",
            },
            {
              num: 4,
              title: "歡迎與入職",
              description:
                "加入我們的社群，透過全面的入職支持開始您的旅程。",
            },
          ].map((step) => (
            <div key={step.num} className="relative">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
              {step.num < 4 && (
                <div
                  className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300"
                  style={{ transform: "translateX(50%)" }}
                ></div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            時程 (TIMELINE)
          </h3>
          <p className="text-lg text-gray-600">
            整個流程從申請到入職通常需要 1-2 週。
          </p>
          <ul className="list-disc list-inside inline-block text-left mt-4">
            <li>申請審核： 2-3 天</li>
            <li>面試： 30-45 分鐘</li>
            <li>入職： 1 週</li>
          </ul>
        </div>
        <Button
          title="立即申請"
          link="https://hahaharrywang.github.io/DNT_Website-V1.2/application-form.html"
          target={true}
        />
      </div>
    </section>
  );
};

export default ApplicationProcess;
