const {MessageAttachment, Interaction, MessageEmbed} = require("discord.js");


module.exports = {
    name: 'monke',
    description: "That's a command displaying a random brazilian citizen",
    execute(message, args, monkes){
        if (args[0] === "help" ) {
            message.channel.send(this.description);
        }
        else if (args[0] === "meme" ) {
            message.channel.send({content:"Monkeeee", files:["./monke/b7e6b9980cdf2bfd5e79f1bcde756cef.jpg"]});
        }
        else {
            rand = Math.floor(Math.random()*monkes.length)
            address = monkes[rand];

            const Embed = new MessageEmbed()
            .setColor('#A6EB60')
            .setImage(`attachment://${address}`)
            .setTitle('That is your monke')

            message.channel.send({ embeds: [Embed], files:[`./monke/${address}`]});
        }
    }
}