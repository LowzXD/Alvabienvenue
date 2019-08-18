const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";

client.login("NjEyNDM3MjQwMTY5MjM0NDQz.XViWyg.QV_vipg7vfhqBde0ssJt4jh0xvw")

client.on("guildMemberAdd", user => {
    user.guild.channels.get("605736278985801728").send("**Bienvenue " + user +"** **dans l'équipe frerot ! :cool:**")
    user.addRole("&606060711080362024")
});

client.on("guildMemberRemove", user => {
    user.guild.channels.get("605736278985801728").send("**Ciao" + user +"** **tfacon on t'aimé pas sale batard**")
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "hello"){
        message.channel.send("Bonjour ptit zizi ! " + message.author.username + " !")
    }
});
