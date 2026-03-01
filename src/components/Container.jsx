import { X } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Maximize, MousePointer2, ChevronUp } from "lucide-react";
import React from "react";
import { useState } from "react";

const VideoContainer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const leftControlBoard = [
    {
      title: "Take control away from the current user.",
      icon: <MousePointer2 />,
      text: "Take Control",
      fullSize: true,
    },
    {
      title: "Close current watch together session.",
      icon: <X />,
      text: "Close Session",
      fullSize: true,
    },
  ];

  const rightControlBoard = [
    {
      title: "Make the view-window fullscreen.",
      icon: <Maximize />,
      text: "Fullscreen",
      fullSize: true,
    },
    {
      title: "Make the view-window fullscreen.",
      icon: <Maximize />,
      text: "Fullscreen",
      fullSize: false,
    },
  ];
  return (
    <div className="glass flex flex-col md:col-span-9 col-span-1 rounded-2xl p-0.5">
      <iframe
        src="http://localhost:5800"
        allow="autoplay"
        className="w-full h-full rounded-t-xl"
      ></iframe>
      <div
        className={`p-2 flex justify-between transition-all ${isExpanded ? "h-[8rem]" : "h-fit"}`}
      >
        <div className="flex items-center gap-1">
          <button
            title="Take control away from the current user."
            className="py-1 px-2 border border-violet-500 rounded-lg flex items-center gap-1 font-light text-md cursor-pointer hover:bg-violet-500/40 transition-colors duration-200"
          >
            <MousePointer2 />
            <span>Take Control</span>
          </button>
          <button
            title="Close current watch together session."
            className="py-1 px-2 border border-rose-500 rounded-lg flex items-center gap-1 font-light text-md cursor-pointer hover:bg-rose-500/40 transition-colors duration-200"
          >
            <X />
            <span>Close Session</span>
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button className="py-1 px-2 border border-indigo-500 rounded-lg flex items-center gap-1 font-light text-md cursor-pointer hover:bg-indigo-500/40 transition-colors duration-200">
            <Maximize />
            <span>Fullscreen</span>
          </button>
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className={`py-1 px-1 border border-indigo-500 rounded-lg flex items-center justify-center cursor-pointer hover:bg-indigo-500/40 transition-all duration-200`}
          >
            <ChevronUp
              className={`transition-all duration-200 ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
