const Discord = require("discord.js")

const Token = "MzczNDg5ODYwMDc5Nzc5ODQw.DNTfHA.t7S0vly5zjx4m5LwTGw5rEAJ4xU"

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