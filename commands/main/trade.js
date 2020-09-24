const commando = require('discord.js-commando');
const ncoin = require("../../ncoin.json");
const fs = require("fs");

class tradeCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'trade',
            group: 'main',
            memberName: 'trade',
            description: 'swap ncoins'
        });
    }

    async run(message, args){
        if(!ncoin[message.author.id]){
            ncoin[message.author.id] = {
                rep: 0
            };
        }
        let targetfirst = message.guild.member(message.mentions.users.first());
        if(!ncoin[targetfirst]){
            ncoin[targetfirst] = {
                rep: 0
            };
        }
        let targetUser = message.guild.member(message.mentions.users.first());
        var ammounttext = message.content.replace('-trade', '')
        var ammountclean = ammounttext.replace((targetUser), '')
        var ammount = parseInt(ammountclean, 10);
        if(!targetUser){
            message.channel.send("does that person even exist?"); 
        }
        else {
        if(ammount > 0) {
        if(ncoin[message.author.id].rep >= (ammount)) {
            ncoin[targetUser.id].rep = ncoin[targetUser.id].rep + (ammount);
        ncoin[message.author.id].rep = ncoin[message.author.id].rep - (ammount);
        message.channel.send(`${ammount} traded to ${targetUser}'s account!`);
        }
        else{
        message.channel.send(`i would but you're broke, ${message.author}`)    
    }
}else{message.channel.send(`${message.author} fuck off.`)
};
}
        fs.writeFile("ncoin.json", JSON.stringify(ncoin), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
    }

module.exports = tradeCommand;