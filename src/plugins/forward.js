const { isListening, sendMessageByConfig } = require("../../lib/message");

function forward(msg) {
  const config = global.el.config;

  config.forward.forEach((item) => {
    let canForward = isListening(msg.sender, item.listen);

    if (canForward) {
      sendMessageByConfig(msg.messageChain, item.target);
    }
  });
}

module.exports = {
  forward,
};