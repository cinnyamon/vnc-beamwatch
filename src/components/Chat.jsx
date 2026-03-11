import { ChevronDown } from "lucide-react";
import { Check } from "lucide-react";
import { CheckSquare2 } from "lucide-react";
import { SendHorizontal } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const BeamChat = ({
  messages,
  setValue,
  value,
  loading,
  name,
  setName,
  onSubmit,
}) => {
  const [isDown, setIsDown] = useState(false);
  const [nameSelected, setNameSelected] = useState(false);

  const handleNameSelection = (e) => {
    setNameSelected(true);
  };

  console.log(messages);
  // console.log(
  //   "my events in beamchat, use me to map them in the chat",
  //   messages,
  //   name,
  // );

  return (
    <div className="glass max-w-sm min-w-56 px-4 pb-4 rounded-2xl w-full h-full flex flex-col justify-between gap-3">
      <div className="flex justify-between border-b border-indigo-500/20 py-4">
        <div>BeamWatch Chat</div>
        <button
          onClick={() => setIsDown((prev) => !prev)}
          className="cursor-pointer border border-px border-indigo-800 px-1 rounded-md"
        >
          <ChevronDown
            className={`transition-all duration-300 ${isDown ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>
      <AnimatePresence>
        {isDown && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full border border-indigo-500 py-4 px-2 rounded-xl flex items-start bg-indigo-950/50"
          >
            <AnimatePresence>
              {nameSelected ? (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 1, x: 0 }}
                  className="text-start"
                >
                  <label className="text-xs font-light text-indigo-300">
                    Your name for this session:
                  </label>
                  <p>{name}</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 1, x: 0 }}
                  className="flex flex-col text-start gap-1 w-full"
                >
                  <label
                    htmlFor="nameField"
                    className="text-xs font-light text-indigo-300"
                  >
                    Your Name:
                  </label>
                  <div className="flex justify-center gap-2">
                    <input
                      id="nameField"
                      type="text"
                      placeholder="Enter name.."
                      onChange={(e) => setName(e.target.value)}
                      className="placeholder:text-xs placeholder:font-extralight font-light text-sm w-full focus:outline-none py-2 border border-px border-indigo-500 rounded-lg px-2"
                    />
                    <button
                      onClick={handleNameSelection}
                      className="p-2 border border-indigo-500 rounded-lg font-light text-sm bg-indigo-800/50 hover:bg-indigo-800 transition-colors duration-200 cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-300" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-full flex flex-col items-start">
        {messages.map((msg, idx) => (
          <ul
            key={idx}
            className="w-full text-start rounded-sm transition-all duration-150 hover:bg-indigo-950/30 group relative"
          >
            <span className="text-indigo-300 font-light">
              {msg.sender + ": "}
            </span>
            <span className="break-all">{msg.message}</span>
            <span className=" absolute font-extralight bottom-0 right-0 text-xs opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black/80 py-0.5 px-1.5 rounded-md">
              {msg.timeStamp}
            </span>
          </ul>
        ))}
      </div>

      <div className="">
        <form onSubmit={onSubmit}>
          <div className="flex gap-2 bg-gray-900 flex-3 w-full p-3 rounded-xl focus-within:outline-1 focus-within:outline-indigo-500">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Message.."
              className="min-w-1 w-full focus:outline-none placeholder:text-sm placeholder:font-light"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-950 w-fit px-2 py-2 rounded-md cursor-pointer hover:bg-indigo-900 transition-colors"
              title="Send message."
            >
              <SendHorizontal className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BeamChat;
