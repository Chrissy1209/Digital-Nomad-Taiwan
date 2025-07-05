const About = () => {
  return (
    <section id="about" className="py-20 bg-white animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">關於我們</h2>
        <p className="text-lg text-gray-700 text-center mb-6 max-w-5xl mx-auto">
          台灣最大的國際化數位遊牧社群。自 2024 年起，透過線下活動聚會，連結來自 60 多國超過 1000 位專業人士。
          <br />
          我們致力於創造有意義的連結，讓在地專業人士與全球遊牧者相遇，促進文化交流與跨行業合作。
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center w-1/4  md:w-auto">
            <p className="text-4xl md:text-5xl font-bold text-blue-600">46%</p>
            <p className="text-gray-600">國際參與者</p>
          </div>
          <div className="text-center w-1/4  md:w-auto">
            <p className="text-4xl md:text-5xl font-bold text-blue-600">85%</p>
            <p className="text-gray-600">英語溝通</p>
          </div>
          <div className="text-center w-1/4  md:w-auto">
            <p className="text-4xl md:text-5xl font-bold text-blue-600">42%</p>
            <p className="text-gray-600">口碑加入</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
