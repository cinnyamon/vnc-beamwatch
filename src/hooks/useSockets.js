import { useState, useEffect } from "react";
import { socket } from "../lib/socket";

export const useSockets = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [name, setName] = useState("");

  useEffect(() => {
    const onConnect = () => {
      console.log("connected or at least tried");

      setIsConnected(true);
    };

    const onDisconnect = () => {
      console.log("disconnected or at least tried");
      setIsConnected(false);
    };

    const onMessage = (value) => {
      setMessages((prev) => [...prev, value]);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", onMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessage);
    };
  }, []);

  const connect = () => {
    socket.connect();
  };

  const disconnect = () => {
    socket.disconnect();
  };

  const onSubmit = (event) => {
    if (!value) return;
    event.preventDefault();
    console.log("tried to submit", event);
    setLoading(true);

    socket.emit("message", { message: value, sender: name });
    setLoading(false);
    setValue("");
  };

  return {
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
  };
};
