module.exports = client => {

    const economy = require('./economy')
    const Discord= require('discord.js')
    const got = require('got')
    const fs = require('fs')
        client.on('message' , async (message) => {if(!message.member.bot && message.guild){
 
            const {member, guild, mentions} = message
            const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
        let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
        const prefixid =  pref.prefix1
            if(message.content.startsWith(`${prefixid}pay`)){
                message.delete()
              
                const parts = message.content.split(' ')
         const target = message.mentions.users.first()

if(!target) return message.reply('Bitte empfänger angeben').then(msg=>msg.delete({timeout:'5000'}))
const coinsToGive = parts[2]
if(isNaN(coinsToGive)) return message.reply('Keine Gültige Zahl').then(msg=>msg.delete({timeout:'5000'}))
if(coinsToGive < 1) return message.reply('Keine Gültige Zahl').then(msg=>msg.delete({timeout:'5000'}))
const coinsOwned = await economy.getCoins(guild.id, member.id)
if(coinsOwned < coinsToGive) return message.reply(`Du besitzt ${coinsToGive} nicht`).then(msg=>msg.delete({timeout:'5000'}))
const remainingCoins = await economy.addCoins(
    guild.id,
    member.id,
    coinsToGive * -1
)
const newBalance = await economy.addCoins(
    guild.id,
    target.id,
    coinsToGive
)
const embed = new Discord.MessageEmbed()
.setTitle('Neue Überweisung')
.setDescription(`Du hast ${target} ${coinsToGive} bezahlt.`)
.setColor('#12c4b8')
message.reply(embed).then(msg=>msg.delete({timeout:'5000'}))
            }}})}