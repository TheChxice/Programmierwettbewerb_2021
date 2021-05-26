module.exports = client => { const fs = require('fs')
const tictatctoe = require('reconlx')
client.on('message', async (message) => {if(!message.member.bot && message.guild){
    const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
    let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
    const prefixid =  pref.prefix1
    if(message.content.startsWith(`${prefixid}tt`)){ 
    message.delete()
const member = message.mentions.members.first()
if(!member) return message.reply('Bitte Gegner Pingen').then(msg=>msg.delete({timeout:'5000'}))
new tictatctoe.tictactoe({
    player_two: member,
    message: message
})
}
    

}})


}