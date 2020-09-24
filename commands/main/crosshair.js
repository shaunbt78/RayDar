const commando = require('discord.js-commando')

class crossCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'crosshair',
            group: 'main',
            memberName: 'crosshair',
            description: 'randomised'
        });
    }

    async run(message, args){
        var drawoutline = Math.floor((Math.random() * 1) + 0);
        var alpha = Math.floor((Math.random() * 255) + 0);
        var colb = Math.floor((Math.random() * 255) + 0);
        var colr = Math.floor((Math.random() * 255) + 0);
        var colg = Math.floor((Math.random() * 255) + 0);
        var dot = Math.floor((Math.random() * 1) + 0);
        var gap = Math.floor((Math.random() * 100) + -100);
        var size = Math.floor((Math.random() * 100) + 0);
        var style = Math.floor((Math.random() * 4) + 3);
        var thick = Math.floor((Math.random() * 100) + 0);
        var dout = Math.floor((Math.random() * 3) + 0);
        message.channel.send(`cl_crosshairalpha "${alpha}";cl_crosshaircolor "5";cl_crosshaircolor_b "${colb}";cl_crosshaircolor_r "${colr}";cl_crosshaircolor_g "${colg}";cl_crosshairdot "${dot}";cl_crosshairgap "${gap}";cl_crosshairsize "${size}";cl_crosshairstyle "${style}";cl_crosshairusealpha "1";cl_crosshairthickness "${thick}";cl_fixedcrosshairgap "${gap}";cl_crosshair_outlinethickness "${dout}";cl_crosshair_drawoutline "${drawoutline}"`)
    }
}

module.exports = crossCommand;