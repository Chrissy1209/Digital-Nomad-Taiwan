"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Quarter {
  title: string;
  items: string[];
}

interface YearData {
  year: string;
  quarters: Quarter[];
}

const roadmapData: YearData[] = [
  {
    year: "2024",
    quarters: [
      {
        title: "Q1: 發起專案＆開啟社群帳號",
        items: [
          "發起專案＆開啟社群帳號",
          "First Team member",
          "Offline Meetup + Workshop",
        ],
      },
      {
        title: "Q2: 首場線上工作坊與活動",
        items: [
          "First Online Workshop",
          "First Pop-up Event",
          "First Nomad Night",
        ],
      },
      {
        title: "Q3: 內容與成長",
        items: [
          "First SNS Post Template",
          "First Event Recap Reels",
          "Offline Participant Over 40 → Venue Change",
        ],
      },
      {
        title: "Q4: INTERNATIONAL EXPANSION",
        items: [
          "Community International Present in Colive Fukuoka 2024",
          "First One-Day Colleague Cowork Event",
          "Offline Participant Over 50 → Venue Change",
          "Taipei Blockchain Week Collaboration: Official Cultural and Sport Side Events",
        ],
      },
    ],
  },
  {
    year: "2025",
    quarters: [
      {
        title: "Q1: 文化創新與國際參與",
        items: [
          "Nomad Night: Snake Year Soiree - First Cultural Immersive Party",
          "First Nomad Adventure: Attending Vietnam Nomad Fest with 10+ Nomads from Taiwan",
          "First Organized Taiwan Nomad Gathering in an international Digital Nomad Festival",
          "First Monthly Event organized mainly by core team",
        ],
      },
      {
        title: "Q2: 戰略夥伴關係與品牌演進",
        items: [
          "First Meetup Collaboration with KOL in other field",
          "First SNS Template Renew",
          "First Cowork collaboration with Web 3",
          "First Deep Collaboration with Industry: Taiwan English Week",
          "First Sponsorship support by Web 3",
        ],
      },
      {
        title: "Q3: 社群 2.0 與學院準備",
        items: [
          "Launch DigitalNomadsTaiwan 2.0: People-First Growth 以人為本",
          "重組與招募：專注於即將到來的 2.0 與 OMO 學院啟動",
        ],
      },
      {
        title: "Q4: 國際社群與學院軟啟動",
        items: [
          "Attending Colive Fukuoka with Community",
          "Soft launch of OMO Digital Nomad Academy",
        ],
      },
    ],
  },
  {
    year: "2026",
    quarters: [
      {
        title: "Q1: OMO ACADEMY OFFICIAL LAUNCH",
        items: ["Official Launch of OMO Digital Nomad Academy"],
      },
      {
        title: "Q2: TBA",
        items: ["To Be Announced"],
      },
      {
        title: "Q3: TBA",
        items: ["To Be Announced"],
      },
      {
        title: "Q4: TBA",
        items: ["To Be Announced"],
      },
    ],
  },
];

const RoadmapItem: React.FC<{
  yearData: YearData;
  isExpanded: boolean;
  onToggle: (year: string) => void;
}> = ({ yearData, isExpanded, onToggle }) => {
  return (
    <div className="relative flex flex-col items-center w-full">
      <button
        className="focus:outline-none flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105"
        onClick={() => onToggle(yearData.year)}
      >
        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#FF7373] text-white text-2xl font-bold">
          {yearData.year}
        </div>
        {isExpanded && <FaChevronUp size={24} className="mt-2" />}
        {!isExpanded && <FaChevronDown size={24} className="mt-2" />}
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${
            isExpanded
              ? "max-h-1000 opacity-100 mt-6 bg-white p-6 sm:p-8 rounded-lg shadow-md w-full"
              : "max-h-0 opacity-0 w-full"
          }
        `}
      >
        <ul className="space-y-6">
          {yearData.quarters.map((quarter, qIndex) => (
            <li key={qIndex}>
              <h5 className="text-xl font-semibold mb-2">{quarter.title}</h5>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {quarter.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Roadmap = () => {
  const [expandedYear, setExpandedYear] = useState<string | null>("2025");

  const handleToggle = (year: string) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <section id="roadmap" className="py-20 bg-gray-100 animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl font-bold text-center mb-8">發展路線圖</h3>
        <p className="text-lg text-gray-700 text-center mb-12">
          從過去的成就到未來的願景，見證我們的成長軌跡
        </p>

        <div className="flex flex-col gap-12">
          {roadmapData.map((yearData) => (
            <RoadmapItem
              key={yearData.year}
              yearData={yearData}
              isExpanded={expandedYear === yearData.year}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
