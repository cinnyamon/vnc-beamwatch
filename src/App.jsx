import { useState, useEffect } from "react";
import Dashboard from "./components/Dash";
import { Nav } from "./components/Nav";
import "./main.css";
import { socket } from "./lib/socket";
import { useSockets } from "./hooks/useSockets";

function App() {
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
    <div className="flex flex-col h-full">
      <Nav></Nav>
      <Dashboard
        messages={messages}
        setValue={setValue}
        value={value}
        loading={loading}
        setLoading={setLoading}
        name={name}
        setName={setName}
        onSubmit={onSubmit}
      ></Dashboard>
    </div>
  );
}

export default App;
