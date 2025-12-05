'use client'
import React, { useState, useCallback, useEffect } from 'react';

interface FrameProps {
  letter: string;
  nextLetter: string;
  stage: number;
}

const Frame: React.FC<FrameProps> = ({ letter, nextLetter, stage }) => (
  <div className="flex flex-col gap-0.5 w-16 h-20 relative">
    <div className="h-10 bg-black rounded-t-lg z-30 relative">
      {stage === 2 && (
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-gray-700"></div>
      )}
    </div>
    <div className="relative h-10">
      <div className="absolute top-2 left-0 right-0 h-10 bg-gray-500 rounded-b-lg z-10"></div>
      <div className={`absolute top-1 left-0 right-0 h-10 ${stage === 1 ? 'bg-black' : 'bg-gray-700'} rounded-b-lg z-20`}></div>
      <div className={`${stage === 1 ? 'h-5' : 'h-10'} bg-${stage === 1 ? 'gray-700' : 'black'} rounded-b-lg relative ${stage === 1 ? 'z-50' : 'z-30'}`}></div>
    </div>
    <p className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white -translate-y-2 leading-none z-40">
      {stage === 2 ? nextLetter : letter}
    </p>
  </div>
);

interface InteractiveSplitFlapDisplayProps {
  startLetter: string;
  endLetter: string;
  isActive: boolean;
}

const InteractiveSplitFlapDisplay: React.FC<InteractiveSplitFlapDisplayProps> = ({ startLetter, endLetter, isActive }) => {
  const [currentLetter, setCurrentLetter] = useState(startLetter);
  const [stage, setStage] = useState(0);

  const nextLetter = useCallback((letter: string) => {
    const next = String.fromCharCode(letter.charCodeAt(0) + 1);
    return next > 'z' ? 'a' : next;
  }, []);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (isActive && currentLetter !== endLetter) {
      timer = setTimeout(() => {
        setStage((prevStage) => (prevStage + 1) % 3);
        if (stage === 2) {
          setCurrentLetter(nextLetter);
        }
      }, 30);  // Changed from 40ms to 30ms
    } else if (!isActive && currentLetter !== startLetter) {
      timer = setTimeout(() => {
        setStage((prevStage) => (prevStage + 1) % 3);
        if (stage === 2) {
          setCurrentLetter((prevLetter) => {
            if (prevLetter === startLetter) return startLetter;
            return nextLetter(prevLetter);
          });
        }
      }, 30);  // Changed from 40ms to 30ms
    }
    return () => clearTimeout(timer);
  }, [isActive, currentLetter, startLetter, endLetter, stage, nextLetter]);

  return (
    <Frame 
      letter={currentLetter} 
      nextLetter={nextLetter(currentLetter)} 
      stage={stage}
    />
  );
};

const SplitFlapDisplay = () => {
  const [isHovering, setIsHovering] = useState(false);
  const letterPairs = [
    { start: 's', end: 'a' },
    { start: 'e', end: 'n' },
    { start: 'r', end: 'd' },
    { start: 'd', end: 'r' },
    { start: 'n', end: 'e' },
    { start: 'a', end: 's' },
  ];

  return (
    <div 
      className="flex space-x-1 p-4 w-fit scale-50  rounded-lg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {letterPairs.map((pair, index) => (
        <InteractiveSplitFlapDisplay
          key={index}
          startLetter={pair.start}
          endLetter={pair.end}
          isActive={isHovering}
        />
      ))}
    </div>
  );
};

export default SplitFlapDisplay;