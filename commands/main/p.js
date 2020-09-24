const commando = require('discord.js-commando')

class InviteCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'p',
            group: 'main',
            memberName: 'p',
            description: 'play?'
        });
    }

    async run(message, args){
        message.channel.send("Goddamn kids these days! Use **?p** not that prefix jeeeeeeez", {
            file: "https://vigilantminds.ca/wp-content/uploads/2019/02/old-man.jpg"
           });
    }
}

module.exports = InviteCommand;