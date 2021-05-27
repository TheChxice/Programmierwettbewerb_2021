module.exports = client => { const fs = require('fs')
client.on('message' , async (message) => {if(!message.member.bot && message.guild){
    const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
    let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
    const prefixid =  pref.prefix1
    if(message.content.startsWith(`${prefixid}role`)){ 
        message.delete()
        const parts = message.content.split(' ')
    console.log(parts)
    const roled=  parts.slice(1).join(' ')
    if(!roled) return message.reply('Provide a role').then(msg=>msg.delete({timeout:'5000'}))
    let roleadder = message.guild.roles.cache.get(roled) || message.guild.roles.cache.find(r=>r.name==roled)
    message.member.roles.add(roleadder)
message.reply(`You have gotten ${roleadder}`).then(msg=>msg.delete({timeout:'5000'}))}
else if(message.content.startsWith(`${prefixid}roleremove`)){ 
    message.delete()
    const parts = message.content.split(' ')
console.log(parts)
const roled=  parts.slice(1).join(' ')
if(!roled) return message.reply('Provide a role').then(msg=>msg.delete({timeout:'5000'}))
let roleadder = message.guild.roles.cache.get(roled) || message.guild.roles.cache.find(r=>r.name==roled)
message.member.roles.remove(roleadder)
message.reply(`You removed ${roleadder}`).then(msg=>msg.delete({timeout:'5000'}))}
 
    
}})}