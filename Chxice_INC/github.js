module.exports = client => { const fs = require('fs')
    const fetch = require('node-fetch')
    const Discord = require('discord.js')
    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
      const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
      let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
      const prefixid =  pref.prefix1

        if(message.content.startsWith(`${prefixid}gh`)){ const parts = message.content.split(`${prefixid}gh `)
        console.log(parts)
        message.delete()
        const name = parts[1]
        if(!name) return message.reply('No permissions').then(msg=>msg.delete({timeout:'5000'}))
    
       const body = await fetch(`https://api.github.com/users/${name}`)
         .then(response => response.json().catch(() => {}))
      if(!body)
      return message.channel.send('Site not found').then(msg=>msg.delete({timeout:'5000'}))
      if (body.title && body.title === 'Not found.')
      return message.channel.send('Site not found').then(msg=>msg.delete({timeout:'5000'}))
      
      const embed5 = new Discord.MessageEmbed()
      .setTitle(`${body.login} (${body.id})`)
      .setURL(body.html_url)
      .addField(`Public Repositories:`,`${body.public_repos}`)
      .setDescription(body.bio ? body.bio : 'No Bio')
      .setColor('#12c4b8')
      .setThumbnail(body.avatar_url)
      .addField(`Followers:`,`${body.followers}`)
      .addField('Following:', `${body.following}`)
      .addField('Email:',body.email ? body.email : 'No Email')
      .addField('Company:', body.company ? body.company : 'No Company')
      .addField('Location:',body.location ? body.location : 'No Location')
      message.reply(embed5).then(msg=>msg.delete({timeout:'15000'}))
     
        }
      

    }})




}
