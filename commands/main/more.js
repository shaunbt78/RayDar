const commando = require('discord.js-commando');
const discord = require('discord.js');

class MoreCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'more',
            group: 'main',
            memberName: 'more',
            description: 'more coins'
        });
    }

    async run(message, args){
        var Morecoin = new discord.RichEmbed()
        .setTitle("Need more NCoin™?")
        .setDescription("1 NCoin = £1")
        .setColor(0xf46542)
        .setURL("https://www.paypal.me/shaunbt78")
        .setThumbnail('https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/silver-proof-in-capsule/gbch-silver-n.jpg')
        .setFooter("please gamble. play it. win already.")

        message.channel.sendEmbed(Morecoin);
    }
}

module.exports = MoreCommand;