const commando = require('discord.js-commando')

class CalcCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'calc',
            group: 'main',
            memberName: 'calc',
            description: 'its a calculator what more do you want?'
        });
    }

    async run(message, args){
        let targetUser = message.author.username
        let calcammount = message.content.substring(6);
        let numb1 = calcammount.substring(0, 1);
        let numb2 = calcammount.substring(3);
        let operator = calcammount.substring(1, 3);
        let resultz = 0
    if(!calcammount){
        message.channel.send(`you need to pick a number`);
    }
    else{
        if(operator = "+") {
            resultz = numb1 + numb2
        }
        if(operator = "-") {
            resultz = numb1 - numb2
        }
        let rollEmbed = new discord.RichEmbed()
        .setTitle(targetUser + "'s " + " fun calculation")
        .setDescription(`you rolled a ${resultz}!`)
        .setThumbnail('https://previews.123rf.com/images/luislouro/luislouro1210/luislouro121000048/15785519-man-in-a-suit-playing-dice-isolated-in-white.jpg')
        .setColor(0xf45342)
    message.channel.send(rollEmbed)
    }
}
}

module.exports = CalcCommand;