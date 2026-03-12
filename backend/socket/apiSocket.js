const apiSocket = async (socket, io) => {
  socket.on("message", (e) => {
    io.emit("message", e);
  });
};

export default apiSocket;
