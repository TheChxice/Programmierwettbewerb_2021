
    const Discord = require('discord.js')
    module.exports = client => { const fs = require('fs')
        client.on('message', async (message) => {if(!message.member.bot && message.guild){
            const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
            let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
            const prefixid =  pref.prefix1
            const {guild, member} = message
            if(message.content.startsWith(`${prefixid}addteam`)){
                message.delete()
                const everyoneRole = guild.roles.everyone
                if(member.hasPermission('MANAGE_ROLES')){
                    
                    const parts = message.content.split(' ')
    let hex = parts[1]
    let roleed = parts.slice(2).join(' ')
    if (!hex) return message.reply('Du hast keine farbe angegeben').then(msg=>msg.delete({timeout:'5000'}))
  
    if (!roleed) return message.reply('Du hast keinen namen festgelegt').then(msg=>msg.delete({timeout:'5000'}))
  
    
    roleed=roleed.replace(`${hex}`,` `)
    if(hex>=16777215) return message.reply('Keine gültige Farbe').then(msg=>msg.delete({timeout:'5000'}))
   
    
    let newRole = await message.guild.roles.create({
        data: {
            name: roleed,
            color: hex,
            position: 2
        }
    
    })
    const embed = new Discord.MessageEmbed()
    .setTitle('Neues Team!')
    .setDescription(`${message.author.username} hat "${roleed}" erstellt\nFarbe: ${hex}\nID: ${newRole.id}`)
    .setColor(hex)
    message.channel.send(embed).then(msg=>msg.delete({timeout:'5000'}))
   
    let cat = await message.guild.channels.create(roleed, {type: 'category'})
    await cat.overwritePermissions([{type: 'role', id: newRole.id, allow: ['VIEW_CHANNEL']},
{type: 'role', id: everyoneRole.id, deny: ['VIEW_CHANNEL']}])
     let catto = cat.id 
console.log(catto)
message.guild.channels.create(roleed, {type: 'text',parent: catto})
message.guild.channels.create(roleed, {type: 'voice',parent: catto})}

    
    else message.reply('Keine rechte').then(msg=>msg.delete({timeout:'5000'}))
   

        }
        else if(message.content.startsWith(`${prefixid}deleteteam`)){
            message.delete()
            if(member.hasPermission('MANAGE_ROLES')){
                const parts = message.content.split(' ')
                const rolee=  parts.slice(1).join(' ')
                let roleDelete = message.guild.roles.cache.get(rolee) || message.guild.roles.cache.find(r=>r.name==rolee)
                let cattes = message.guild.channels.cache.get(rolee) || message.guild.channels.cache.find(c=>c.name==rolee)
                if(!roleDelete)return message.reply('Bitte Rolle Angeben').then(msg=>msg.delete({timeout:'5000'}))
    
            
            
                if(catDelete = (cattes.type === "category")){ roleDelete.delete()
                    cattes.children.forEach(channel => channel.delete())
                    cattes.delete()
                    console.log(catDelete)
                    const embed3 = new Discord.MessageEmbed()
                    .setTitle('Team Löschen')
                    .setColor(roleDelete.color)
                    .setDescription(`${message.author.username} hat ${roleDelete.name} gelöscht`)
                    message.channel.send(embed3).then(msg=>msg.delete({timeout:'5000'}))
                    } else message.reply('Fehler')
        
        }
        else message.channel.send('Keine rechte').then(msg=>msg.delete({timeout:'5000'}))
      
    }
    
    
    }})

}