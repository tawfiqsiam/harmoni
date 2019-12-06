const crying = ["https://media.tenor.com/images/d7286a667f4c7f5e3af2daf2ac3d9948/tenor.gif", "https://media.tenor.com/images/912b1a7081be6de58170218ea6e127d4/tenor.gif", "https://media2.giphy.com/media/8YutMatqkTfSE/giphy.gif?cid=790b76116b19e34ff99312b3b9f903ba7b6af5f2c1ed8c94&rid=giphy.gif", "https://media3.giphy.com/media/ROF8OQvDmxytW/giphy.gif?cid=790b7611d08044d461f40eb20975d6bb73899a71adb98417&rid=giphy.gif", "https://media1.giphy.com/media/11p9fT21o5xiWA/giphy.gif?cid=790b7611d3e90a808194cc22aa4a660ef7c08a09418cc327&rid=giphy.gif", "https://media1.giphy.com/media/yarJ7WfdKiAkE/giphy.gif?cid=790b7611f2c1ca84142218f360c934e63ea968b302c08f11&rid=giphy.gif", "https://media0.giphy.com/media/tCUhLEngnB1Ru/giphy.gif?cid=790b7611ff3d18b4208634a344a207f0cea7567ac4d455a1&rid=giphy.gif", "https://media2.giphy.com/media/NHTqyT68fOEsU/giphy.gif?cid=790b76119d49489bf269a657ffa6b6ba4e3f6e20829a11a2&rid=giphy.gif", "https://media2.giphy.com/media/8VB1I9YtdGBFu/giphy.gif?cid=790b761108bada6dea22f306938b8bc5e46e45e52bca1829&rid=giphy.gif", "https://media1.giphy.com/media/JVGrYMOOz2FNu/giphy.gif?cid=790b7611238cb7e7cc0e8241956d9ffa5825dffc75a3810e&rid=giphy.gif", "https://media3.giphy.com/media/4smXTnnqlS2ys/giphy.gif?cid=790b76118f3930db94c7e83e20eee557f8a905c721938c1a&rid=giphy.gif", "https://cdn.weeb.sh/images/HkxLXIQvb.gif", "https://cdn.weeb.sh/images/rknUmIXD-.gif", "https://cdn.weeb.sh/images/ByPGQIQwb.gif", "https://cdn.weeb.sh/images/Hk6EmLmDZ.gif", "https://cdn.weeb.sh/images/HyiGQUmPb.gif", "https://cdn.weeb.sh/images/rJUbkgqyf.gif", "https://cdn.weeb.sh/images/Hy4QmU7PZ.gif", "https://cdn.weeb.sh/images/S11LXImPZ.gif", "https://cdn.weeb.sh/images/BkoBX8mwW.gif", "https://cdn.weeb.sh/images/rJ5IX8XPZ.gif", "https://cdn.weeb.sh/images/ryap_aEC-.gif", "https://cdn.weeb.sh/images/B1Jg1eqJM.gif", "https://cdn.weeb.sh/images/Syzw78XPZ.gif", "https://cdn.weeb.sh/images/SkwVQLXwW.gif", "https://cdn.weeb.sh/images/HJIpry35M.gif", "https://cdn.weeb.sh/images/r1itBRFTZ.gif", "https://cdn.weeb.sh/images/r1itBRFTZ.gif", "https://cdn.weeb.sh/images/SJ-11x5kz.gif", "https://cdn.weeb.sh/images/SJRW7U7DZ.gif", "https://cdn.weeb.sh/images/Bk_fmL7wZ.gif", "https://cdn.weeb.sh/images/r1O8QUmvb.gif", "https://cdn.weeb.sh/images/HyO7mIXvW.gif", "https://cdn.weeb.sh/images/rkXImUQDW.gif", "https://cdn.weeb.sh/images/BJJPXLQPW.gif", "https://cdn.weeb.sh/images/ryVBX8mw-.gif", "https://cdn.weeb.sh/images/BJJkFTN0b.gif", "https://cdn.weeb.sh/images/S1qBm87Db.gif", "https://cdn.weeb.sh/images/r1WMmLQvW.gif", "https://cdn.weeb.sh/images/HyO7mIXvW.gif", "https://cdn.weeb.sh/images/Sk5a01cyf.gif", "https://cdn.weeb.sh/images/ryxKX7L7P-.gif"];
const superagent = require('superagent');
const slapping = ["Oww!", "That must have hurt!", "Do you need an icepack?...", "Owwiiieee!", "Are you okay?...", "Oh, no!... <:pandascared:635354895473573909>", "Anna oop-", "OOF!", "Oh, no! <:no_bully:635355398630539285>", "Oh... <:anime_sad:643257957500321803>"]
const isla = ["https://cdn.discordapp.com/attachments/624866315982864385/646555776219086849/image0-5.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646555776219086850/image0-1.png", "https://cdn.discordapp.com/attachments/624866315982864385/646555777296891904/image0.gif", "https://cdn.discordapp.com/attachments/624866315982864385/646555778232090644/image0-18.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646555778232090645/image0-14.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646555778819555338/image0-17.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646555778819555339/image0-19.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646555937984872463/20191102_134117.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646555937984872465/image0-2.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646555938722938891/image0-4.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646555939327180820/image0-3.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646555939327180821/image0-38.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646555940061052929/image0-31.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646555940061052930/image0-1.png", "https://cdn.discordapp.com/attachments/624866315982864385/646556147129647115/image0-35.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556147129647119/image0-29.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556147674775553/image0-11.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556148161576970/image0-21.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556148161576971/image0-24.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556148941586462/image0-16.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556148945780736/image0-25.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556261353127936/image0-33.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556261881479168/Screenshot_20191005-164311_Instagram.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556263089569812/image0-26.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556263089569812/image0-26.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556263089569813/image0-12.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556263764721704/image0-20.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556263764721708/image0-13.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556430668660736/image0-23.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556430668660737/image0-27.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556431184822282/image0-18.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556431780282393/Screenshot_20190914-182432_Instagram.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556715810160640/image0-10.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556715810160641/image0-7.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556716581781504/image0-8.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556717286686751/image0-5.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556717286686753/2019-08-29_17.39.04.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556718632796170/2019-08-29_17.40.15.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646556718632796171/image0-4.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646557035814715413/image0-3.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646557036355649536/image0-2.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646557036791726081/image0.jpg", "https://cdn.discordapp.com/attachments/624866315982864385/646557036791726083/image0-1.jpg", "https://media.discordapp.net/attachments/616428839425409026/646616042155671552/image0.jpg"]
const fetch = require('node-fetch');
let hugging = ["Can I have one?...", "Awww", "UwU", "two_hearts", "<:cuteuwu:623996171840520193>", "<:blushuwu:635351625527197698>", "I wanna join! Group hug?", "Aww, so sweet!", "heart:", "You all are so kind! Uwu"];
let kissing = ["So cute!", "Awww!", "I wish I had someone to kiss me ;o", "You two are too adorable :two_hearts:", "OwO :heart:", "So sweet! Awwww", "UwU", ":two_hearts:", ":kissing_heart:", "<:blushuwu:635351625527197698>", "<:cuteuwu:623996171840520193>"];
const fs = require('fs');
const ms = require('ms');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();


