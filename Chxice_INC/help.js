const { lastIndexOf } = require('ffmpeg-static')

module.exports = client => {
  const fs = require('fs')
    const Discord = require('discord.js')
    const db = require('quick.db')
    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
      const {guild, member} = message
      const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
      let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
      const prefixid =  pref.prefix1
        if(message.content.startsWith(`${prefixid}help`)){
          let chx = db.get(`helpchannel_${member.guild.id}`)
          if(chx === null) {return;}
        
            
            const embed = new Discord.MessageEmbed()
            .setTitle('Help Menu')
            .setColor('#12c4b8')
            .addField(`${prefixid}userhelp:`, 'User help')
            .addField(`${prefixid}staffhelp:`,  'Staff help')
            message.delete()
            const channel = client.channels.cache.get(chx)
            channel.send(embed).then(msg=>msg.delete({timeout:'15000'}))
            message.reply('look in #help').then(msg=>msg.delete({timeout:'5000'}))
         
        }
          //help Normal
          else if(message.content.startsWith(`${prefixid}userhelp`)){
            const {guild, member} = message
            let chx = db.get(`helpchannel_${member.guild.id}`)
            if(chx === null) {return;}
            message.delete()
            
            
            const embed = new Discord.MessageEmbed()
            .setTitle('Help Menu')
            .setColor('#12c4b8')
            .addField(`${prefixid}role:`, 'to give yourself a role')
            .addField(`${prefixid}roleremove:`,  'to remove your role')
            .addField(`${prefixid}request:`,  'to provide a request')
            .addField(`${prefixid}avatar: + @:`, 'to show the avatar')
            .addField(`${prefixid}play + songname:`, 'to play a song')
            .addField(`${prefixid}stop:`, 'to stop the music')
            .addField(`${prefixid}skip:`, 'to skip a song')
            .addField(`${prefixid}wiki + keyword:`, 'search on Wikipedia')
            .addField(`${prefixid}gh + name:`, 'search on Github')
            .addField(`${prefixid}tt + @:`, 'to play TicTacToe')
            .addField(`${prefixid}pay + @ + amount:`,  'to pay a user')
            .addField(`${prefixid}level:`,  'to show your level')
        
            const channel = client.channels.cache.get(chx)
             channel.send(embed).then(msg=>msg.delete({timeout:'30000'}))
             message.reply('look in #help').then(msg=>msg.delete({timeout:'5000'}))
             
            
          }
          //admin help
          else if(message.content.startsWith(`${prefixid}staffhelp`)){
            let chx = db.get(`helpchannel_${member.guild.id}`)
            if(chx === null) {return;}
            message.delete()
              
            if (message.member.hasPermission('ADMINISTRATOR')){
            
              const {guild, member} = message
            const embed = new Discord.MessageEmbed()
            .setTitle('Help Staff Menu')
            .setColor('#12c4b8')
            .addField(`${prefixid}clear + amount:`, 'clear the amount of messages')
            .addField(`${prefixid}kick + @:`,  'to kick a person')
            .addField(`${prefixid}ban + @:`,  'to ban a person')
            .addField(`${prefixid}rradd + @rank + emoji:`,  'adds a role to the reactionrole list')
            .addField(`${prefixid}panel:`,  'sends the reactionrole panel')
            .addField(`${prefixid}addrole + # + name:`,  'creates a new role')
            .addField(`${prefixid}deleterole + name:`,  'deletes a role')
            .addField(`${prefixid}bond + option:`,  'binds a channel[Options: help,welcome,bye,kickban,anmeldung]')
            .addField(`${prefixid}addteam + # + name:`,  'creates a new team + category')
            .addField(`${prefixid}deleteteam + name:`,  'deletes a team + category')
            .addField(`${prefixid}alert + channelname + Text:`,  'sends a message')
            .addField(`${prefixid}giverole + @ + role:`,  'gives a role to a user')
            .addField(`${prefixid}removerole + @ + role:`,  'removes a role from a user')
            .addField(`${prefixid}set + email + provider + passwort + user + getter:`, 'to define the email')
            .addField(`${prefixid}prefix + (prefix):`,  'changes the prefix')
            .addField(`${prefixid}addmoney + @ + amount:`,  'adds money')

           
            const channel = client.channels.cache.get(chx)
            channel.send(embed).then(msg=>msg.delete({timeout:'30000'}))
        message.reply('Look in #help').then(msg=>msg.delete({timeout:'5000'}))
      }
        
            else{ message.reply('No permissions').then(msg=>msg.delete({timeout:'5000'}))
            
         
            }
        
          }
         

    }})





  }