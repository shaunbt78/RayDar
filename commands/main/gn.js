const commando = require('discord.js-commando')

class gnCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'gn',
            group: 'main',
            memberName: 'gn',
            description: 'gnot'
        });
    }

    async run(message, args){
        message.channel.send('||https://cdn.discordapp.com/attachments/344910124143345664/546110273241743391/SPOILER_unknown.png||')
    }
}

module.exports = gnCommand;