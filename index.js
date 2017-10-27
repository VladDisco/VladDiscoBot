const Discord = require("discord.js")

const Token = "bot token"

var bot = new Discord.Client();

bot.on("ready", function()  {
    console.log("I'am ready!");
});

bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "hello") {
        message.channel.sendMessage("Hi, there!")
    }
});

bot.login(Token);