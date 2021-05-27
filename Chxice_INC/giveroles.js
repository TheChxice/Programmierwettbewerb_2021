module.exports = client => { const fs = require('fs')
    const Discord = require('discord.js')
    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
        const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
        let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
        const prefixid =  pref.prefix1
        if(message.content.startsWith(`${prefixid}giverole`)){
            message.delete()
            const {guild, member} = message 
            if(member.hasPermission('ADMINISTRATOR')){
            
            const target = message.mentions.users.first()
            const membert = guild.members.cache.get(target.id)
            if(!target) return message.reply('Please provide a user').then(msg=>msg.delete({timeout:'5000'}))
            const parts = message.content.split(' ')
            const role=  parts.slice(2).join(' ')
        console.log(parts)
        let roleadder = message.guild.roles.cache.get(role) || message.guild.roles.cache.find(r=>r.name==role)
        membert.roles.add(roleadder)
        const embed = new Discord.MessageEmbed()
        .setTitle('Role added')
        .setDescription(`${target} got ${roleadder}`)
.setColor('#12c4b8')
message.reply(embed).then(msg=>msg.delete({timeout:'5000'}))
   }
    else message.reply('No permissions').then(msg=>msg.delete({timeout:'5000'}))
 
        }else if(message.content.startsWith(`${prefixid}removerole`)){
            message.delete()
            const {guild, member} = message 
            if(member.hasPermission('MANAGE_ROLES')){
           
            const target = message.mentions.users.first()
            const membert = guild.members.cache.get(target.id)
            if(!target) return message.reply('Please provide a user').then(msg=>msg.delete({timeout:'5000'}))
            const parts = message.content.split(' ')
           const role=  parts.slice(2).join(' ')
        console.log(parts)
        let roleadder = message.guild.roles.cache.get(role) || message.guild.roles.cache.find(r=>r.name==role)
        membert.roles.remove(roleadder)
        const embed = new Discord.MessageEmbed()
        .setTitle('Role removed')
        .setDescription(`${target} lost ${roleadder}`)
.setColor('#12c4b8')
message.reply(embed).then(msg=>msg.delete({timeout:'5000'}))
    }
    else message.reply('Keine Rechte').then(msg=>msg.delete({timeout:'5000'}))
   }

    }})}