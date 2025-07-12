🔑 Solana Key Converter

A simple Node.js tool to convert Solana private keys between Base58 (wallet-friendly) and Uint8Array formats.

📦 Features
	•	✅ Convert Base58 ➝ Uint8Array
	•	✅ Convert Uint8Array ➝ Base58
	•	✅ Uses bs58
	•	✅ Works with Solana CLI-style keys

⸻

🚀 Getting Started

1. Clone the repository

git clone https://github.com/7amoudi2dev/solana-key-converter.git
cd solana-key-converter

2. Install dependencies

npm install

3. Run the scripts

Convert Base58 ➝ Uint8Array

node Base58_to_Unit8Array.js

Convert Uint8Array ➝ Base58

node Unit8Array_to_Base58.js


⸻

🧠 Example

Input Base58

5HkJPN7xkqsLMVbr2v7qCz3JME9e5F8qD2R8m2ND5fKnz5Wn5y5giy...

Output Uint8Array

[17, 82, 240, 9, 200, 101, 11, 50, 98, 239, ...]


⸻

📁 Project Structure

solana-key-converter/
├── Base58_to_Unit8Array.js
├── Unit8Array_to_Base58.js
├── package.json
├── package-lock.json
└── .gitignore


⸻

💡 License

MIT © 7amoudi2dev

⸻

🙌 Acknowledgments
	•	Built with bs58
	•	Inspired by Solana CLI key formats
