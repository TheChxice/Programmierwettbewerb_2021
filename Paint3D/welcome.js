const { Welcomer } = require('canvacord')
const canvacord = require('canvacord')
const Canva=require('discord-canvas')
module.exports = client => {
  const fs = require('fs')
    const Discord = require('discord.js')
    const canvacord =require('canvacord')
  const discordcanvas = require('discord-canvas')

    client.on('guildMemberAdd' , async (member) => {
      const kanal = JSON.parse(fs.readFileSync('channelwelcome.json', 'utf8'))
    let chanel_ = kanal.channel1[kanal.channel1.length -1] 
    const channelID = chanel_.channel3
  
        console.log(member)
    const welcomeCard = new Welcomer()
    .setUsername(member.user.username)
        .setDiscriminator(member.user.discriminator)
        .setMemberCount(' ')
        .setGuildName(member.guild.name)
        .setColor("border", "#12c4b8")
        .setColor("username-box", "#12c4b8")
        .setColor("discriminator-box", "#12c4b8")
        .setColor("message-box", "#12c4b8")
        .setColor("title", "#12c4b8")
        .setColor("avatar", "#12c4b8")
        .setText("member-count", " ")
        .setText("title", "Willkommen")
        .setText("message", `Willkommen auf ${member.guild.name}`)
        .setAvatar(member.user.displayAvatarURL({format: "png"}))
    let attatchment = new Discord.MessageAttachment(await welcomeCard.build()," welcome.png")


    const channel = member.guild.channels.cache.get(channelID)
    channel.send(attatchment)
    
    const embed2 = new Discord.MessageEmbed()
    .setTitle(`Bitte lese die Regeln`)
      .setImage(member.user.displayAvatarURL({size: 128}))
      .setColor('#12c4b8')
      .setURL('https://www.hackathon-leer.de/')
    member.send(embed2)
    })
}