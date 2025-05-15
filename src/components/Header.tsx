import "../App.css";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <header className="top-0 z-10 h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <div className="hidden sm:block font-bold font-mono text-2xl group">
          <span className="text-animation">
            ME<span className="space"> </span>TE
          </span>
        </div>
        <div className="sm:hidden font-bold font-mono text-2xl">MT</div>
      </Link>

      <nav className="flex gap-4 sm:gap-8">
        <Link
          to="/"
          className="flex h-8 items-center rounded-md px-2 py-0.5 text-center text-base sm:text-lg font-mono text-gray-400 hover:text-gray-800 duration-400"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="flex h-8 items-center rounded-md px-2 py-0.5 text-center text-base sm:text-lg font-mono text-gray-400 hover:text-gray-800 duration-400"
        >
          Projects
        </Link>
        <Link
          to="/cv"
          className="flex h-8 items-center rounded-md px-2 py-0.5 text-center text-base sm:text-lg font-mono text-gray-400 hover:text-gray-800 duration-400"
        >
          CV
        </Link>
      </nav>
    </header>
  );
}

export default Headers;
