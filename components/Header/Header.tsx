import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

const Li = ({ text, href }) => {
  return (
    <Link href={href} passHref>
      <li className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-gray-600">
        {text}
      </li>
    </Link>
  );
};

const Header = () => {
  return (
    <header className="min-w-screen px-4 py-4 items-center font-inter shadow-md flex flex-row justify-between">
      <Link href="#" passHref>
        <p className="text-2xl font-semibold text-gray-900 cursor-pointer">
          Anurag
        </p>
      </Link>

      <ul className="flex-row hidden md:inline-flex items-center gap-8">
        <Li text="About" href="#about" />
        <Li text="Skills" href="#skills" />
        <Li text="Projects" href="#projects" />
        <Li text="Contact" href="#contact" />
      </ul>
      <p>
        <a
          target="_blank"
          href="https://github.com/kr-anurag/portfolio"
          rel="noopener noreferrer"
          aria-label="github-repo-link"
        >
          <AiOutlineGithub
            size="25"
            className="hover:text-slate-700 cursor-pointer duration-100"
          />
        </a>
      </p>
    </header>
  );
};

export default Header;
