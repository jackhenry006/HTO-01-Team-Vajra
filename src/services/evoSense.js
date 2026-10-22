export function calculateGpsDistanceMeters(lat1, lon1, lat2, lon2) {
  throw new Error("Disabled: core implementation removed");
}

export class EvoSenseEngine {
  constructor(socket, nodeId, nodeName, callbacks = {}) {
    throw new Error("Disabled: core implementation removed");
  }

  setMeshNode(meshNode) {
    throw new Error("Disabled: core implementation removed");
  }

  pollMeshNetworkDistances() {
    throw new Error("Disabled: core implementation removed");
  }

  reportDistance(targetId, distance, source = "p2p_rtt", rtt = null) {
    throw new Error("Disabled: core implementation removed");
  }

  async initAudio() {
    throw new Error("Disabled: core implementation removed");
  }

  generateTemplates() {
    throw new Error("Disabled: core implementation removed");
  }

  setSweepFrequencies(startHz, endHz) {
    throw new Error("Disabled: core implementation removed");
  }

  async startMicrophone() {
    throw new Error("Disabled: core implementation removed");
  }

  connectServer() {
    throw new Error("Disabled: core implementation removed");
  }

  playBuffer(bufferData, targetTime) {
    throw new Error("Disabled: core implementation removed");
  }

  crossCorrelate(inputSamples, templateSamples) {
    throw new Error("Disabled: core implementation removed");
  }

  async handlePingerTurn(turnData) {
    throw new Error("Disabled: core implementation removed");
  }

  playTestChirp() {
    throw new Error("Disabled: core implementation removed");
  }

  triggerRound() {
    throw new Error("Disabled: core implementation removed");
  }

  destroy() {
    throw new Error("Disabled: core implementation removed");
  }
}
