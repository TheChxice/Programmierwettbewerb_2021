
const Discord = require('discord.js')
module.exports = client => { const fs = require('fs')
    client.on('message', async (message) => {if(!message.member.bot && message.guild){
        const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
        let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
        const prefixid =  pref.prefix1
        const {guild, member} = message
        if(message.content.startsWith(`${prefixid}addrole`)){
            if(member.hasPermission('MANAGE_ROLES')){
                message.delete()
                const parts = message.content.split(' ')
let hex = parts[1]
let roleed = parts.slice(2).join(' ')
if (!hex) return message.reply('You didnt provide a hex').then(msg=>msg.delete({timeout:'5000'}))
if (!roleed) return message.reply('You didnt provide a name').then(msg=>msg.delete({timeout:'5000'}))


roleed=roleed.replace(`${hex}`,` `)
if(hex>=16777215) return message.reply('No real hex').then(msg=>msg.delete({timeout:'5000'}))

let newRole = await message.guild.roles.create({
    data: {
        name: roleed,
        color: hex,
        position: 2
    }})

const embed = new Discord.MessageEmbed()
.setTitle('New role!')
.setDescription(`${message.author.username} has created "${roleed}"\nColor: ${hex}\nID: ${newRole.id}`)
.setColor(hex)
message.channel.send(embed).then(msg=>msg.delete({timeout:'5000'}))}
else {message.reply('no permissions').then(msg=>msg.delete({timeout:'5000'}))
message.delete()

}}
else if(message.content.startsWith(`${prefixid}deleterole`)){
    if(member.hasPermission('MANAGE_ROLES')){
        const parts = message.content.split(`${prefixid}deleterole `)
       message.delete()
        let roleDelete = message.guild.roles.cache.get(parts[1]) || message.guild.roles.cache.find(r=>r.name==parts[1])
        if(!roleDelete) return message.reply('Bitte Rolle Angeben').then(msg=>msg.delete({timeout:'5000'}))
      
roleDelete.delete()
const embed3 = new Discord.MessageEmbed()
.setTitle('Delete role')
.setColor(roleDelete.color)
.setDescription(`${message.author.username} has deleted ${roleDelete.name}`)
message.channel.send(embed3).then(msg=>msg.delete({timeout:'5000'}))
}
else {message.channel.send('no permissions').then(msg=>msg.delete({timeout:'5000'}))
message.delete()
}}}
})}