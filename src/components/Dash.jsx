import BeamChat from "./Chat";

const Dashboard = ({ isConnected, messages }) => {
  console.log("my connection status in dashboard", isConnected);

  return (
    <div className="grid grid-cols-12 h-full gap-4 p-4">
      <div className="glass col-span-9 rounded-2xl p-0.5">
        <iframe
          src="http://localhost:5800"
          allow="autoplay"
          className="w-full h-full rounded-2xl"
        ></iframe>
      </div>
      <div className="flex justify-center col-span-3">
        <BeamChat messages={messages} />
      </div>
    </div>
  );
};

export default Dashboard;
