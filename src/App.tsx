import mail from "./assets/icons/mail.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import profileF from "./assets/profilefront.jpeg";
import profileB from "./assets/profileback.jpeg";
import { icons } from "./constants/Icons";
import SplashScreen from "./components/SplashScreen";
import { Link } from "react-router-dom";

function App() {
  const [flipped, setFlipped] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [splashDone, setSplashDone] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (splashDone) {
      const timer = setTimeout(() => setShowContent(true), 100);
      return () => clearTimeout(timer);
    }
  }, [splashDone]);

  if (!splashDone) {
    return <SplashScreen onFinish={() => setSplashDone(true)} />;
  }

  if (!showContent) {
    return null;
  }

  const handleImageEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setFlipped((prev) => !prev);
    }, 750);
  };

  const handleImageLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <>
      <div className="mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-10 sm:gap-8">
          <div className="flex-1 text-center sm:text-left space-y-2">
            <h1 className="font-semibold text-3xl sm:text-2xl tracking-tighter animate-slideUp">
              Hello, I'm Metehan
            </h1>
            <a
              href="mailto:mxetehan@hotmail.com"
              className="flex justify-center sm:justify-start items-center gap-1.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="size-2 rounded-full bg-green-500"></div>
              <div className="relative cursor-pointer overflow-hidden">
                <p className="group text-muted-foreground text-sm sm:text-base">
                  <span className="group-hover:-translate-y-full flex flex-col border-b border-dashed transition-all duration-1250 ease-slow">
                    Available for work
                    <span className="invisible h-0">Reach out</span>
                  </span>
                  <span className="group-hover:-translate-y-full absolute top-full flex items-center justify-center transition-all duration-1250 ease-slow">
                    Reach Out
                    <img src={mail} alt="Mail" className="w-4 h-4 ml-2" />
                  </span>
                </p>
              </div>
            </a>
          </div>
          <div
            className="relative w-28 h-28 sm:w-24 sm:h-24 rounded-full overflow-hidden perspective-distant"
            onMouseEnter={handleImageEnter}
            onMouseLeave={handleImageLeave}
          >
            <div
              className={`flip-card-inner w-full h-full rounded-full transform transition-transform duration-700 ease-out ${
                flipped ? "rotate-y-180" : ""
              }`}
            >
              <img
                src={profileF}
                alt="Front Photo"
                className="flip-front w-full h-full object-cover rounded-full absolute"
              />
              <img
                src={profileB}
                alt="Back Photo"
                className="flip-back w-full h-full object-cover rounded-full absolute"
              />
            </div>
          </div>
        </div>

        <div className="description text-sm sm:text-base leading-7 mt-4 text-center sm:text-left">
          <p>
            <span
              className={`transition-opacity duration-700 ${
                flipped ? "opacity-30" : "opacity-100"
              }`}
            >
              I'm a{" "}
            </span>
            <span className="relative inline-block">
              <span className="relative z-10">graduated computer engineer</span>
              {flipped && (
                <span className="absolute inset-0 bg-green-200 dark:bg-green-300 animate-highlight" />
              )}
            </span>
            <span
              className={`transition-opacity duration-700 ${
                flipped ? "opacity-30" : "opacity-100"
              }`}
            >
              {" "}
              with{" "}
            </span>
            <span className="relative inline-block">
              <span className="relative z-10">2 years experience</span>
              {flipped && (
                <span className="absolute inset-0 bg-green-200 dark:bg-green-300 animate-highlight" />
              )}
            </span>
            <span
              className={`transition-opacity duration-700 ${
                flipped ? "opacity-30" : "opacity-100"
              }`}
            >
              . My passion is improving{" "}
            </span>
            <span className="relative inline-block">
              <span className="relative z-10">
                Mobile and Web Development Experience
              </span>
              {flipped && (
                <span className="absolute inset-0 bg-green-200 dark:bg-green-300 animate-highlight" />
              )}
            </span>
            <span
              className={`transition-opacity duration-700 ${
                flipped ? "opacity-30" : "opacity-100"
              }`}
            >
              {" "}
              by building projects.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-6 mt-10">
          <h2 className="h2-styles">Knowledge</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {icons.map(({ name, src }) => (
              <div
                key={name}
                className="group flex flex-col w-full h-24 items-center justify-center scale-95 hover:scale-100 duration-300"
              >
                <img
                  src={src}
                  alt={name}
                  className="w-12 h-12 object-contain"
                />
                <span className="mt-2 text-sm text-center font-normal group-hover:font-semibold">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="description mt-10">
          <h2 className="h2-styles">Work</h2>
          <p className="descriptionText">
            I'm currently a 3D Design Freelancer and running a Instagram-based
            e-commerce business. I'm also actively looking for new job
            opportunities in design or creative fields.
          </p>
          <Link
            to="/cv"
            className="block mt-6 text-right text-sm font-medium text-green-400 hover:text-green-700"
          >
            Read my CV →
          </Link>
        </div>

        <div className="description mt-10">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-green-400 mb-14">
            I can help you with<span className="animate-ping">.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-6 transition-transform transform hover:-translate-y-2 scale-95 hover:scale-[1.0] duration-300 shadow-md hover:shadow-lg">
              <div className="text-sm text-green-400 font-mono mb-2 group-hover:text-green-400 transition-colors">
                01
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400">
                Design
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                I design clean, intuitive user interfaces for both web and
                mobile, combining functionality with creative visuals to enhance
                user experience.{" "}
              </p>
            </div>
            <div className="group bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-6 transition-transform transform hover:-translate-y-2 scale-95 hover:scale-[1.0] duration-300 shadow-md hover:shadow-lg">
              <div className="text-sm text-green-400 font-mono mb-2 group-hover:text-green-400 transition-colors">
                02
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400">
                Development
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                I develop responsive websites and applications, focusing on
                seamless performance, smooth functionality, and modern design.{" "}
              </p>
            </div>
            <div className="group bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-6 transition-transform transform hover:-translate-y-2 scale-95 hover:scale-[1.0] duration-300 shadow-md hover:shadow-lg">
              <div className="text-sm text-green-400 font-mono mb-2 group-hover:text-green-400 transition-colors">
                03
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400">
                Deployment
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                I manage the deployment process, ensuring your project goes live
                smoothly and is optimized for reliability and performance.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="description mt-10">
          <h2 className="h2-styles">Let's Connect</h2>
          <p className="descriptionText">
            Contact me in any platform you want. Just press any button down
            below and let's have a chat 💬.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
