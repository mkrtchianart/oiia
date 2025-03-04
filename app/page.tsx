'use client';

import { Header } from "@/components/Header";
import { Pointer } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinCount, setSpinCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isSpinning) {
      intervalRef.current = setInterval(() => {
        setSpinCount(prev => prev + 1);
      }, 150);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setSpinCount(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isSpinning]);

  const handlePointerDown = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/oiia-short.mp3");
      audioRef.current.loop = true;
    }
    audioRef.current.play();
    setIsSpinning(true);
  };

  const safeArea = {
    paddingTop: `calc(var(--tg-content-safe-area-inset-top) + var(--tg-safe-area-inset-top))`,
    paddingBottom: `var(--tg-content-safe-area-inset-bottom)`,
  }  

  const handlePointerUpOrLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsSpinning(false);
  };

  return (
    <div className="flex flex-col justify-center items-center content-center h-full" style={safeArea}>
      <Header />
      <div className="relative w-full flex flex-col items-center justify-center">
        <div
          className="relative w-full cursor-pointer select-none touch-none"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUpOrLeave}
          onPointerLeave={handlePointerUpOrLeave}
        >
          <Image
            src={isSpinning ? "/cat/oiia_spin.gif" : "/cat/oiia.png"}
            alt="OIIA"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
          <div className="absolute inset-0 w-full h-full" onContextMenu={(e) => e.preventDefault()} />
          {!isSpinning && (
            <div className="hint absolute left-1/2 bottom-8 -translate-x-1/2 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              <Pointer className="w-5 h-5" />
              <span className="text-sm font-medium">Hold to OIIA</span>
            </div>
          )}
          {isSpinning && (
            <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex items-center gap-4">
              <span className="text-2xl font-bold text-white [text-shadow:_2px_2px_0_#AC85F0,_-2px_-2px_0_#AC85F0,_2px_-2px_0_#AC85F0,_-2px_2px_0_#AC85F0]">
                SPINS: <span className="text-2xl">{spinCount}</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
