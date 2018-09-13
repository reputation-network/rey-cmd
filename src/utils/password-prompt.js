const read = require("read");

module.exports = function passwordPrompt(message) {
  return new Promise((resolve, reject) => {
    read({
        prompt: message,
        silent: true,
        default: "",
    }, (err, result) => err? reject(err) : resolve(result));
  })
} 