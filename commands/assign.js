const { MessageEmbed } = require('discord.js');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


module.exports = {
    name: 'assign',
    description: "Assigns a required role to people",
    async execute(message, guild, args){
        if (args[0] === "help" ) {
            message.channel.send(this.description);
        }
        else {
            const server_members = await guild.members.fetch();
            const memberIDs = server_members.map((server_members) => server_members.id);

            const role1 = guild.roles.cache.find(role => role.name === "testA");
            const role2 = guild.roles.cache.find(role => role.name === "testB");   
            const role3 = guild.roles.cache.find(role => role.name === "testC");
            const role4 = guild.roles.cache.find(role => role.name === "testD");

            var role_type = 0;
            let counter = 0;

            for(i in memberIDs) {
                role_type = getRandomInt(0, 4);
                let user = await guild.members.fetch(memberIDs[i]);

                switch (role_type) {
                    case 0:
                        user.roles.add(role1);
                        counter = counter+1;
                        console.log(counter);
                    break;
                    case 1:
                        user.roles.add(role2);
                        counter = counter+1;
                        console.log(counter);
                    break;
                    case 2:
                        user.roles.add(role3);
                        counter = counter+1;
                        console.log(counter);
                    break;
                    case 3:
                        user.roles.add(role4);
                        counter = counter+1;
                        console.log(counter);
                    break;
                }
            }
        }
    }
}




