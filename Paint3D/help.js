const { lastIndexOf } = require('ffmpeg-static')

module.exports = client => {
  const fs = require('fs')
    const Discord = require('discord.js')
 
    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
      const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
      let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
      const prefixid =  pref.prefix1
        if(message.content.startsWith(`${prefixid}help`)){
          const kanal = JSON.parse(fs.readFileSync('channelhelp.json', 'utf8'))
          let chanel_ = kanal.channel1[kanal.channel1.length -1]
          const guildId= message.guild.id
        const channelID4 = chanel_.channel2
        
            const {guild, member} = message
            const embed = new Discord.MessageEmbed()
            .setTitle('Help Menu')
            .setColor('#12c4b8')
            .addField(`${prefixid}userhelp:`, 'User Hilfe')
            .addField(`${prefixid}staffhelp:`,  'Staff Hilfe')
            message.delete()
            const channel = member.guild.channels.cache.get(channelID4)
            channel.send(embed).then(msg=>msg.delete({timeout:'15000'}))
            message.reply('Schaue bei #Hilfe').then(msg=>msg.delete({timeout:'5000'}))
         
        }
          //help Normal
          else if(message.content.startsWith(`${prefixid}userhelp`)){
            message.delete()
            const kanal = JSON.parse(fs.readFileSync('channelhelp.json', 'utf8'))
            let chanel_ = kanal.channel1[kanal.channel1.length -1]
           
           const channelID4 = chanel_.channel2
            const {guild, member} = message
            const embed = new Discord.MessageEmbed()
            .setTitle('Help Menu')
            .setColor('#12c4b8')
            .addField(`${prefixid}role:`, 'Zur Vergabe einer Rolle (Bitte Gros und Kleinschreibung beachten')
            .addField(`${prefixid}anmeldung:`,  'Zur Übermittlung der Anmelde Daten an einen Admin + Versendung einer Email')
            .addField(`${prefixid}avatar: + @:`, 'Zum anzeigen des Avatars')
            .addField(`${prefixid}play + Songname:`, 'Zum Abspielen eines Songs')
            .addField(`${prefixid}stop:`, 'Zum Stoppen eines Songs')
            .addField(`${prefixid}skip:`, 'Zum Überspringen eines Songs')
            .addField(`${prefixid}wiki + Englische Suche:`, 'Zum suchen auf Wikipedia')
            .addField(`${prefixid}gh + Name:`, 'Zum suchen auf Github')
            .addField(`${prefixid}tt + @:`, 'Zum TicTacToe Spielen')
            .addField(`${prefixid}pay + @ + betrag:`,  'Bezahlt dem User Geld')
            .addField(`${prefixid}level:`,  'Zum anzeigen des Levels')
        
            const channel = member.guild.channels.cache.get(channelID4)
             channel.send(embed).then(msg=>msg.delete({timeout:'30000'}))
             message.reply('Schaue bei #Hilfe').then(msg=>msg.delete({timeout:'5000'}))
             
            
          }
          //admin help
          else if(message.content.startsWith(`${prefixid}staffhelp`)){
            message.delete()
              const kanal = JSON.parse(fs.readFileSync('channelhelp.json', 'utf8'))
        let chanel_ = kanal.channel1[kanal.channel1.length -1]
      const channelID4 = chanel_.channel2
            if (message.member.hasPermission('ADMINISTRATOR')){
            
              const {guild, member} = message
            const embed = new Discord.MessageEmbed()
            .setTitle('Help Staff Menu')
            .setColor('#12c4b8')
            .addField(`${prefixid}clear + Anzahl:`, 'Zur Löschung von Nachrichten')
            .addField(`${prefixid}kick + @:`,  'Zum kicken einer Person')
            .addField(`${prefixid}ban + @:`,  'Zum bannen einer Person')
            .addField(`${prefixid}rr + Emoji + RoleID:`,  'Für eine neue Reacton Role')
            .addField(`${prefixid}addrole + # + Name:`,  'Erstellt eine neue Rolle')
            .addField(`${prefixid}deleterole + Name:`,  'Löscht eine Rolle')
            .addField(`${prefixid}bond + option:`,  'Bindet an einen Channel[Options: help,welcome,bye,kickban,anmeldung]')
            .addField(`${prefixid}addteam + # + Name:`,  'Erstellt ein neues Team + Category')
            .addField(`${prefixid}deleteteam + Name:`,  'Löscht ein neues Team + Category')
            .addField(`${prefixid}alert + Channelname + Text:`,  'Sendet eine Nachricht')
            .addField(`${prefixid}giverole + @ + Role:`,  'Gibt dem User die Role')
            .addField(`${prefixid}removerole + @ + Role:`,  'Entfernt die Role vom User')
            .addField(`${prefixid}set + email + provider + passwort + user + getter:`, 'Zum email definition')
            .addField(`${prefixid}prefix + (prefix):`,  'ändert den prefix')
            .addField(`${prefixid}addmoney + @ + betrag:`,  'Fügt Geld Hinzu')

           
            const channel = member.guild.channels.cache.get(channelID4)
            channel.send(embed).then(msg=>msg.delete({timeout:'30000'}))
        message.reply('Schaue bei #Hilfe').then(msg=>msg.delete({timeout:'5000'}))
      }
        
            else{ message.reply('keine rechte').then(msg=>msg.delete({timeout:'5000'}))
            
         
            }
        
          }
         

    }})





  }