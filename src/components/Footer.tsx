"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white py-12 px-5 animate-fade-in-up"
    >
      <div className="container mx-auto max-w-6xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 sm:gap-56">
          <div>
            <Image
              src="/images/logo.png"
              alt="Digital Nomads Taiwan Logo"
              width={150}
              height={32}
            />
            <p className="text-gray-300 text-sm mt-4">
              透過有意義的連結和專業成長機會，橋接台灣與全球數位遊牧社群。
            </p>

            {/* Contact & Social */}
            <div className="flex space-x-4 mt-6 pl-0.5">
              <Link
                href="mailto:contact@digitalnomadstaiwan.com"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaEnvelope size={24} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61555689754529"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/digitalnomadstaiwan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/digitalnomadstaiwan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  關於我們
                </Link>
              </li>
              <li>
                <Link
                  href="#events"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  活動
                </Link>
              </li>
              <li>
                <Link
                  href="#roadmap"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  發展路線圖
                </Link>
              </li>
              <li>
                <Link
                  href="https://hahaharrywang.github.io/DNT_Website-V1.2/faq-section.html"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  問答
                </Link>
              </li>
              <li>
                <Link
                  href="/join-us"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  加入我們
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.notion.so/DigitalNomadsTaiwan-Career-213dacf3cf4d80dc8ad5d58edff49af4?source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  遊牧職缺版
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 sm:mt-24 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Digital Nomads Taiwan. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
