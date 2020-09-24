const commando = require('discord.js-commando');
const ncoin = require("../../ncoin.json");
const fs = require("fs");
const talkedRecently = new Set();

class NcoinCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'ncoin',
            group: 'main',
            memberName: 'ncoin',
            description: 'gives you 5 ncoins'
        });
    }

    async run(message, args){
     
        if (talkedRecently.has(message.author.id)) {
            message.channel.send("dude you can only claim benefits every 12 hours, " + message.author);
    } else {
        if(!ncoin[message.author.id]){
            ncoin[message.author.id] = {
                rep: 0
            };
        }
        ncoin[message.author.id].rep = ncoin[message.author.id].rep + 5;
        message.channel.send("5 NCoins™ added to your account!")
        fs.writeFile("ncoin.json", JSON.stringify(ncoin), (err) =>{
            if(err){
                console.log(err);
            }
        });
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 12 hardcore hours
          talkedRecently.delete(message.author.id);
        }, 3600000);
    }
    }
}

module.exports = NcoinCommand;