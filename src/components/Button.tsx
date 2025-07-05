import Link from "next/link";

type ButtonProps = {
  title: string;
  link: string;
  target: boolean;
};

const Button = ({ title, link, target }: ButtonProps) => {
  return (
    <div className="z-10 text-center max-w-6xl mx-auto mt-3">
      <div className="mt-12 animate-fade-in animation-delay-800">
        <Link
          href={link}
          target={target ? "_blank" : "_self"}
          rel={target ? "noopener noreferrer" : undefined}
          className="inline-block px-10 py-4 bg-[#FF7373] text-white rounded-full text-xl font-bold shadow-lg transform transition-transform hover:scale-105 duration-300"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default Button;
