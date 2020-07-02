const createWebSocketConnection = () => {
  const wsUrl = 'ws://localhost:8082/streams/overview?profile=wonder';
  return new WebSocket(wsUrl);
};

export default createWebSocketConnection;
