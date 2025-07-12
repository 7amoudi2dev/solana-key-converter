import bs58 from 'bs58';

// Example Base58-encoded private key (replace with yours)
const base58Key = "Base58 Private key here";

// Decode Base58 to Uint8Array
const uint8PrivateKey = bs58.decode(base58Key);

// Output result
console.log("🔢 Uint8Array Private Key:", Array.from(uint8PrivateKey));