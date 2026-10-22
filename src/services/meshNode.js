export class MeshNode {
  constructor(id, name, signalSocket, callbacks) {
    throw new Error("Disabled: core implementation removed");
  }

  destroy() {
    throw new Error("Disabled: core implementation removed");
  }

  async _initCrypto() {
    throw new Error("Disabled: core implementation removed");
  }

  _floodIdentity(toPeerId) {
    throw new Error("Disabled: core implementation removed");
  }

  async _handleIdentityMessage(msg, fromPeerId) {
    throw new Error("Disabled: core implementation removed");
  }

  setLocationSharing(enabled, manualCoords = null) {
    throw new Error("Disabled: core implementation removed");
  }

  setManualLocation(coords) {
    throw new Error("Disabled: core implementation removed");
  }

  setCloudSync(url, enabled) {
    throw new Error("Disabled: core implementation removed");
  }

  async _syncToCloud() {
    throw new Error("Disabled: core implementation removed");
  }

  _applyModel(model) {
    throw new Error("Disabled: core implementation removed");
  }

  register() {
    throw new Error("Disabled: core implementation removed");
  }

  connectToPeer(peerId, peerName, isInitiator) {
    throw new Error("Disabled: core implementation removed");
  }

  async _onSignal(from, fromName, data) {
    throw new Error("Disabled: core implementation removed");
  }

  _wireChannel(channel, peerId) {
    throw new Error("Disabled: core implementation removed");
  }

  _handlePeerLost(peerId) {
    throw new Error("Disabled: core implementation removed");
  }

  _floodMyTopology() {
    throw new Error("Disabled: core implementation removed");
  }

  _broadcastToAll(msg, exceptPeerId) {
    throw new Error("Disabled: core implementation removed");
  }

  _onData(fromPeerId, msg) {
    throw new Error("Disabled: core implementation removed");
  }

  _broadcastTo(peerId, msg) {
    throw new Error("Disabled: core implementation removed");
  }

  _rttOf(peerId) {
    throw new Error("Disabled: core implementation removed");
  }

  _recordRttSample(peerId, rtt) {
    throw new Error("Disabled: core implementation removed");
  }

  _updateCongestion(peerId, history) {
    throw new Error("Disabled: core implementation removed");
  }

  _congestionOf(peerId) {
    throw new Error("Disabled: core implementation removed");
  }

  _congestionPenalty(level) {
    throw new Error("Disabled: core implementation removed");
  }

  _pingAll() {
    throw new Error("Disabled: core implementation removed");
  }

  _deriveGraph() {
    throw new Error("Disabled: core implementation removed");
  }

  computeRoute(fromId, toId) {
    throw new Error("Disabled: core implementation removed");
  }

  async sendMessage(toId, text, forcedLocation) {
    throw new Error("Disabled: core implementation removed");
  }

  async broadcastLocationToAll(text, customLocation = null) {
    throw new Error("Disabled: core implementation removed");
  }

  async sendMedia(toId, kind, dataUrl, mimeType, caption) {
    throw new Error("Disabled: core implementation removed");
  }

  _handleMediaChunk(envelope) {
    throw new Error("Disabled: core implementation removed");
  }

  async _finalizeMedia(envelope, combined) {
    throw new Error("Disabled: core implementation removed");
  }

  async _handleMessageEnvelope(envelope) {
    throw new Error("Disabled: core implementation removed");
  }

  _forwardEnvelope(envelope) {
    throw new Error("Disabled: core implementation removed");
  }

  _enqueue(peerId, envelope) {
    throw new Error("Disabled: core implementation removed");
  }

  _drainQueues() {
    throw new Error("Disabled: core implementation removed");
  }

  goOffline() {
    throw new Error("Disabled: core implementation removed");
  }
}
