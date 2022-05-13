const { MessageEmbed } = require('discord.js');
const translate = require('@vitalets/google-translate-api');



module.exports = {
    name: 'translate',
    description: "That's a translating command\nFirst argument should be the target language\n",
    async execute(message, args){
        if (args[0] === "help" ) {
            message.channel.send(this.description);
        }
        else {
            const target = args[0];
            args.shift(); 
            const text = args.join(' ');


            translate(text, {to: target}).then(res => { 
                const Embed = new MessageEmbed()
                .setColor('#FF6947')
                .setTitle(`${res.text}`)

                message.channel.send({ embeds: [Embed] });
            }).catch(err => {
                const Embed = new MessageEmbed()
                .setColor('#FF6947')
                .setTitle(`${err}`)

                message.channel.send({ embeds: [Embed] });
            });
        }
    }
}