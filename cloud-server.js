const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

function pushEvent(evt) {
  throw new Error("Disabled: core implementation removed");
}

function currentState() {
  throw new Error("Disabled: core implementation removed");
}

function computeSummary() {
  throw new Error("Disabled: core implementation removed");
}

app.post("/sync", (req, res) => {
  throw new Error("Disabled: core implementation removed");
});

app.get("/model", (req, res) => {
  throw new Error("Disabled: core implementation removed");
});

app.post("/model", (req, res) => {
  throw new Error("Disabled: core implementation removed");
});

app.get("/state", (req, res) => {
  throw new Error("Disabled: core implementation removed");
});

app.get("*splat", (req, res) => {
  throw new Error("Disabled: core implementation removed");
});

io.on("connection", (socket) => {
  throw new Error("Disabled: core implementation removed");
});

function startServer(port) {
  throw new Error("Disabled: core implementation removed");
}

if (require.main === module) {
  startServer(process.env.PORT || 4002);
}

module.exports = {
  app,
  server,
  io,
  pushEvent,
  currentState,
  computeSummary,
  startServer,
};
