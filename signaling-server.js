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

function modelResponse(req, res) {
  throw new Error("Disabled: core implementation removed");
}

app.get("/api/auto-beacon", (req, res) => {
  throw new Error("Disabled: core implementation removed");
});

app.post("/api/auto-beacon", (req, res) => {
  throw new Error("Disabled: core implementation removed");
});

app.get("/api/inertiasense/model", (req, res) => {
  throw new Error("Disabled: core implementation removed");
});

app.get("/api/pulse-seeker/model", (req, res) => {
  throw new Error("Disabled: core implementation removed");
});

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

app.use((req, res) => {
  throw new Error("Disabled: core implementation removed");
});

io.on("connection", (socket) => {
  throw new Error("Disabled: core implementation removed");
});

function startServer(port) {
  throw new Error("Disabled: core implementation removed");
}

if (require.main === module) {
  startServer(process.env.PORT || 4001);
}

module.exports = {
  app,
  server,
  io,
  pushEvent,
  currentState,
  computeSummary,
  modelResponse,
  startServer,
};
