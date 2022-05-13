const im = require('imagemagick');

const { MessageEmbed } = require('discord.js');

function RANDOM(array) {
    return array[Math.floor(Math.random()*array.length)]
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


module.exports = {
    name: 'sun_tzu',
    description: "This is a command producing a random wise chinese proverb",
    execute(message, args, words_map){
        if (args[0] === "help" ) {
            message.channel.send(this.description);
        }
        else {
            const animals = words_map.get("animal.txt")
            const adj_living_er = words_map.get("adj living er.txt")
            const adj_living = words_map.get("adj living.txt")
            const adj_passive_er = words_map.get("adj passive er.txt")
            const adj_passive = words_map.get("adj passive.txt")
            const event = words_map.get("event.txt")
            const nature = words_map.get("nature.txt")
            const number = words_map.get("number.txt")
            const person = words_map.get("person.txt")
            const thing = words_map.get("thing.txt")
            const time = words_map.get("time.txt")
            const verb_inf = words_map.get("verb inf.txt")
            const verb_ing = words_map.get("verb ing.txt")
            const verb_s = words_map.get("verb s.txt")
            
            proverb_type = getRandomInt(0, 6);

            const Embed = new MessageEmbed()
            .setColor('#000000')
            .setImage('attachment://sun-tzu-statue.jpg')

            switch (proverb_type) {
                case 0:
                    Embed.setTitle(`${"There is no "+RANDOM(event)+" without the "+RANDOM(event)}`);

                    message.channel.send({ embeds: [Embed] , files: ['sun_tzus/sun-tzu-statue.jpg'] });
                    break;
                case 1:
                    Embed.setTitle(`${"A single"+' '+RANDOM(animals)+" can "+RANDOM(verb_inf)+" more than "+RANDOM(number)+' '+RANDOM(animals)}`);

                    message.channel.send({ embeds: [Embed] , files: ['sun_tzus/sun-tzu-statue.jpg']});
                    break;
                case 2:
                    Embed.setTitle(`${"The "+RANDOM(adj_living)+' '+RANDOM(animals)
                    +" is "+RANDOM(adj_living_er)+" than the "+RANDOM(adj_living)+' '+RANDOM(animals)}`);

                    message.channel.send({ embeds: [Embed] , files: ['sun_tzus/sun-tzu-statue.jpg']});
                    break;
                case 3:
                    Embed.setTitle(`${"One cannot teach the "+RANDOM(adj_living)+' '
                    +RANDOM(person)+" how to "+RANDOM(verb_inf)+" the "+RANDOM(event)}`);

                    message.channel.send({ embeds: [Embed] , files: ['sun_tzus/sun-tzu-statue.jpg']});
                    break;
                case 4:
                    Embed.setTitle(`${"The "+RANDOM(adj_living)+' '+RANDOM(animals)+' '+RANDOM(verb_s)+" the "+RANDOM(adj_passive)+' '+RANDOM(thing)}`);
                    
                    message.channel.send({ embeds: [Embed] , files: ['sun_tzus/sun-tzu-statue.jpg']});
                    break;
                case 5:
                    Embed.setTitle(`${"The "+RANDOM(person)+" who "+RANDOM(verb_s)+" the "+RANDOM(adj_living)+' '
                    +RANDOM(animals)+" must truly be "+RANDOM(adj_living)}`);

                    message.channel.send({ embeds: [Embed] , files: ['sun_tzus/sun-tzu-statue.jpg']});
                    break;
            }
        }
    }
 }