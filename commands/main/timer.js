const commando = require('discord.js-commando')

class TimerCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'timer',
            group: 'main',
            memberName: 'timer',
            description: 'generate a bot invite link'
        });
    }

    async run(message, args){
        let targetUser = message.author.username
        var ammounttext = message.content.replace('-timer', '')
        var ammountclean = ammounttext.replace((targetUser), '')
        var ammount = parseInt(ammountclean, 10);
        var ammountcalc = ammount*1000
        var timeframe = "seconds!"
        if(message.content.toLowerCase().includes('minute'.toLowerCase())){
            ammountcalc = ammountcalc*60
            timeframe = "minute/minutes!"
        }
        if(message.content.toLowerCase().includes('min'.toLowerCase())){
            ammountcalc = ammountcalc*60
            timeframe = "minute/minutes!"
        }
        if(message.content.toLowerCase().includes('hour'.toLowerCase())){
            ammountcalc = ammountcalc*3600
            timeframe = "hour/hours!"
        }
        if(message.content.toLowerCase().includes('day'.toLowerCase())){
            ammountcalc = ammountcalc*86400
            timeframe = "day/days!"
        }
        if(message.content.toLowerCase().includes('week'.toLowerCase())){
            ammountcalc = ammountcalc*604800
            timeframe = "week/weeks!"
        }
        message.channel.send(`ok, ${message.author}, setting timer for ${ammount} ${timeframe}`)
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send(`Timer is Done, ${message.author}`)
            .catch(console.error); // add error handling here
            clearInterval(interval);
        }, 1 * ammountcalc);
    }
}

module.exports = TimerCommand;