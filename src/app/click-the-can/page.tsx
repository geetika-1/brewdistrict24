"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const funnyMessages = [
  "Click, click, hocus pocus, you're awesome!",
  "You click faster than an excited hamster!",
  "Click if you like pizza. Click even if you don't.",
  "When was the last time you saw the light of day?",
  "You click so well that even Chuck Norris gets jealous!",
  "Your ability to do nothing is really impressive.",
  "Click like a duracell bunny!",
  "Your click power would make even a Jedi proud!",
  "You're like a clicking tornado hurtling across the screen!",
  "You can kill time without leaving a trace",
  "Would you call yourself an expert in lounging?",
  "Your click power would make a switch jealous!",
  "Zlatan Ibrahimovic would be jealous of this performance of yours",
  "Click like a crazy caffeine-infused monkey!",
  "You are a truly impressive click beast!",
  "If wasting time was a talent, you'd be a superstar!",
  "Aren't your clicking fingers tired yet?",
  "Click like a mad alpaca with click attacks!",
  "Click like a hyperactive llama!",
  "Click like a real digital drummer!",
  "Every click will make you feel cooler than an Eskimo in a freezer!",
  "Click like a possessed gamer and beat those mouse buttons!",
  "With every click you feel stronger than a bodybuilder",
  "With every click you grow into a click legend!",
  "Click like a squirrel with Red Bull!",
  "Will you give your fingers a holiday after this?",
  "Wow you are a good clicker!"
];

export default function ClickTheCan() {
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState("");
  const [level, setLevel] = useState(1);

  const handleClick = () => {
    setClickCount(prevCount => {
      const newCount = prevCount + 1;

      // Update level - increase level every 10 clicks
      if (newCount % 10 === 0) {
        setLevel(prev => Math.min(prev + 1, 10));
      }

      // Set random message on every click
      const randomIndex = Math.floor(Math.random() * funnyMessages.length);
      setMessage(funnyMessages[randomIndex]);

      return newCount;
    });
  };

  return (
    <div className="min-h-screen py-16 bg-cream">
      <div className="container max-w-6xl px-4 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center uppercase text-darkgray font-freudian">
          Click the can
        </h1>

        <div className="max-w-md mx-auto text-center">
          <div className="relative p-4 mb-8">
            <div className="absolute inset-0 bg-olive/10 rounded-full animate-pulse" />
            <button
              onClick={handleClick}
              className="relative z-10 transition-transform transform hover:scale-105 focus:outline-none"
              aria-label="Click the beer can"
            >
              <Image
                src="/images/ipa-can.png"
                alt="Beer Can"
                width={200}
                height={350}
                className="mx-auto"
              />
            </button>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-center mb-2 text-xl font-bold text-darkgray">
              <span className="mr-2">+1</span>
              <span>Click Count: {clickCount}</span>
            </div>

            <p className="text-lg italic text-darkgray">{message}</p>
          </div>

          <div className="mb-8">
            <h3 className="mb-2 text-lg font-bold text-darkgray">Level {level}</h3>
            <div className="w-full h-4 bg-gray-200 rounded-full">
              <div
                className="h-4 bg-pink rounded-full"
                style={{ width: `${(clickCount % 10) * 10}%` }}
              />
            </div>
          </div>

          <p className="text-darkgray">
            Keep clicking to reach higher levels and discover more funny messages!
          </p>
        </div>
      </div>
    </div>
  );
}
