const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES,  Discord.Intents.FLAGS.GUILD_MEMBERS]
});

const prefix = '$';
const ServerID = "750736507383447642";


//reading the folder with word lists for generating the random proverbs in sun tzu command 
//(also mapping filename with array of words for simplicity of adding new lists and removing unwanted symbols from words in array)
const words_map = new Map();
const words = fs.readdirSync('./words/').filter(file => file.endsWith('.txt'));
for(const file of words) {
    const words_array = fs.readFileSync(`./words/${file}`).toString().split("\n");
    for(i in words_array) {
        words_array[i] = words_array[i].replace(/(\r\n|\n|\r)/gm, "");;
    }

    words_map.set(`${file}`, words_array);
}


//reading the monkey jpg folder addresses to then randomly output them in monke command
const monkes = fs.readdirSync('./monke/').filter(file => file.endsWith('.jpg'));


//reading the command folder addresses to execute the required one via mapping the address of the folder 
//command to the name of the command
client.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.command.set(command.name, command);
}


client.once('ready', () => {
    console.log('Leno Brega is reporting for duty!');
})


client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hujlio_banderas'){
        client.command.get('hujlio_banderas').execute(message, args);
    }
    else if(command === 'sun_tzu'){
        client.command.get('sun_tzu').execute(message, args, words_map);
    }
    else if(command === 'monke'){
        client.command.get('monke').execute(message, args, monkes);
    }
    else if(command === 'play'){
        client.command.get('play').execute(message, args);
    }
    else if(command === 'translate'){
        client.command.get('translate').execute(message, args);
    }
    else if(command === 'assign'){ 
        const guild = client.guilds.cache.get(ServerID);
        client.command.get('assign').execute(message, guild, args);
    }
    else if(command === 'delete'){ 
        const guild = client.guilds.cache.get(ServerID);
        client.command.get('delete').execute(message, guild, args);
    }
});








































client.login('OTE3ODIwNTE4MjIzMjAwMjY2.Ya-Q9w.NFnS6oOEcHoUu6El2pmK_TxmR0o');
