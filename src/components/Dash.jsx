import { useSockets } from "../hooks/useSockets";
import BeamChat from "./Chat";
import VideoContainer from "./Container";

const Dashboard = ({}) => {
  const {
    onSubmit,
    disconnect,
    connect,
    value,
    setValue,
    loading,
    setLoading,
    messages,
    setMessages,
    isConnected,
    setIsConnected,
    name,
    setName,
  } = useSockets();
  return (
    <div className="flex h-full gap-4 p-4 pt-26">
      <div className="w-full">
        <VideoContainer />
      </div>
      <div className="justify-center w-fit">
        <BeamChat
          messages={messages}
          setValue={setValue}
          value={value}
          loading={loading}
          name={name}
          setName={setName}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default Dashboard;
