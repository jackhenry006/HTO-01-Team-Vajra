export function cryptoIsAvailable() {
  throw new Error("Disabled: core implementation removed");
}

export function ab2b64(buf) {
  throw new Error("Disabled: core implementation removed");
}

export function b642ab(b64) {
  throw new Error("Disabled: core implementation removed");
}

export async function generateIdentityKeys() {
  throw new Error("Disabled: core implementation removed");
}

export async function exportRawB64(publicKey) {
  throw new Error("Disabled: core implementation removed");
}

export async function importEcdhPub(b64) {
  throw new Error("Disabled: core implementation removed");
}

export async function importSignPub(b64) {
  throw new Error("Disabled: core implementation removed");
}

export async function fingerprintOf(b64) {
  throw new Error("Disabled: core implementation removed");
}

export async function deriveSharedKey(myPrivateKey, theirPublicKey) {
  throw new Error("Disabled: core implementation removed");
}

export async function encryptPayload(sharedKey, payloadObj) {
  throw new Error("Disabled: core implementation removed");
}

export async function decryptPayload(sharedKey, ivB64, ciphertextB64) {
  throw new Error("Disabled: core implementation removed");
}

export async function signEnvelope(signPrivateKey, msgId, from, to, ivB64, ciphertextB64) {
  throw new Error("Disabled: core implementation removed");
}

export async function verifyEnvelope(signPublicKey, msgId, from, to, ivB64, ciphertextB64, sigB64) {
  throw new Error("Disabled: core implementation removed");
}
