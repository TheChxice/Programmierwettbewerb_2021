module.exports = client => {
    const Discord = require('discord.js')
    const fs = require('fs')
    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
        const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
        let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
        const prefixid =  pref.prefix1
        if(message.content.startsWith(`${prefixid}alert`)){
            message.delete() 
            const {guild, member} = message
            if(member.hasPermission('ADMINISTRATOR') || member.hasPermission('MANAGE_MESSAGES')){
            const parts = message.content.split(' ')
            const info = parts.slice(2).join(' ')
           console.log[parts[1]]
           let channel = message.guild.channels.cache.find(channel=> channel.name === parts[1])

console.log(channel)

            if(!channel) return message.reply('Please provide a channel').then(msg=>msg.delete({timeout:'5000'}))
            if(!info) return message.reply('Please provide a info').then(msg=>msg.delete({timeout:'5000'}))
            const embed = new Discord.MessageEmbed()
            .setTitle('Attention!')
            .setDescription('Alert: ' + info)
            .setColor('#12c4b8')
            .setFooter('Von ' + `@${member.user.tag}`)

            channel.send(embed)
            message.reply('Success').then(msg=>msg.delete({timeout:'5000'}))
           
            }
            else message.reply('You have no permissions').then(msg=>msg.delete({timeout:'5000'}))
          }
        
    }})

}