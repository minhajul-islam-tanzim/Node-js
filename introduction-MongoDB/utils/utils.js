const path = require('path');

console.log("Root Dir:", path.dirname(require.main.filename));

module.exports = path.dirname(require.main.filename);