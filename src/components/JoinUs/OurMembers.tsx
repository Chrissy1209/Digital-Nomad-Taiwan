import React from 'react';

const OurMembers = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          團隊成員怎麼說
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
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
          ].map((testimonial) => (
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
