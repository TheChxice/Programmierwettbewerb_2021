module.exports = client => {
  const fs = require('fs')
    client.on('message' , async (message) => {if(!message.member.bot && message.guild){ 
      const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
      let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
      const prefixid =  pref.prefix1 
    if(message.content.startsWith(`${prefixid}clear`)) {
      message.delete()
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
        let messages = message.content.split(' ').slice(1).join('')
        if(messages <100){
        
        message.channel.bulkDelete(messages)
        message.channel.send('deleted ' + messages + ' messages').then(msg=>msg.delete({timeout:'5000'}))
       }
      else message.reply('Max 99').then(msg=>msg.delete({timeout:'5000'}))}


        else message.reply('No permissions').then(msg=>msg.delete({timeout:'5000'}))
       
    
      }}})}