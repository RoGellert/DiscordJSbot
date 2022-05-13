const { MessageEmbed } = require('discord.js');

const ytdl = require('ytdl-core')
const ytSearch = require('yt-search')

const queue = new Map();


module.exports = {
    name: 'play',
    description: "That's a command playing the bloody music\nOptions:\nNone so far",
    aliases: ['skip', 'stop'],
    cooldown: 0,
    async execute(message, args){
        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send("Get into the voice channel or no bloody music for you, son");
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send("Nah no music for ya");
        if (!permissions.has('SPEAK')) return message.channel.send("Nah no music for ya");


        if (!args.length) return message.channel.send("Can I please get a link or something?");
        let song = {};

        if (ytdl.validateURL(args[0])){
            const song_info = await ytdl.getInfo(args[0]);
            song = {title: song_info.videoDetails.title, url: song_info.videoDetails.url}
        } else {
            const video_finder = async (query) => {
                const videoResult = await ytSearch(query);
                return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
            }

            const video = await video_finder(args.join(' '));
            if (video){
                song = {title: video.title, url: video.url}
            } else {
                message.channel.send("NO MUSIC");
            }
        }

        if (!server_queue) {
            const queue_constructor = {
                voice_channel: voice_channel,
                text_channel: message.channel,
                connection: null,
                songs: []
            }


        }

    }
}