client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('for h!help', { type: 'WATCHING'}).catch(console.error);
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
    }
    else if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}`);
    }
    else if (command === 'hello') {
        message.channel.send('Hello!');
    }
    else if (command === 'love') {
        message.channel.send(`We love you! ${message.member.nickname}`);
    }
    else if (command === 'invite') {
        message.channel.send('https://discordapp.com/oauth2/authorize?client_id=650579081133555722&scope=bot&permissions=8');
    }
    
if (command === 'help'){
    const embed = new Discord.RichEmbed()
    .setTitle("**Invite Bot**")
    .setDescription("These are the list of commands for this bot!")
    .addField("Action Commands", "kiss, hug, cry, slap, punch, cuddle, poke, smile, tickle")
    .addField("Image Commands", "waifu, neko")
    .addField("Moderation Commands", "mute, ban, kick")
    .setURL('https://discordapp.com/oauth2/authorize?client_id=650579081133555722&scope=bot&permissions=8')
    .setThumbnail('https://cdn.discordapp.com/avatars/650579081133555722/f78466c1dbb0d03d6c2a961415172fad.webp?size=1024')
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(embed)
}

if (command === 'nsfwhelp'){
    if (!message.channel.nsfw) return message.channel.send("Please make sure the channel is marked NSFW before you use this command! UwU");
    const nsfwHelpEmbed = new Discord.RichEmbed()
    .setTitle("NSFW Help")
    .setDescription("These are the list of NSFW commands for this bot!")
    .addField("NSFW Commands", "spank, hentai, feet, avatar, anal, pussy, cum, trap, boobs, bj, les, gif")
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(nsfwHelpEmbed)
}

if (command === 'av'){
    const avEmbed = new Discord.RichEmbed()
    .setTitle(`${message.author.username}\`s Avatar`)
    .setImage(`${message.author.avatarURL}`)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(avEmbed)
}

