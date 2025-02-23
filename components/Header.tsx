'use client'
import Image from "next/image";
import Link from "next/link";
import { RetroButton } from "./ui/retro-button";

export function Header() {
  return (
    <>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(360deg);
          }
          75% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>
      <header className="w-full px-6 py-4 flex flex-col justify-between items-center bg-transparent">
        <h1 className="text-white text-4xl font-bold drop-shadow-lg [text-shadow:_2px_2px_0_#AC85F0,_-2px_-2px_0_#AC85F0,_2px_-2px_0_#AC85F0,_-2px_2px_0_#AC85F0]" style={{ animation: 'spin 3s infinite ease-in-out' }}>$OIIAI</h1>
        <div className="py-4">
          <Link href="https://t.me/blum/app?startapp=memepadjetton_OIIAI_Yrl72-ref_3zVqRdIWxc" target="_blank" rel="noopener noreferrer">
            <RetroButton variant="lime">
              <span className="flex items-center justify-center gap-2">
                <span className="text-black text-lg font-semibold">BUY on</span>
                <Image src="/blum.svg" alt="Blum" width={16} height={16} className="invert"/> 
                <span className="text-black text-lg font-semibold">Memepad</span>
              </span>
            </RetroButton>
          </Link>
          <div className="flex py-4 flex-row gap-2">
            <Link href="https://x.com/oiiai_tg" target="_blank" rel="noopener noreferrer">
              <RetroButton variant="darkGray">
                <span className="text-white font-semibold flex flex-row gap-2 justify-center items-center">
                  <Image src="/x.svg" alt="Twitter" width={24} height={24} className="invert" />
                </span>
              </RetroButton>
            </Link>
            <Link href="https://instagram.com/oiiai_tg" target="_blank" rel="noopener noreferrer">
              <RetroButton variant="darkGray">
                <span className="text-white font-semibold flex flex-row gap-2 justify-center items-center">
                  <Image src="/instagram.svg" alt="Instagram" width={24} height={24} className="invert"/>
                </span>
              </RetroButton>
            </Link>
            <Link href="https://t.me/oiiai_chat" target="_blank" rel="noopener noreferrer">
              <RetroButton variant="white">
                <span className="font-semibold px-1 flex flex-row gap-2 justify-center items-center">
                CHAT<Image src="/telegram.svg" alt="Telegram" width={24} height={24}/>
                </span>
              </RetroButton>
            </Link>
            <Link href="https://t.me/oiiai_news" target="_blank" rel="noopener noreferrer">
              <RetroButton variant="blue">
                <span className="font-semibold px-1 flex flex-row gap-2 justify-center items-center">
                NEWS<Image src="/telegram.svg" alt="Telegram" width={24} height={24} className="invert"/>
                </span>
              </RetroButton>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
