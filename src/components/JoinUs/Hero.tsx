import React from 'react';
import Button from "../Button";

const Hero = () => {
  return (
    <section className="bg-[#FFE3E3] text-center py-16 h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          加入我們
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          社群的建立需要群體中所有人的貢獻。
          <br />
          加入我們的工作小組，進一步探索您與社群如何互相支持。
        </p>
        <div>
          <Button title={"角色與職位"} link="#roles" target={false} />
          <Button title={"申請流程"} link="#howToApply" target={false} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
