import { SendHorizontal } from "lucide-react";
import { useState } from "react";
import { socket } from "../socket";

const BeamChat = ({ messages }) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(value);
  console.log(
    "my events in beamchat, use me to map them in the chat",
    messages,
  );

  // useEffect(() => {
  //   const sometin = (e) => {
  //     console.log('aaaaaaaaa', sometin)
  //     setMessage(e)
  //   }
  //   socket.on('create-something', sometin)
  // }, [])

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("tried to submit", event);
    setLoading(true);

    socket.timeout(5000).emit("create-something", value, () => {
      setLoading(false);
    });
  };

  return (
    <div className="glass col-span-3 max-w-sm p-4 rounded-2xl w-full flex flex-col justify-between gap-3">
      <div>
        <h3>Beam Chat</h3>
      </div>

      <div className="h-full">
        <ul></ul>
      </div>

      <div className="">
        <form onSubmit={onSubmit}>
          <div className="flex gap-2 bg-gray-900 flex-3 w-full p-3 rounded-xl">
            <input
              type="text"
              onChange={(e) => setValue(e.target.value)}
              className="min-w-1 w-full focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-950 w-fit px-2 py-2 rounded-md cursor-pointer hover:bg-blue-900 transition-colors"
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
