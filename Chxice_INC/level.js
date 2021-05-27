module.exports = client => {
    const fs = require('fs')
    const moongoose = require('mongoose') 
    const Discord = require('discord.js')
    const Levels= require('discord-xp')
    const canvacord =require('canvacord')
Levels.setURL("database placeholder")
    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
        const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
        let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
        const prefixid =  pref.prefix1
        const randomXP = Math.floor(Math.random() *9 )+1
        Levels.createUser(message.author.id, message.guild.id)
const hasLevelUp = await Levels.appendXp(message.author.id, message.guild.id, randomXP)
if (hasLevelUp){
    const user= await Levels.fetch(message.author.id, message.guild.id)
    const embed = new Discord.MessageEmbed()
    .setTitle('Level UP!')
    .setDescription(`You are now level ${user.level}`)
    .setColor('#12c4b8')
    message.reply(embed).then(msg=>msg.delete({timeout:'5000'}))
}
if(message.content.startsWith(`${prefixid}level`)){
    message.delete()
    const user= await Levels.fetch(message.author.id, message.guild.id)
    const neededXP = Levels.xpFor(parseInt(user.level) + 1)
        if (!user) return message.reply('Please collect xp first').then(msg=>msg.delete({timeout:'5000'}))
        const rank = new canvacord.Rank()
        .setAvatar(message.author.displayAvatarURL({format: "png"}))
        .setCurrentXP(user.xp)
        .setRequiredXP(neededXP)
        .setStatus(message.author.presence.status)
        .setProgressBar("#FFFFFF", "COLOR")
        .setUsername(message.author.username)
        .setDiscriminator(message.author.discriminator)
        .setLevel(user.level)
    rank.build()
        .then(data => {
            const attachment = new Discord.MessageAttachment(data, "RankCard.png");
            message.reply(attachment).then(msg=>msg.delete({timeout:'5000'}))})




    }}})}

   