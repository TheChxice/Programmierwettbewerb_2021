module.exports = client => {
  const Discord = require('discord.js')
  const fs = require('fs')


    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
      const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
      let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
      const prefixid =  pref.prefix1
    if(message.content.startsWith(`${prefixid}kick`)) {
      const kanal = JSON.parse(fs.readFileSync('channelkick.json', 'utf8'))
      let chanel_ = kanal.channel1[kanal.channel1.length -1]
      const channelID5 = chanel_.channel5
      message.delete()
            const {member, mentions} = message
            if(member.hasPermission('ADMINISTRATOR') || member.hasPermission('KICK_MEMBERS')){
            const target = mentions.users.first()
            if (target) {
          const targetMember = message.guild.members.cache.get(target.id)
          targetMember.kick()
          const embed = new Discord.MessageEmbed()
        .setTitle('Wurde gekickt')
          .setImage(target.displayAvatarURL({size: 128}))
          .setColor('#12c4b8')
    
          const channel = member.guild.channels.cache.get(channelID5)
          channel.send(embed)
          console.log('Kicked' + target)}
        
          else message.reply('Kein Ziel ').then(msg=>msg.delete({timeout:'5000'}))
           
          }
          else message.reply( 'Keine Berechtigung!').then(msg=>msg.delete({timeout:'5000'}))
          
          
          }
          //Ban
        else if(message.content.startsWith(`${prefixid}ban`)) {
          message.delete()
          const kanal = JSON.parse(fs.readFileSync('channelkick.json', 'utf8'))
          let chanel_ = kanal.channel1[kanal.channel1.length -1]
          const channelID5 = chanel_.channel5
          const {member, mentions} = message
          if(member.hasPermission('ADMINISTRATOR') || member.hasPermission('BAN_MEMBERS')){
          const target = mentions.users.first()
          if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.ban()
        const embed = new Discord.MessageEmbed()
        .setTitle('Wurde gebannt')
          .setImage(target.displayAvatarURL({size: 128}))
          .setColor('#12c4b8')
         
          const channel = member.guild.channels.cache.get(channelID5)
          channel.send(embed)
          console.log('Banned' + target)
        }
        else message.reply('Keine Ziel').then(msg=>msg.delete({timeout:'5000'}))
        }
        else message.reply( 'Keine Berechtigung!').then(msg=>msg.delete({timeout:'5000'}))
     }
    }})



}