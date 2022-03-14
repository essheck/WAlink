# wa-me-generator

_A simple module to create wa.me links_

A wa.me link is used to open a WhatsApp Chat with a person using their phone number.

## Usage

Install the package: `npm install wa-me-generator`

```javascript
const waMe = require("wa-me-generator");

// Create a link from a phone number:
waMe.createFromNumber("+56 (1356) 12345-67");
// returns: "https://wa.me/5613561234567"

// Create a link from a phone number with predefined country code:
waMe.createFromNumber("1356 12345-67", "56");
// returns: "https://wa.me/5613561234567"

// Create a link from a phone number with a pre-filled message:
waMe.createFromNumberWithMessage("+49 (30) 82-56/123 99", "message"); // predefined country code works here aswell
// returns: "https://api.whatsapp.com/send/?phone=4930825612399&text=message"
```
