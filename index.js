const Commando = require('discord.js-commando');
const PREFIX = '-'
var prank = 0
var prankuser = undefined
require('events').EventEmitter.prototype._maxListeners = 100;
// black mirror stuff starts at line 158 for editing
//     _                         _     _  ______ ___  
//    | |                       | |   | ||____  / _ \ 
// ___| |__   __ _ _   _ _ __   | |__ | |_   / / (_) |
/// __| '_ \ / _` | | | | '_ \  | '_ \| __| / / > _ < 
//\__ \ | | | (_| | |_| | | | | | |_) | |_ / / | (_) |
//|___/_| |_|\__,_|\__,_|_| |_| |_.__/ \__/_/   \___/

const bot = new Commando.Client({
    commandPrefix: (PREFIX) ,
    unknownCommandResponse: false,
    owner: '152468253501947904' 
});
const TOKEN = TOKEN2
var known = 1

bot.on('ready', () => {
    console.log('epic tiem, ya boi is running');
    var channel = bot.channels.get('546733275230634005');
    channel.send("oof i crashed be back up in 10 sec");
});

bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel
  
  
    if(oldUserChannel === undefined && newUserChannel !== undefined) {
        if(prank == 1){
        if (newMember.id == prankuser.id) {
            const chan = bot.channels.get('586529537223950336')
            newMember.setVoiceChannel(chan)
            }
        }
  
    } else if(oldUserChannel !== undefined && newUserChannel !== undefined){
        if(prank == 1){
        if (newMember.id == prankuser.id) {
            const chan = bot.channels.get('586529537223950336')
            newMember.setVoiceChannel(chan)
            }
        }

    } else if (newUserChannel === null) {
    }
  })

bot.registry.registerGroup('main', 'main');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.login(TOKEN);

bot.on('ready', () => {
    bot.user.setStatus('available') // 'available', 'idle', 'dnd', or 'invisible'
    bot.user.setPresence({
        game: {
            name: 'Norbet Cleto Podcast',
            type: 2
        }
    });
});

bot.on('message', function(message){
    if(message.content.toLowerCase() == 'am i Ray?'.toLowerCase())
    {
        let percId = message.author.id.substr(2, 2);
        message.channel.send('Well ' + message.author + `, Tests confirm you are ${percId}% Ray!`)
    }
});

bot.on('message', function(message){
    if(message.content.toLowerCase().startsWith('is'.toLowerCase() ))
    {
        if(message.content.toLowerCase().includes('Ray'.toLowerCase() )) {
        let targetUser = message.guild.member(message.mentions.users.first());
        if(!targetUser){
            message.channel.send("does that person even exist?"); 
        }
        else {
            let percId = targetUser.id.substr(2, 2);
            message.channel.send('Well ' + message.author + `, Tests confirm ${targetUser} is ${percId}% Ray!`)
        }
    }
}
}
);

bot.on('message', function(message){
    if(message.content.toLowerCase().startsWith('is'.toLowerCase() ))
    {
        if(message.content.toLowerCase().includes('Neat?'.toLowerCase() )) {
        let targetUser = message.guild.member(message.mentions.users.first());
        if(!targetUser){
            message.channel.send("does that person even exist?"); 
        }
        else {
            let austId = targetUser.id.substr(4, 2);
            message.channel.send('Well ' + message.author + `, Tests confirm ${targetUser} is ${austId}% Neat!`)
        }
    }
}
}
);
/*bot.on('message', function(message){
    if(message.content.toLowerCase().startsWith('im'.toLowerCase() ))
    {
        message.channel.send("hi" + message.content.replace("im", "") + ", im The Raydar™.");  
    }
}
);

bot.on('message', function(message){
    if(message.content.toLowerCase().startsWith("i'm".toLowerCase() ))
    {
        message.channel.send("hi" + message.content.replace("i'm", "") + ", im The Raydar™.");  
    }
}
);

bot.on('message', function(message){
    if(message.content.toLowerCase().startsWith("l'm".toLowerCase() ))
    {
        message.channel.send("hi" + message.content.replace("l'm", "") + ", im The Raydar™.");  
    }
}
);
*/

