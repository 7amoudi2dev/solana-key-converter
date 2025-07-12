import bs58 from 'bs58';

// Example Uint8Array private key (64 bytes = 32-byte secret key + 32-byte public key)
const uint8PrivateKey = Uint8Array.from(["Uint8Array Private key here"]
);

// Convert to Base58
const base58PrivateKey = bs58.encode(uint8PrivateKey);

// Output
console.log("🔐 Base58 Private Key:", base58PrivateKey);