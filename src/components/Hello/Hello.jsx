import React, { useEffect, useState } from "react";

function Hello() {
  const helloArray = [
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "ሰላም",
    "Namaste",
    "Hello",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(helloArray[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWordIndex < helloArray.length) {
        setCurrentWord(helloArray[currentWordIndex]);
        setCurrentWordIndex(currentWordIndex + 1);
      }
    }, 2000 / helloArray.length);
    return () => clearTimeout(timer);
  }, [currentWordIndex]);

  return (
    <div className="text-[#c9fd74] fixed bg-black h-screen w-screen flex justify-center items-center text-6xl font-Migra">
      <h1>{currentWord}</h1>
    </div>
  );
}

export default Hello;
