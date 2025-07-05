import Button from "../Button";

const Hero = () => {
  return (
    <section className="relative h-screen sm:h-[88vh] flex flex-col items-center justify-center text-white bg-gradient-to-r overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url(/images/hero-cover.jpg)" }}
      />
      <div className="absolute inset-0 bg-black opacity-50"/>
      <div className="z-10 text-center max-w-6xl mx-auto mt-3">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg animate-fade-in-up">
          DigitalNomadsTaiwan
        </h1>
        <p className="text-xl md:text-3xl font-light mb-12 opacity-90 animate-fade-in-up animation-delay-200">
          連接台灣與世界的數位遊牧社群
        </p>
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-12 hero-stats-grid">
          <div className="bg-white/70 text-black bg-opacity-30 py-8 rounded-xl shadow-2xl text-center w-full sm:w-48 transform transition-transform duration-300 hover:scale-105 animate-fade-in animation-delay-400">
            <p className="text-red-600 text-5xl font-bold mb-2">1000+</p>
            <p className="text-gray-700 text-base font-medium">參與人次</p>
          </div>
          <div className="bg-white/70 text-black bg-opacity-30 py-8 rounded-xl shadow-2xl text-center w-full sm:w-48 transform transition-transform duration-300 hover:scale-105 animate-fade-in animation-delay-400">
            <p className="text-blue-600 text-5xl font-bold mb-2">60+</p>
            <p className="text-gray-700 text-base font-medium">國籍</p>
          </div>
          <div className="bg-white/70 text-black bg-opacity-30 py-8 rounded-xl shadow-2xl text-center w-full sm:w-48 transform transition-transform duration-300 hover:scale-105 animate-fade-in animation-delay-400">
            <p className="text-purple-600 text-5xl font-bold mb-2">46%</p>
            <p className="text-gray-700 text-base font-medium">國際成員</p>
          </div>
          <div className="bg-white/70 text-black bg-opacity-30 py-8 rounded-xl shadow-2xl text-center w-full sm:w-48 transform transition-transform duration-300 hover:scale-105 animate-fade-in animation-delay-400">
            <p className="text-green-600 text-5xl font-bold mb-2">30+</p>
            <p className="text-gray-700 text-base font-medium">活動場次</p>
          </div>
        </div>
        <Button title="活動行事曆" link="https://lu.ma/digitalnomadstaiwan" target={true} />
      </div>
    </section>
  );
};

export default Hero;
