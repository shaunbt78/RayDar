const commando = require('discord.js-commando')
const request = require('request')


class SkiCommand extends commando.Command{

    constructor(client){
        super(client, {
            name: 'cat',
            group: 'main',
            memberName: 'cat',
            description: 'random cat image, idk'
        });
    }

    async run(message, args){
        request.get('http://thecatapi.com/api/images/get?format=src&type=png', {

        }, function(error, response, body) {
            if(!error && response.statusCode == 200) {
                message.channel.send(response.request.uri.href);
            } else {
                message.channel.send('oof');
            }
        })    
    }
}

module.exports = SkiCommand;
