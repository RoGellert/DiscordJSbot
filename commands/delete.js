const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'delete',
    description: "Deletes a specific role from people",
    async execute(message, guild, args){
        if (args[0] === "help") {
            message.channel.send(this.description);
        }
        else {
            const server_members = await guild.members.fetch();
            const memberIDs = server_members.map((server_members) => server_members.id);

            let role = guild.roles.cache.find(role => role.name === args[0]);
            for(i in memberIDs) {
                let user = await guild.members.fetch(memberIDs[i]);
                user.roles.remove(role);
            }
        }
    }
}

