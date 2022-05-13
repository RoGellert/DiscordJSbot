const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'hujlio_banderas',
    description: "That's a command producing a random swear phrase/word in portuguese. \nAuthor of phrases/words: Pedro Hennig®. \nAuthor of the script prefers to stay anonymous",
    execute(message, args){
        if (args[0] === "help" ) {
            message.channel.send(this.description);
        }
        else {
            const things = ['buceta', 'foda-se', 'caralho', 'puta que pariu','Vadia','Putona','Putinha',
            'Vadia do sexo', 'Broxa','Retardado', 'merda', 'puta de merda', 'Corno', 'Bucetinha', 'Bostao', 'Vai tomar no cu', 'Vai te fuder',
            'Vai chupar teu pai', 'Cu', 'Porra', 'Cretino', 'Talarico', 'Talarica', 'Monte de merda', 'Capeta, Fodido', 'Saco de bosta', 'Saco de lixo', 'Metralhadora de bosta', 'Debiloide', 
            'Tua mãe é uma cadela', 'Tua mae é uma cachorra' , 'Teu pai é uma puta', 'Cala boca seu broxa','Debimental', 'Vadia suja'];
            const thing = things[Math.floor(Math.random()*things.length)];

            const Embed = new MessageEmbed()
            .setColor('#EB7402')
            .setTitle(`${thing}`)
        
            message.channel.send({ embeds: [Embed] });
        }
    }
}