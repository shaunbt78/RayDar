const commando = require('discord.js-commando')

class gnCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'win',
            group: 'main',
            memberName: 'win',
            description: 'u win'
        });
    }

    async run(message, args){
        if (message.author.id == ('152468253501947904')) {
            message.channel.send(`setting ` +message.author+ `'s instawin state to: 1!`)
        }else{   
        message.channel.send('https://cdn.discordapp.com/attachments/344910124143345664/546110273241743391/SPOILER_unknown.png')
        }
    }
}

module.exports = gnCommand;