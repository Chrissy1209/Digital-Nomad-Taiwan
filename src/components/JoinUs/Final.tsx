import React from 'react';
import Button from "../Button";

const Final = () => {
  return (
    <section className="bg-gray-50 text-center py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          準備好開始您的旅程了嗎？
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          加入團隊，成為台灣數位轉型的一部分。
        </p>
        <Button
          title="加入團隊"
          link="https://hahaharrywang.github.io/DNT_Website-V1.2/application-form.html"
          target={true}
        />
      </div>
    </section>
  );
};

export default Final;
