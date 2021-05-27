module.exports = client => {
    const fs = require('fs')
    const Discord = require('discord.js')


    client.on('message', async (message) => {
        if (!message.member.bot && message.guild) {
            const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
            let pref = prefixconfig.prefixs[prefixconfig.prefixs.length - 1]
            const prefixid = pref.prefix1

            if (message.content.startsWith(`${prefixid}prefix`)) {
                message.delete()
                const {
                    guild,
                    member
                } = message
                if (member.id = '312212230278217729') {
                    const parts = message.content.split(`${prefixid}prefix `)
                    let prefix1 = parts[1]
                    var tsave = {
                        prefix1
                    }
                    prefixconfig.prefixs.push(tsave)
                    message.reply('Success!').then(msg => msg.delete({
                        timeout: '5000'
                    }))
                    fs.writeFileSync('prefix.json', JSON.stringify(prefixconfig))
                } else message.reply('Keine Rechte').then(msg => msg.delete({
                    timeout: '5000'
                }))
            }
        }
    })


}