const commando = require('discord.js-commando');
const ncoin = require("../../ncoin.json");
const fs = require("fs");

class AdminCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'admin',
            group: 'main',
            memberName: 'admin',
            description: 'old'
        });
    }

    async run(message, args){
        
        if (message.author.id == ('152468253501947904')) {
            let targetfirst = message.guild.member(message.mentions.users.first());
        if(!ncoin[targetfirst.id]){
            ncoin[targetfirst.id] = {
                rep: 0
            };
        }

        let targetUser = message.guild.member(message.mentions.users.first());
        var ammounttext = message.content.replace('-admin', '')
        var ammountclean = ammounttext.replace((targetUser), '')
        var ammount = parseInt(ammountclean, 10);
        if(!targetUser){
            message.channel.send("does that person even exist?"); 
        }
        else {
        ncoin[targetUser.id].rep = ncoin[targetUser.id].rep + (ammount);
        message.channel.send(`${ammount} added to ${targetUser}'s account!`)
        fs.writeFile("ncoin.json", JSON.stringify(ncoin), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
    }
    else{
        message.channel.send("You do not have the required role.");   
    }
}
}

module.exports = AdminCommand;