export class InertiaSense {
  constructor(options = {}) {
    throw new Error("Disabled: core implementation removed");
  }

  async init(callbacks = {}) {
    throw new Error("Disabled: core implementation removed");
  }

  async requestMicrophone() {
    throw new Error("Disabled: core implementation removed");
  }

  startMotionMonitoring() {
    throw new Error("Disabled: core implementation removed");
  }

  startDetectionLoop() {
    throw new Error("Disabled: core implementation removed");
  }

  extractFeatures() {
    throw new Error("Disabled: core implementation removed");
  }

  computeRhythmFeatures() {
    throw new Error("Disabled: core implementation removed");
  }

  computeMotionFeatures() {
    throw new Error("Disabled: core implementation removed");
  }

  runInference(features) {
    throw new Error("Disabled: core implementation removed");
  }

  processPrediction(prediction, features) {
    throw new Error("Disabled: core implementation removed");
  }

  async triggerDetection(type, confidence, features, isManual = false) {
    throw new Error("Disabled: core implementation removed");
  }

  async sendAutoBeacon(detection) {
    throw new Error("Disabled: core implementation removed");
  }

  async getCoordinates() {
    throw new Error("Disabled: core implementation removed");
  }

  classifyEnvironment(features) {
    throw new Error("Disabled: core implementation removed");
  }

  simulateTapping() {
    throw new Error("Disabled: core implementation removed");
  }

  simulateInertia() {
    throw new Error("Disabled: core implementation removed");
  }

  handleError(msg) {
    throw new Error("Disabled: core implementation removed");
  }

  notifyStatus(st) {
    throw new Error("Disabled: core implementation removed");
  }

  stop() {
    throw new Error("Disabled: core implementation removed");
  }
}
