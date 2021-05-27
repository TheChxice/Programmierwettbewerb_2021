module.exports = client => {
  const Discord = require('discord.js')
  const fs = require('fs')
  const db = require('quick.db')

    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
      const {member, mentions} = message
      const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
      let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
      const prefixid =  pref.prefix1
    if(message.content.startsWith(`${prefixid}kick`)) {
     
      message.delete()
           
            if(member.hasPermission('ADMINISTRATOR') || member.hasPermission('KICK_MEMBERS')){
              const {member, mentions} = message
              let chx = db.get(`kickchannel_${member.guild.id}`)
              if(chx === null) {return;}
            const target = mentions.users.first()
            if (target) {
          const targetMember = message.guild.members.cache.get(target.id)
          targetMember.kick()
          const embed = new Discord.MessageEmbed()
        .setTitle('Got kickt')
          .setImage(target.displayAvatarURL({size: 128}))
          .setColor('#12c4b8')
    
          const channel = client.channels.cache.get(chx)
          channel.send(embed)
          console.log('Kicked' + target)}
        
          else message.reply('No target ').then(msg=>msg.delete({timeout:'5000'}))
           
          }
          else message.reply( 'No permissions').then(msg=>msg.delete({timeout:'5000'}))
          
          
          }
          //Ban
        else if(message.content.startsWith(`${prefixid}ban`)) {
          message.delete()
         
          
          if(member.hasPermission('ADMINISTRATOR') || member.hasPermission('BAN_MEMBERS')){const {member, mentions} = message
            let chx = db.get(`kickchannel_${member.guild.id}`)
            if(chx === null) {return;}
          const target = mentions.users.first()
          if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.ban()
        const embed = new Discord.MessageEmbed()
        .setTitle('Got banned')
          .setImage(target.displayAvatarURL({size: 128}))
          .setColor('#12c4b8')
         
          const channel = client.channels.cache.get(chx)
          channel.send(embed)
          console.log('Banned' + target)
        }
        else message.reply('No target').then(msg=>msg.delete({timeout:'5000'}))
        }
        else message.reply( 'No permissions!').then(msg=>msg.delete({timeout:'5000'}))
     }
    }})



}