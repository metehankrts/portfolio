import { useEffect, useState } from "react";

const greetings = [
  "Merhaba",
  "你好",
  "नमस्ते",
  "Hola",
  "Bonjour",
  "مرحبا",
  "হ্যালো",
  "Привет",
  "Olá",
  "سلام",
  "Halo",
  "こんにちは",
  "Hello",
];

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [index, setIndex] = useState(0);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (index < greetings.length - 1) {
      timer = setTimeout(() => {
        setIndex(index + 1);
      }, 200 + Math.random() * 100);
    } else {
      timer = setTimeout(() => {
        setIsHiding(true);
        setTimeout(onFinish, 400);
      }, 700);
    }

    return () => clearTimeout(timer);
  }, [index, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center bg-white text-green-400 transition-all duration-500 ${
        isHiding ? "-translate-y-[100vh]" : "translate-y-0"
      }`}
    >
      <h1
        key={index}
        className="text-3xl sm:text-5xl font-bold opacity-100 animate-fade-in"
        style={{ animationDuration: "280ms" }}
      >
        {greetings[index]}
      </h1>
    </div>
  );
}
