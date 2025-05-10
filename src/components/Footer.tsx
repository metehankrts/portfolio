import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import mail from "../assets/icons/mail.svg";

function Footer() {
  return (
    <footer className="mt-10 mb-12 flex justify-end pr-4">
      <ul className="flex gap-6 items-center">
        <li>
          <a
            href="https://github.com/metehankrts"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-black opacity-50 hover:opacity-100 scale-95 hover:scale-100 duration-400"
          >
            <img src={github} alt="GitHub" className="w-5 h-5" />
            <span className="ml-2 hidden md:inline">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/karatasmetehan"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-black opacity-50 hover:opacity-100 scale-95 hover:scale-100 duration-400"
          >
            <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
            <span className="ml-2 hidden md:inline">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:mxetehan@hotmail.com"
            className="flex items-center text-black opacity-50 hover:opacity-100 scale-95 hover:scale-100 duration-400"
          >
            <img src={mail} alt="Email" className="w-5 h-5" />
            <span className="ml-2 hidden md:inline">Email</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
