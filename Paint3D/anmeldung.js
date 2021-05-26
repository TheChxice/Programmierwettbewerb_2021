module.exports = client => {
    const fs = require('fs')
    const Discord = require('discord.js')
    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
        const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
        let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
        const prefixid =  pref.prefix1
    
        if(message.content.startsWith(`${prefixid}anmeldung`)){
            const kanal = JSON.parse(fs.readFileSync('channelanmeldung.json', 'utf8'))
            let chanel_ = kanal.channel1[kanal.channel1.length -1]
            const datainfo = JSON.parse(fs.readFileSync('emaildata.json', 'utf8'))
let smail = datainfo.info[datainfo.info.length -1].email
let password = datainfo.info[datainfo.info.length -1].pass
let provider = datainfo.info[datainfo.info.length -1].provider
let user = datainfo.info[datainfo.info.length -1].user
let getter = datainfo.info[datainfo.info.length -1].getter

            console.log(smail)
    const ChannelID2 = chanel_.channel6
            const parts = message.content.split(`${prefixid}anmeldung `)
            const {guild, member} = message
            const channel = guild.channels.cache.get(ChannelID2)
            const texts = parts[1]
            const embed = new Discord.MessageEmbed()
            .setTitle('Neue Anmeldung!')
            .setDescription('Anmeldedaten: ' + texts)
            .setImage(member.user.displayAvatarURL({size: 64}))
            .setColor('#12c4b8')
            .setFooter(member.user.tag)
            message.delete() 
            channel.send(embed)
            message.reply('Anmeldung erfolgreich').then(msg=>msg.delete({timeout:'5000'}))
           


                var nodemailer = require('nodemailer')
                var transporter = nodemailer.createTransport({
                    service: provider,
                    auth:{
                    user: user,
                    pass: password}
                })
                var mailOptions = {from:
                smail,
                to: getter,
                subject: ' Neue Anmeldung',
                text: `Neue Anmeldung ist gerade eingetroffen\nUser: ${member.user.tag}\n` + texts }
                 transporter.sendMail(mailOptions)
                    
                
                
                    
                
                
                

          }



    }})


}