const economy = require('./economy')


module.exports = client => {

    
    const Discord= require('discord.js')
    const got = require('got')
    const fs = require('fs')
        client.on('message' , async (message) => {if(!message.member.bot && message.guild){
            const {member, mentions} = message
            const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
        let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
        const prefixid =  pref.prefix1
            if(message.content.startsWith(`${prefixid}bal`)){
                message.delete()
                const {guild, member} = message
const target = mentions.users.first()|| message.author
const targetId = target.id

const guildId= message.guild.id
const userId= target.id
const coins = await economy.getCoins(guildId, userId)
const embed = new Discord.MessageEmbed()
.setTitle('Coins')
.setDescription(`${target} has ${coisns} coins!`)
.setColor('#12c4b8')

message.reply(embed).then(msg=>msg.delete({timeout:'5000'}))

            }}})}