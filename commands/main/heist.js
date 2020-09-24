const commando = require('discord.js-commando')
const fs = require("fs")
const ncoin = require("../../ncoin.json");
const bank = 696969

class NWordCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'heist',
            group: 'main',
            memberName: 'heist',
            description: 'It might say the N Word.'
        });
    }

    async run(message, args){

            if(!ncoin[message.author.id]){
            ncoin[message.author.id] = {
                rep: 0
            };
        }

        if(!ncoin[bank]){
            ncoin[bank] = {
                rep: 0
            };
        }
        
        if(ncoin[message.author.id].rep >= 1){
            let bankbal = (ncoin[bank].rep);
            var chance = Math.floor((Math.random() * 100) + 1);
            if(chance <= (3)){
        message.channel.send("JACKPOT!! you stole the main bank!", {
            file: "https://c8.alamy.com/comp/E20FD2/web-criminal-stoles-money-E20FD2.jpg"});
        ncoin[message.author.id].rep = ncoin[message.author.id].rep + (bankbal);
        ncoin[bank] = {
            rep: 0
        };
        }
        else{
            message.channel.send("Busted! you lost all ya NCoins™", {
            file: "https://st3.depositphotos.com/7480148/15566/i/1600/depositphotos_155664628-stock-photo-man-arrested-by-police-during.jpg"});
            ncoin[message.author.id] = {
                rep: 0
            };
        };
    }
    else{
        message.channel.send("u broke dude, not enough NCoins™")
    }
    fs.writeFile("ncoin.json", JSON.stringify(ncoin), (err) =>{
        if(err){
            console.log(err);
        }
    });
    }
};
module.exports = NWordCommand;