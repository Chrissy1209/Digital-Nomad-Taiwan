import React from 'react';

const Roles = () => {
  return (
    <section id="roles" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
          角色
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
          社群建立不僅僅是關於群體中的各種技能，可用性與一致性也同樣重要。
          <br />
          我們的支持系統釋放了人們為社群貢獻的潛力。
        </p>
        <div className="flex justify-center items-end space-x-4 md:space-x-8">
          {[
            { name: "🌱 探索者 (EXPLORER)", height: "h-32" },
            { name: "💪 貢獻者 (CONTRIBUTOR)", height: "h-40" },
            { name: "🚀 核心團隊 (CORE TEAM)", height: "h-48" },
            { name: "🌟 願景家 (VISIONARY)", height: "h-56" },
          ].map((role) => (
            <div key={role.name} className="text-center">
              <div
                className={`bg-white pt-3 px-7 sm:p-6 rounded-lg shadow-md mb-2 ${role.height}`}
              >
                <p className="text-lg font-semibold">
                  {role.name.split(" ")[1]}
                </p>
                <p className="text-sm text-gray-500">
                  {role.name.split(" ")[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-4 text-gray-500">
          投入程度： 低 &lt;------&gt; 高
        </p>
      </div>
    </section>
  );
};

export default Roles;
