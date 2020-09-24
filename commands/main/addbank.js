const commando = require('discord.js-commando');
const ncoin = require("../../ncoin.json");
const fs = require("fs");
const bank = 696969

class AdminCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'addbank',
            group: 'main',
            memberName: 'addbank',
            description: 'old'
        });
    }

    async run(message, args){
        
        if (message.author.id == ('152468253501947904')) {
        if(!ncoin[bank]){
            ncoin[bank] = {
                rep: 0
            };
        }
    
        var ammountclean = message.content.replace('-addbank', '')
        var ammount = parseInt(ammountclean, 10);
        ncoin[bank].rep = ncoin[bank].rep + (ammount);
        message.channel.send(`${ammount} added to the global bank account!`)
        fs.writeFile("ncoin.json", JSON.stringify(ncoin), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
    else{
        message.channel.send("You do not have the required role.");   
    };
}
}

module.exports = AdminCommand;