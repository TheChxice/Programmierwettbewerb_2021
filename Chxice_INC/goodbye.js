module.exports = client => {
  const { Leaver } = require('canvacord')
  const fs = require('fs')
  const canvacord =require('canvacord')
  const db = require('quick.db')
    const Discord = require('discord.js')

    client.on('guildMemberRemove' , async (member) => {
     
  

        let chx = db.get(`byechannel_${member.guild.id}`)
        if(chx === null) {return;}
        const goodbye = new Leaver()
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
        .setText("title", "Goodbye")
        .setText("message", "have a great day")
        .setAvatar(member.user.displayAvatarURL({format: "png"}))
        let attatchment = new Discord.MessageAttachment(await goodbye.build(), "bye.png")
        client.channels.cache.get(chx).send(attatchment)
    
      })
      
}