bot.on('message', function(message){
    if(message.content.toLowerCase() == 'am i Neat?'.toLowerCase())
    {
        let austId = message.author.id.substr(4, 2);
        message.channel.send('Well ' + message.author + `, Tests confirm you are ${austId}% Neat!`)
    }
});

bot.on('message', function(message){
    if(message.content == 'no u')
    {
        message.channel.send("get rekt, lol", {
            file: "https://i.imgur.com/CSuB3ZW.png"
        });
    }
});

bot.on('message', function(message){
    if(message.content == 'is finn Ray?')
    {
        message.channel.send('Hell yeah, <@151766793864609792> is super Ray', );
    }
});

bot.on('message', function(message){
    if(message.content.toLowerCase().includes('hows the weather'.toLocaleLowerCase()))
    {
        message.channel.send('WEATHERS NICE.', );
    }
});

bot.on('message', function(message){
    if(message.content.toLowerCase().includes("how's the weather".toLocaleLowerCase()))
    {
        message.channel.send('WEATHERS NICE.', );
    }
});

bot.on('message', function(message){
    if(message.content == 'is shaun Ray?')
    {
        message.channel.send('Hell no, <@152468253501947904>  is really cool, and overall just seems like a nice guy yknow?', );
    }
});

bot.on('message', function(message){
    if(message.content == 'is triss Ray?')
    {
        message.channel.send('that sweedish guy, <@192647243524734976> is very cool :() ', );
    }
});

bot.on('message', function(message){
    if(message.content == 'is owain Ray?')
    {
        message.channel.send('um, this nibba <@153925350655655937> hella Ray.', );
    }
});

bot.on('message', function(message){
    if(message.content == 'how can i make everyone hate me?')
    {
        message.channel.send('how about i dust off ye olde @everyone?', );
    }
});

 //Black mirror thing from herhe

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('info'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('ncoin'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('nonce'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('heist'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('ping'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('trade'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('disable'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('enable'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('bank'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('admin'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('prank'.toLowerCase())){
            if (message.author.id == ('152468253501947904')) {
            if(prank == 0){

                prank = 1 
                prankuser = message.guild.member(message.mentions.users.first());
                message.channel.send(`prank enabled for ${prankuser}`);
            }
                else {
                    message.channel.send("prank disabled");
                    prank = 0  
                } 
        }
        }
    }
}
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('send'.toLowerCase())){
            if (message.author.id == ('152468253501947904')) {
                    let messagegot = message.content.substring(6);
                    bot.channels.get('361924480068747266').send("", {files: [messagegot]})
        }
        }
    }
}
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('gn'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('rem'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('nword'.toLowerCase())){
            known = 1

        }
        }
        else {
           known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('server'.toLowerCase())){
            known = 1

        }
        }
        else {
           known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('roll'.toLowerCase())){
            known = 1

        }
        }
        else {
           known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('invite'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('penis'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('prank'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('more'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);


bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('win'.toLowerCase())){
            known = 1
        }
        }
        else {
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('crosshair'.toLowerCase())){
            known = 1
        }
        }
        else{
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('belle'.toLowerCase())){
            known = 1
        }
        }
        else{
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('cat'.toLowerCase())){
            known = 1
        }
        }
        else{
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('team'.toLowerCase())){
            known = 1
        }
        }
        else{
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('timer'.toLowerCase())){
            known = 1
        }
        }
        else{
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(message.content.toLowerCase().includes('p'.toLowerCase())){
            known = 1
        }
        }
        else{
            known = 0
        }
    }
);

bot.on('message', function(message){
    if(message.content.startsWith ('-') )
    {
        if(known == 0){
            message.channel.send("I havn't programmed that path yet", {
             file: "https://i.kym-cdn.com/entries/icons/mobile/000/028/173/cover2.jpg"
            });
        }
        }
    }
);

bot.on('message', function(message){
    if(message.content.includes ('@everyone') )
    {
        message.channel.send("uh owe carl is gonna be vewy angry OwO", {
        });
    }
});