import BeamChat from "./Chat";
import VideoContainer from "./Container";

const Dashboard = ({
  messages,
  setValue,
  value,
  loading,
  setLoading,
  name,
  setName,
  onSubmit,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-4 p-4">
      <VideoContainer />
      <div className="flex justify-center md:col-span-3 col-span-1">
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
