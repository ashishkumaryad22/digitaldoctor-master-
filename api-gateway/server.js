const gateway = require("fast-gateway");

// const cors = require("cors");
// app.use(cors());
const PORT = 9999;

const server = gateway({
  routes: [
    {
      prefix: "/user-service",
      target: "http://localhost:8888",
    },
    {
      prefix: "/slot",
      target: "http://localhost:8080",
    },
    {
      prefix: "/appointment",
      target: "http://localhost:8081",
    },
    {
      prefix: "/video-chat-service",
      target: "http://localhost:8083",
    },
    {
      prefix: "/email-service",
      target: "http://localhost:8082",
    },
  ],
});

server.get("/test", (req, res) => {
  res.json({ message: "Server Called" });
});

server.start(PORT).then((server) => {
  console.log(`Gateway is running on port http://127.0.0.1:${PORT}`);
});