if(command === "trigger") {
    let msg = await message.channel.send('Loading...')
    let target = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author;
    let profilepic = target.avatarURL;
    let url = `https://eclyssia-api.tk/api/v1/triggered?url=${profilepic}`
    await message.channel.send({
    files: [{
    attachment: url,
    name: `${target.tag}-Triggered.gif`
    }]
    })
    msg.delete()
    } 
    if(command === "gay") {
    let msg = await message.channel.send('Loading...')
    let target = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author;
    let profilepic = target.avatarURL;
    let url = `https://eclyssia-api.tk/api/v1/gay?url=${profilepic}`
    await message.channel.send({
    files: [{
    attachment: url,
    name: `${target.tag}-gay.gif`
    }]
    })
    msg.delete()
    }      
    if(command === "beautiful") {
    let msg = await message.channel.send('Loading...')
    let target = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author;
    let profilepic = target.avatarURL;
    let url = `https://eclyssia-api.tk/api/v1/beautiful?url=${profilepic}`
    await message.channel.send({
    files: [{
    attachment: url,
    name: `${target.tag}-beautiful.gif`
    }]
    })
    msg.delete()
    }        
    if(command === "treasure") {
    let msg = await message.channel.send('Loading...')
    let target = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author;
    let profilepic = target.avatarURL;
    let url = `https://eclyssia-api.tk/api/v1/treasure?url=${profilepic}`
    await message.channel.send({
    files: [{
    attachment: url,
    name: `${target.tag}-treasure.gif`
    }]
    })
    msg.delete()
    } 
    if(command === "prison") {
    let msg = await message.channel.send('Loading...')
    let target = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author;
    let profilepic = target.avatarURL;
    let url = `https://eclyssia-api.tk/api/v1/prison?url=${profilepic}`
    await message.channel.send({
    files: [{
    attachment: url,
    name: `${target.tag}-prison.gif`
    }]
    })
    msg.delete()
    }       
    if(command === "brazzers") {
    let msg = await message.channel.send('Loading...')
    let target = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author;
    let profilepic = target.avatarURL;
    let url = `https://eclyssia-api.tk/api/v1/brazzers?url=${profilepic}`
    await message.channel.send({
    files: [{
    attachment: url,
    name: `${target.tag}-brazzers.gif`
    }]
    })
    msg.delete()
    }      

if (command === 'cry'){
    const cEmbed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} is crying :pensive:`)
    .setImage(crying[Math.floor(Math.random()*crying.length)])
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(cEmbed)
}

if (command === 'kiss'){
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);
    const kissEmbed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} kissed ${message.mentions.users.first().username}! ` + kissing[Math.floor(Math.random()*kissing.length)])
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(kissEmbed)
}

if (command === 'hug'){
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);
    const hugEmbed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} hugged ${message.mentions.users.first().username}! ` + hugging[Math.floor(Math.random()*hugging.length)])
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(hugEmbed)
}

if (command === 'poke'){
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/poke`);
    const pokeEmbed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} poked ${message.mentions.users.first().username} <:hehe:635350297413156865>`)
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(pokeEmbed)
}

if (command === 'wallpaper'){
    if (!message.channel.nsfw) return message.channel.send("This command may contain NSFW. Please use it in a channel marked NSFW!");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/wallpaper`);
    const wallpaperEmbed = new Discord.RichEmbed()
    .setTitle(`Some cute wallpapers! UwU`)
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(wallpaperEmbed)
}

if (command === 'slap'){
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/slap`);
    const slapEmbed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} slapped ${message.mentions.users.first().username}! ` + slapping[Math.floor(Math.random()*slapping.length)])
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(slapEmbed)
}

if (command === 'cuddle'){
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/cuddle`);
    const cuddleEmbed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} cuddled ${message.mentions.users.first().username}`)
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(cuddleEmbed)
}

if (command === 'avatar'){
    if (!message.channel.nsfw) return message.channel.send("This command may contain NSFW. Please use it in a channel marked NSFW!");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/avatar`);
    const avatarEmbed = new Discord.RichEmbed()
    .setTitle('Some anime avatars! UwU')
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(avatarEmbed)
}

if (command === 'smile'){
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/smug`);
    const smileEmbed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} is happy! :blush:`)
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(smileEmbed)
}

if (command === 'neko'){
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/neko`);
    const nekoEmbed = new Discord.RichEmbed()
    .setTitle('Some cute nekos! UwU')
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(nekoEmbed)
}

