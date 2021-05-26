module.exports = client => {
    const Discord = require('discord.js')
    const fs = require('fs')
    const economy = require('./economy')
    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
        const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
        let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
        const prefixid =  pref.prefix1
        if(message.content.startsWith(`${prefixid}addmoney`)){
            message.delete()
           
            const parts = message.content.split(' ')
                
            const {member, mentions} = message
               if(member.hasPermission('ADMINISTRATOR')){
                
const mention = mentions.users.first()
                if(!mention){
                    message.reply('Bitte User angeben').then(msg=>msg.delete({timeout:'5000'}))
                }
const coins = parts[2]
if(isNaN(coins)) return message.reply('Bitte zahl angeben').then(msg=>msg.delete({timeout:'5000'})) 
const guildId = message.guild.id 
const userId = mention.id

const newCoins = await economy.addCoins(guildId, userId, coins)

message.reply(`Du hast ${mention} ${coins} gegeben`).then(msg=>msg.delete({timeout:'5000'})) 
               }}}})
}