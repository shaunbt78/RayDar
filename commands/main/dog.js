const commando = require('discord.js-commando')
const request = require('request')


class SkiCommand extends commando.Command{

    constructor(client){
        super(client, {
            name: 'dog',
            group: 'main',
            memberName: 'dog',
            description: 'random dog image, idk'
        });
    }

    async run(message, args){
        message.channel.send("I am back, and more powerful than you could ever imagine >:D", {
            file: "https://previews.123rf.com/images/sevalv/sevalv1809/sevalv180900869/108094489-guy-rubbing-palms-having-nasty-evil-plan-intrigued-funny-african-american-man-in-olive-t-shirt-holdi.jpg"});
    }
}

module.exports = SkiCommand;