if (command === 'waifu'){
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/waifu`);
    const waifuEmbed = new Discord.RichEmbed()
    .setTitle('Some waifu pictires! UwU')
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(waifuEmbed)
}

if (command === 'feed'){
    if (!message.channel.nsfw) return message.channel.send("Please make sure the channel is marked NSFW before you use this command! UwU");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/feed`);
    const feedEmbed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} fed ${message.mentions.users.first().username}. Yummy!`)
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(feedEmbed)
}

if (command === 'tickle'){
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/tickle`);
    const tickleEmbed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} tickled ${message.mentions.users.first().username}`)
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(tickleEmbed)
}

if (command === 'pat'){
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/pat`);
    const patEmbed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} pat ${message.mentions.users.first().username}`)
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(patEmbed)
}

if (command === 'cat') {
	const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

	message.channel.send(file);
}

if (command === 'hentai'){
    if (!message.channel.nsfw) return message.channel.send("Please make sure the channel is marked NSFW before you use this command! UwU");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hentai`);
    const lewdEmbed = new Discord.RichEmbed()
    .setTitle('Some hentai! OwO')
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(lewdEmbed)
}

if (command === 'anal'){
    if (!message.channel.nsfw) return message.channel.send("Please make sure the channel is marked NSFW before you use this command! UwU");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/anal`);
    const analEmbed = new Discord.RichEmbed()
    .setTitle('Some anal! OwO')
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(analEmbed)
}

if (command === 'bj'){
    if (!message.channel.nsfw) return message.channel.send("Please make sure the channel is marked NSFW before you use this command! UwU");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/blowjob`);
    const bjEmbed = new Discord.RichEmbed()
    .setTitle('Some blow job images! OwO')
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(bjEmbed)
}

if (command === 'lick'){
    if (!message.channel.nsfw) return message.channel.send("Please make sure the channel is marked NSFW before you use this command! UwU");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kuni`);
    const lickEmbed = new Discord.RichEmbed()
    .setTitle('Some pussy lick images! OwO')
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(lickEmbed)
}

if (command === 'pussy'){
    if (!message.channel.nsfw) return message.channel.send("Please make sure the channel is marked NSFW before you use this command! UwU");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/pussy`);
    const pussyEmbed = new Discord.RichEmbed()
    .setTitle('Some pussy images! OwO')
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(pussyEmbed)
}

if (command === 'boobs'){
    if (!message.channel.nsfw) return message.channel.send("Please make sure the channel is marked NSFW before you use this command! UwU");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/boobs`);
    const boobsEmbed = new Discord.RichEmbed()
    .setTitle('Some boobs! OwO')
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(boobsEmbed)
}

if (command === 'feet'){
    if (!message.channel.nsfw) return message.channel.send("Please make sure the channel is marked NSFW before you use this command! UwU");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/feet`);
    const feetEmbed = new Discord.RichEmbed()
    .setTitle('Some feet images! OwO')
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(feetEmbed)
}

if (command === 'ngif'){
    if (!message.channel.nsfw) return message.channel.send("Please make sure the channel is marked NSFW before you use this command! UwU");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/nsfw_neko_gif`);
    const ngifEmbed = new Discord.RichEmbed()
    .setTitle('Some nasty GIFs! OwO')
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(ngifEmbed)
}

if (command === 'cum'){
    if (!message.channel.nsfw) return message.channel.send("Please make sure the channel is marked NSFW before you use this command! UwU");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/cum`);
    const cumEmbed = new Discord.RichEmbed()
    .setTitle('Some cummies! OwO')
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(cumEmbed)
}

if (command === 'spank'){
    if (!message.channel.nsfw) return message.channel.send("Please make sure the channel is marked NSFW before you use this command! UwU");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/spank`);
    const spankEmbed = new Discord.RichEmbed()
    .setTitle('Some *nasty* spankings! OwO')
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(spankEmbed)
}

if (command === 'trap'){
    if (!message.channel.nsfw) return message.channel.send("Please make sure the channel is marked NSFW before you use this command! UwU");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/trap`);
    const trapEmbed = new Discord.RichEmbed()
    .setTitle('Some anime traps! UwU')
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(trapEmbed)
}

if (command === 'les'){
    if (!message.channel.nsfw) return message.channel.send("Please make sure the channel is marked NSFW before you use this command! UwU");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/les`);
    const lesbianEmbed = new Discord.RichEmbed()
    .setTitle('OwO, what\'s this??')
    .setImage(body.url)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send(lesbianEmbed)
}

});

client.login(token);