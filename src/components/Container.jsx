import { X } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Volume2 } from "lucide-react";
import { VolumeX } from "lucide-react";
import { Volume1 } from "lucide-react";
import { Maximize, MousePointer2, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useSession } from "../hooks/useSession";

const VideoContainer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [volumePrcnt, setVolumePrcnt] = useState(50);
  const { callPerms } = useSession();

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
    {
      title: "Make the view-window fullscreen.",
      icon: <Maximize />,
      text: "Fullscreen",
      fullSize: true,
    },
    {
      title: "Expand control panel.",
      icon: <ChevronDown />,
      fullSize: false,
    },
  ];

  const handleVolume = (e) => {
    setVolumePrcnt(Number(e.target.value));
  };

  const handleCloseSession = () => {
    console.log("clicked close");

    callPerms();
  };

  return (
    <div className="glass flex flex-col h-full rounded-2xl p-0.5">
      <iframe
        src="http://localhost:5800"
        allow="autoplay"
        className="w-full h-full rounded-t-xl"
      ></iframe>
      <div
        className={`p-2 flex justify-between transition-all duration-200 ${isExpanded ? "h-12" : "h-48"}`}
      >
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-1 items-center">
            <button
              title="Take control away from the current user."
              className="py-1 px-2 border border-violet-500 rounded-lg flex items-center gap-1 font-light text-md cursor-pointer hover:bg-violet-500/40 transition-colors duration-200 text-nowrap h-fit"
            >
              <MousePointer2 />
              <span>Take Control</span>
            </button>

            <button
              onClick={handleCloseSession}
              title="Close current watch together session."
              className="py-1 px-2 border border-rose-500 rounded-lg flex items-center gap-1 font-light text-md cursor-pointer hover:bg-rose-500/40 transition-colors duration-200 text-nowrap h-fit"
            >
              <X />
              <span>Close Session</span>
            </button>
            {!isExpanded && (
              <div className="flex items-center justify-center gap-2 w-full bg-indigo-950/40 py-1 px-2 rounded-lg border border-violet-500">
                <div className="flex w-1/3">
                  {volumePrcnt >= 1 && volumePrcnt <= 75 ? (
                    <Volume1 />
                  ) : volumePrcnt > 75 ? (
                    <Volume2 />
                  ) : (
                    <VolumeX />
                  )}
                  <label htmlFor="volume" className="font-light">
                    Volume
                  </label>
                </div>
                <div className="relative w-2/3 ">
                  <input
                    id="volume"
                    type="range"
                    defaultValue={volumePrcnt}
                    onChange={handleVolume}
                    className="w-full cursor-pointer rounded-full appearance-none h-2 bg-indigo-950 range-orange-500"
                  />
                  {/* <span className="text-xs absolute -bottom-3 inset-s-0">
                    0%
                  </span>
                  <span className="text-xs absolute -bottom-3 -translate-x-1/2 inset-s-1/2">
                    50%
                  </span>
                  <span className="text-xs absolute -bottom-3 inset-e-0">
                    100%
                  </span> */}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-1 items-center">
            <button className="py-1 px-2 border border-indigo-500 rounded-lg flex items-center gap-1 font-light text-md cursor-pointer hover:bg-indigo-500/40 transition-colors duration-200">
              <Maximize />
              <span>Fullscreen</span>
            </button>

            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              className={`py-1 px-1 border border-indigo-500 rounded-lg flex items-center justify-center cursor-pointer hover:bg-indigo-500/40 transition-all duration-200`}
            >
              <ChevronUp
                className={`transition-all duration-200 ${isExpanded ? "" : "rotate-180"}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
