module.exports = client => { const fs = require('fs')
const translate = require('@iamtraction/google-translate')
const Discord = require('discord.js')
client.on('message', async (message) => {if(!message.member.bot && message.guild){
    const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
    let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
    const prefixid =  pref.prefix1
if(message.content.startsWith(`${prefixid}ts`)){ const parts = message.content.split(' ')
console.log(parts)

const language2 = parts[1]
const language = parts[2] 


const word = parts.slice(3).join(' ')
if(!word) return message.reply('Bitte Text eingeben').then(msg=>msg.delete({timeout:'5000'}))

const translated = await translate(word,{from: language2, to: language})
const embed = new Discord.MessageEmbed()
.setTitle('Übersetzer')
.setDescription(word)
.setColor('#12c4b8')
.addField('Von Sprache', language2)
.addField('Zu Sprache' , language)
.addField('Übersetzung' , translated.text)
message.delete()
message.channel.send(embed).then(msg=>msg.delete({timeout:'5000'}))

}}})}