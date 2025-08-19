'use client'
import { images } from "@/assets/images";
import React, { useState, useEffect } from "react";

const phraseLines = [
  "WELCOME TO", 
  "ISONGA PROGRAM PLATFORM",
  "where abilities meet opportunities"
];
const typingSpeed = 100;
const pauseBetweenLines = 700;
const pauseAfterPhrase = 2000;

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(["", "", ""]);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (charIndex < phraseLines[lineIndex].length) {
        timeoutId = setTimeout(() => {
          setDisplayedText((prev) => {
            const newText = [...prev];
            newText[lineIndex] = phraseLines[lineIndex].slice(0, charIndex + 1);
            return newText;
          });
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else if (charIndex === phraseLines[lineIndex].length) {
        if (lineIndex < phraseLines.length - 1) {
          setTimeout(() => {
            setLineIndex((prev) => prev + 1);
            setCharIndex(0);
          }, pauseBetweenLines);
        } else {
          setTimeout(() => {
            setIsTyping(false);
          }, pauseAfterPhrase);
        }
      }
    } else {
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText((prev) => {
            const newText = [...prev];
            newText[lineIndex] = phraseLines[lineIndex].slice(0, charIndex - 1);
            return newText;
          });
          setCharIndex((prev) => prev - 1);
        }, typingSpeed);
      } else if (lineIndex > 0) {
        setLineIndex((prev) => prev - 1);
        setCharIndex(phraseLines[lineIndex - 1].length);
      } else {
        setTimeout(() => {
          setDisplayedText(["", "", ""]);
          setLineIndex(0);
          setCharIndex(0);
          setIsTyping(true);
        }, 700);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [isTyping, lineIndex, charIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="h-screen bg-cover bg-center relative overflow-hidden text-white flex items-center justify-center" 
         style={{ backgroundImage: `url(${images.home})` }}>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text content - centered */}
      <div className="relative z-20 text-center max-w-[800px] px-4">
        
        {/* WELCOME TO */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold m-0 mb-4 leading-tight tracking-[3px]"
            style={{ 
              textShadow: '0 0 20px rgba(0, 174, 239, 0.8), 0 0 40px rgba(0, 174, 239, 0.4), 2px 2px 4px rgba(0,0,0,0.7)',
              color: 'white'
            }}>
          {displayedText[0]}
          {isTyping && lineIndex === 0 && (
            <span className={`inline-block w-[4px] h-[1em] bg-[#00AEEF] ml-2 align-baseline transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
              
            </span>
          )}
        </h1>

        {/* ISONGA PROGRAM PLATFORM */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold m-0 mb-6 leading-tight tracking-[2px] flex items-center justify-center gap-3"
            style={{ 
              textShadow: '0 0 20px rgba(0, 174, 239, 0.8), 0 0 40px rgba(0, 174, 239, 0.4), 2px 2px 4px rgba(0,0,0,0.7)',
              color: 'white'
            }}>
          {displayedText[1]}
          {isTyping && lineIndex === 1 && (
            <span className={`inline-block w-[4px] h-[1em] bg-[#00AEEF] ml-2 align-baseline transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
              
            </span>
          )}
          {/* Blue vertical line after PLATFORM */}
          {!isTyping && lineIndex === 1 && (
            <span className="inline-block w-[3px] h-[1.2em] bg-[#00AEEF] ml-2" style={{ boxShadow: '0 0 10px rgba(0, 174, 239, 0.8)' }}></span>
          )}
        </h2>

        {/* where abilities meet opportunities */}
        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light m-0 italic opacity-90 tracking-[1px]"
           style={{ 
             textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
             color: 'white'
           }}>
          {displayedText[2]}
          {isTyping && lineIndex === 2 && (
            <span className={`inline-block w-[3px] h-[0.8em] bg-[#00AEEF] ml-1 align-baseline transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
              
            </span>
          )}
        </p>
      </div>
    </div>
  );
}