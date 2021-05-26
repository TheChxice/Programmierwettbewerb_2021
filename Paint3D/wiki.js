module.exports = client => { const fs = require('fs')
    const fetch = require('node-fetch')
    const Discord = require('discord.js')
    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
      const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
      let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
      const prefixid =  pref.prefix1
        if(message.content.startsWith(`${prefixid}wiki`)){ const parts = message.content.split(`${prefixid}wiki `)
        console.log(parts)
        message.delete()
        const wiki = parts[1]
        if(!wiki) return message.reply('Keine Bedingung').then(msg=>msg.delete({timeout:'5000'}))
       const body = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}`)
         .then(response => response.json().catch(() => {}))
      if(!body)
      return message.channel.send('Seite nicht gefunden').then(msg=>msg.delete({timeout:'5000'}))
      if (body.title && body.title === 'Not found.')
      return message.channel.send('Seite nicht gefunden').then(msg=>msg.delete({timeout:'5000'}))
      
      
      const embed5 = new Discord.MessageEmbed()
      .setTitle(`${body.title}`)
      .addField('More Info', `[Click Here]${body.content_urls.desktop.page}`, true)
      .setDescription(`${body.extract}`)
      .setColor('#12c4b8')
      
      if(body.thumbnail) embed5
      .setThumbnail(body.thumbnail.source)
      message.reply(embed5).then(msg=>msg.delete({timeout:'15000'}))
     
        }
      

    }})




}
