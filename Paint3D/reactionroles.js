const { resolveNs } = require('dns')

module.exports = client => {
    const fs = require('fs')
    const Discord = require('discord.js')
    const reactionConfig = JSON.parse(fs.readFileSync('configroles.json', 'utf8'))
    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
      const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
      let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
      const prefixid =  pref.prefix1
        if(message.content.startsWith(`${prefixid}rr`)){
            const {member, mentions} = message
            if(member.hasPermission('ADMINISTRATOR')){
              message.delete()
             var args = message.content.split(' ')
             const roles=  args.slice(2).join(' ')
            var emoji = args[1]
            var roleid =  message.guild.roles.cache.get(roles) || message.guild.roles.cache.find(r=>r.name==roles)
            message.member.roles.add(roleid.id)
            var role = message.guild.roles.cache.get(roleid.id)
            if(!role) return message.reply('Rolle gibt es nicht').then(msg=>msg.delete({timeout:'5000'}))
        
    
          var embed = new Discord.MessageEmbed()
          .setTitle(`Klicke auf ${emoji}`)
          .setDescription(`Klicke Auf ${emoji} um die Regeln zu Akzeptieren!`)
          .setColor('#12c4b8')
          
          var sendedMassage = await message.channel.send(embed)
          sendedMassage.react(emoji)
          
          var toSave = {message: sendedMassage.id, emoji: emoji, role: roleid.id}
          reactionConfig.reactions.push(toSave)
          
          fs.writeFileSync('configroles.json', JSON.stringify(reactionConfig))}
          else message.reply('Du hast keine rechte').then(msg=>msg.delete({timeout:'5000'}))}


            


    }})
    client.on('messageReactionAdd', (reaction, user) => {
        if(reaction.message.partial) reaction.fetch()
        if(user.bot || !reaction.message.guild) return
      
        for (let index = 0; index < reactionConfig.reactions.length; index++) {
          let reactionRole = reactionConfig.reactions[index]
          if(reaction.message.id == reactionRole.message && reaction.emoji.name == reactionRole.emoji && !reaction.message.guild.members.cache.get(user.id).roles.cache.has(reactionRole.roleid)){
            reaction.message.guild.members.cache.get(user.id).roles.add(reactionRole.role)
          }
        }})


}