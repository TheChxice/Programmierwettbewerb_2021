module.exports = client => {
    const fs = require('fs')
    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
        const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
        let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
        const prefixid =  pref.prefix1
        if(message.content.startsWith(`${prefixid}set`)){
            message.delete()
            const emaildata = JSON.parse(fs.readFileSync('emaildata.json', 'utf8'))
            const parts = message.content.split(' ')
                
            const {member, mentions} = message
               if(member.hasPermission('ADMINISTRATOR')){
                let service = parts[1]
               console.log()
 {message.reply('Erfolgreich').then(msg=>msg.delete({timeout:'5000'}))
 if(!parts[1])return message.reply('Keine Emailt'),setTimeout(() => message.channel.bulkDelete(1), 2000)
 if(!parts[2])return message.reply('Kein Provider'),setTimeout(() => message.channel.bulkDelete(1), 2000)
 if(!parts[3])return message.reply('Kein Password'),setTimeout(() => message.channel.bulkDelete(1), 2000)
 if(!parts[4])return message.reply('Kein User'),setTimeout(() => message.channel.bulkDelete(1), 2000)
 if(!parts[5])return message.reply('Kein Empfänger'),setTimeout(() => message.channel.bulkDelete(1), 2000)
               var save = {email: parts[1], provider: parts[2], pass: parts[3], user: parts[4], getter: parts[5]}
               emaildata.info.push(save)
               
               fs.writeFileSync('emaildata.json', JSON.stringify(emaildata))
           
               }}
            
            else message.reply('Keine Rechte').then(msg=>msg.delete({timeout:'5000'}))
        
      }}})


}
