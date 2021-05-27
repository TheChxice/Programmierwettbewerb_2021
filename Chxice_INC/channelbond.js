
module.exports = client => {
    const fs = require('fs')
    const mongo = require('mongoose')
    const Discord = require('discord.js')
    const db = require('quick.db')





    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
        const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
        let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
        const guildId= message.guild.id
       
        const prefixid =  pref.prefix1
        if(message.content.startsWith(`${prefixid}bond`)){
            message.delete()
            const parts = message.content.split(' ')
            if(parts[1] == 'help')  {

            const {member, mentions} = message
               if(member.hasPermission('ADMINISTRATOR')){
                
                let channel= message.mentions.channels.first()
         if(!channel) return message.reply('Please Mention the channel')
         db.set(`helpchannel_${message.guild.id}`, channel.id)
         message.reply(`Help Channel is seted as ${channel}`).then(msg=>msg.delete({timeout:'5000'}))
                }
             
            else message.reply('No permissions').then(msg=>msg.delete({timeout:'5000'}))
       
        
    }
    if(parts[1] == 'welcome'){
       
        const {member, mentions} = message
        if(member.hasPermission('ADMINISTRATOR')){
           
         
         let channel= message.mentions.channels.first()
         if(!channel) return message.reply('Please Mention the channel')
         db.set(`welchannel_${message.guild.id}`, channel.id)
         message.reply(`Welcome Channel is seted as ${channel}`).then(msg=>msg.delete({timeout:'5000'}))
        
         
        
            
        }
        else message.reply('No permissions').then(msg=>msg.delete({timeout:'5000'}))
    }

    if(parts[1] == 'bye')  {
    const {member, mentions} = message
       if(member.hasPermission('ADMINISTRATOR')){
       
        let channel= message.mentions.channels.first()
         if(!channel) return message.reply('Please Mention the channel')
         db.set(`byechannel_${message.guild.id}`, channel.id)
         message.reply(`Goodbye Channel is seted as ${channel}`).then(msg=>msg.delete({timeout:'5000'}))
       }
    
    else message.reply('No permissions').then(msg=>msg.delete({timeout:'5000'}))
}

if(parts[1] == 'kickban')  {
const {member, mentions} = message
   if(member.hasPermission('ADMINISTRATOR')){
  
    let channel= message.mentions.channels.first()
         if(!channel) return message.reply('Please Mention the channel')
         db.set(`kickchannel_${message.guild.id}`, channel.id)
         message.reply(`Kick/Ban Channel is seted as ${channel}`)

   }

else message.reply('No permissions').then(msg=>msg.delete({timeout:'5000'}))
}

if(parts[1] == 'anmeldung')  {
    message.delete()
const {member, mentions} = message
   if(member.hasPermission('ADMINISTRATOR')){
   
    let channel= message.mentions.channels.first()
         if(!channel) return message.reply('Please Mention the channel')
         db.set(`anchannel_${message.guild.id}`, channel.id)
         message.reply(`Anmeldung Channel is seted as ${channel}`).then(msg=>msg.delete({timeout:'5000'}))

   
   }

else message.reply('No permissions').then(msg=>msg.delete({timeout:'5000'}))
}

}






}

        
   


        
    })
}