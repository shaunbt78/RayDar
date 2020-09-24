const commando = require('discord.js-commando')

class InviteCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'invite',
            group: 'main',
            memberName: 'invite',
            description: 'generate a bot invite link'
        });
    }

    async run(message, args){
        message.channel.send('Here you go: https://discordapp.com/oauth2/authorize?client_id=544642353764237323&scope=bot&permissions=1')
    }
}

module.exports = InviteCommand;