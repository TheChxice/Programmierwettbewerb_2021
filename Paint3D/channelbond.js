
module.exports = client => {
    const fs = require('fs')
    const mongo = require('mongoose')
    const Discord = require('discord.js')

    const channelID1 = JSON.parse(fs.readFileSync('channelhelp.json', 'utf8'))
    const channelID2 = JSON.parse(fs.readFileSync('channelwelcome.json', 'utf8'))
    const channelID3 = JSON.parse(fs.readFileSync('channelbye.json', 'utf8'))
    const channelID4 = JSON.parse(fs.readFileSync('channelkick.json', 'utf8'))
    const channelID5 = JSON.parse(fs.readFileSync('channelanmeldung.json', 'utf8'))
    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
        const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
        let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
        const guildId= message.guild.id
       
        const prefixid =  pref.prefix1
        if(message.content.startsWith(`${prefixid}bond`)){
            message.delete()
            const parts = message.content.split(' ')
            if(parts[1] == 'help')  {
                let channelh = message.channel.id
            const {member, mentions} = message
               if(member.hasPermission('ADMINISTRATOR')){
                
                message.reply('Erfolgreich').then(msg=>msg.delete({timeout:'5000'}))
                let channel2 = message.channel.id
                console.log(channel2)
       
                var tsave = {channel2}
                channelID1.channel1.push(tsave)
                
                fs.writeFileSync('channelhelp.json', JSON.stringify(channelID1))
                }
             
            else message.reply('Keine Rechte').then(msg=>msg.delete({timeout:'5000'}))
       
        
    }
    if(parts[1] == 'welcome'){
       
        const {member, mentions} = message
        if(member.hasPermission('ADMINISTRATOR')){
            message.reply('Erfolgreich').then(msg=>msg.delete({timeout:'5000'}))
          let channel3 = message.channel.id
         console.log(channel3)

         var tsave = {channel3}
         channelID2.channel1.push(tsave)
         
         fs.writeFileSync('channelwelcome.json', JSON.stringify(channelID2))
            
        }
        else message.reply('Keine Rechte').then(msg=>msg.delete({timeout:'5000'}))
    }

    if(parts[1] == 'bye')  {
    const {member, mentions} = message
       if(member.hasPermission('ADMINISTRATOR')){
        message.reply('Erfolgreich').then(msg=>msg.delete({timeout:'5000'}))
        let channel4 = message.channel.id
       console.log(channel4)

       var save = {channel4}
       channelID3.channel1.push(save)
       
       fs.writeFileSync('channelbye.json', JSON.stringify(channelID3))
      
       }
    
    else message.reply('Keine Rechte').then(msg=>msg.delete({timeout:'5000'}))
}

if(parts[1] == 'kickban')  {
const {member, mentions} = message
   if(member.hasPermission('ADMINISTRATOR')){
    message.reply('Erfolgreich').then(msg=>msg.delete({timeout:'5000'}))
    let channel5 = message.channel.id
   console.log(channel5)

   var save = {channel5}
   channelID4.channel1.push(save)
   
   fs.writeFileSync('channelkick.json', JSON.stringify(channelID4))

   }

else message.reply('Keine Rechte').then(msg=>msg.delete({timeout:'5000'}))
}

if(parts[1] == 'anmeldung')  {
    message.delete()
const {member, mentions} = message
   if(member.hasPermission('ADMINISTRATOR')){
    message.reply('Erfolgreich').then(msg=>msg.delete({timeout:'5000'}))
    let channel6 = message.channel.id
   console.log(channel6)

   var save = {channel6}
   channelID5.channel1.push(save)
   
   fs.writeFileSync('channelanmeldung.json', JSON.stringify(channelID5))
   
   }

else message.reply('Keine Rechte').then(msg=>msg.delete({timeout:'5000'}))
}

}






}

        
   


        
    })
}