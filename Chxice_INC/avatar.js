module.exports = client => { const fs = require('fs')
    const Discord = require('discord.js')
    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
        const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
        let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
        const prefixid =  pref.prefix1
    if(message.content.startsWith(`${prefixid}avatar`)){
    message.delete()
if(message.mentions.users.first()){
    var user = message.mentions.users.first()
    var attatchment = new Discord.MessageAttachment(user.avatarURL())
    message.delete()
    message.reply(attatchment).then(msg=>msg.delete({timeout:'5000'}))
   
  }else
  message.channel.send('ERROR!').then(msg=>msg.delete({timeout:'5000'}))
 }}})
}