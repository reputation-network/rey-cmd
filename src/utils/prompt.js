const read = require("read");

function password(message) {
  return new Promise((resolve, reject) => {
    read({
        prompt: message,
        silent: true,
        default: "",
    }, (err, result) => err? reject(err) : resolve(result));
  })
}

function confirmation(message) {
  return new Promise((resolve, reject) => {
    const pormptConfirmation = () => {
      read({
        prompt: `${message} [y/N]`,
      }, (err, result) => {
        result = result.toLocaleLowerCase();
        if (err) {
          reject(err);
        } else if (result === "y" || result === "yes") {
          resolve();
        } else if (result === "n" || result === "no") {
          reject(new Error("confirmation rejected"));
        } else {
          pormptConfirmation();
        }
      });
    }
    pormptConfirmation();
  })
}

module.exports = {
  confirmation,
  password,
}