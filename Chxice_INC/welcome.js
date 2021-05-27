const { Welcomer } = require('canvacord')
const canvacord = require('canvacord')
const Canva=require('discord-canvas')
module.exports = client => {
  const fs = require('fs')
    const Discord = require('discord.js')
    const canvacord =require('canvacord')
  const discordcanvas = require('discord-canvas')
 
    client.on('guildMemberAdd' , async (member) => {
      const db = require('quick.db')
    
  let chx = db.get(`welchannel_${member.guild.id}`)
  if(chx === null) {return;}
  
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
        .setText("title", "Welcome")
        .setText("message", `Welcome to ${member.guild.name}`)
        .setAvatar(member.user.displayAvatarURL({format: "png"}))
    let attatchment = new Discord.MessageAttachment(await welcomeCard.build()," welcome.png")
    client.channels.cache.get(chx).send(attatchment)
    
    const embed2 = new Discord.MessageEmbed()
    .setTitle(`Please read the rules`)
      .setImage(member.user.displayAvatarURL({size: 128}))
      .setColor('#12c4b8')
      
    member.send(embed2)
    })
}