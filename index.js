// Access file system
const fs = require('fs');
// SHA-256 hash function
const sha256 = require('js-sha256');
// Create human-readable representations of digests
const humanhash = new (require("humanhash"))();

// Get content of txt file
const textFile = fs.readFileSync('examples.txt', 'utf8');

// Create SHA-256 hash of the content
const hash = sha256(textFile);

// Print human-readable hash
console.log(humanhash.humanize(hash, words=1));