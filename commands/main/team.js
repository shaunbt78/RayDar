const commando = require('discord.js-commando');
const discord = require('discord.js');

class teamCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'team',
            group: 'main',
            memberName: 'team',
            description: 'sort by teams'
        });
    }

    async run(message, args){
            let targetUser = message.author.username
            let origtext = message.content.substring(6);
            let splittext = origtext.split(" ");
                function createTeams(names) {
                var team1 = [],
                    n;
                for (var i = 0, len = Math.floor(names.length / 2); i < len; i++) {
                    n = Math.floor(Math.random() * names.length);
                    team1.push(names[n]);
                    names.splice(n, 1);
                }
                return {
                    'team1': team1,
                        'team2': names
                };
            }
            var teams = createTeams(splittext),
        team1 = teams.team1,
        team2 = teams.team2;
        if(!origtext){
            message.channel.send(`no`);
        }
        else{
            let teamEmbed = new discord.RichEmbed()
            .setTitle("Shinntec Team Generator™")
            .addField("Team 1 is:", `${team1}`)
            .addField("Team 2 is:", `${team2}`)
            .setThumbnail('https://imgflip.com/s/meme/Grandma-Finds-The-Internet.jpg')
            .setColor(0xff00cb)
        message.channel.send(teamEmbed)
        };
    }
}

module.exports = teamCommand;