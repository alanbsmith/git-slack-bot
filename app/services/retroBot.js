const SlackBot = require('slackbots');

const bot = new SlackBot({
  token: process.env.BOT_TOKEN,
  name: process.env.BOT_NAME
});

const RetroBot = {
  postToChannel: (channelName, message) => {
    bot.postMessageToChannel(channelName, message);
  },
  postToUser: (userName, message) => {
    bot.postMessageToUser(userName, message);
  }
};

module.exports = RetroBot;
