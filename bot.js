const discord = require("discord.js")
 
const token = "NDQ5OTQ0MTA0NzM1MDgwNDU4.DesCqw.oEGJZf-wneDPgC_AvRDTzEAos8s"
const prefix = "!"

var fortunes = [
     "yes",
     "no",
     "maybe",
     "hell no"
];

var bot = new discord.Client();

bot.on("ready",function() {
    console.log("ready");
});

bot.on("guildmemberadd", function(member) {
    member.guild.channels.find("name", "welcome").sendMessage(member.toString() + "WELCOME, Boi stay here and play games with friends");

});

bot.on("message",function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "hello") {
        message.channel.sendMessage("hi,there!");
     }
});

bot.on("message",function(message) {
    if (message.author.equals(bot.user)) return;
  
     if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0]){  
     case "ping":
         message.channel.sendMessage("pong!");
         break;
     case"whoareyou":
         message.channel.sendMessage("i am bad bitch");
         break;
         case"fortune":
          if (args[1])message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
          else message.channel.sendMessage("cant read that");
          break;
     case "embed":
     var embed = new discord.RichEmbed()
      .addField("about me", "i rage like my owner on being ignored and insulted", true)      
      .addField("owner", "AMAN#7699", true)
      .addField("version", "i am not fullied upgrade i am just a beta version more upgrades coming soon")
      .addField("invite", "https://discordapp.com/oauth2/authorize?client_id=449944104735080458&permissions=0&scope=bot")
      .addField("commands", "ping ,fortune (add something after writing fortune so it can tell you fortune) ,who are you embed and more coming soon")
      .addField("important", "add prefix before writing command")
      .setColor(0x00FFFF)
      .setFooter("this message is pretty cool, ohh did i say message i mean embed godddd damitttt")
      .setThumbnail(message.author.avatarURL)
 message.channel.sendEmbed(embed);
    break;
    default:
           message.channel.sendMessage("invalid command");
  }
});  

bot.login(token);

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
