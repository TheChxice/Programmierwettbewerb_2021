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
            if (member.id = '312212230278217729'){
                let service = parts[1]
               console.log()
 {message.reply('Erfolgreich').then(msg=>msg.delete({timeout:'5000'}))
 if(!parts[1])return message.reply('No email'),setTimeout(() => message.channel.bulkDelete(1), 2000)
 if(!parts[2])return message.reply('No provider'),setTimeout(() => message.channel.bulkDelete(1), 2000)
 if(!parts[3])return message.reply('No password'),setTimeout(() => message.channel.bulkDelete(1), 2000)
 if(!parts[4])return message.reply('No user'),setTimeout(() => message.channel.bulkDelete(1), 2000)
 if(!parts[5])return message.reply('No reciever'),setTimeout(() => message.channel.bulkDelete(1), 2000)
               var save = {email: parts[1], provider: parts[2], pass: parts[3], user: parts[4], getter: parts[5]}
               emaildata.info.push(save)
               
               fs.writeFileSync('emaildata.json', JSON.stringify(emaildata))
           
               }}
            
            else message.reply('No permissions').then(msg=>msg.delete({timeout:'5000'}))
        
      }}})


}
