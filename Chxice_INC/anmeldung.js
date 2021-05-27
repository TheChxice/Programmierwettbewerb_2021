module.exports = client => {
    const fs = require('fs')
    const Discord = require('discord.js')
    const db = require('quick.db')
    client.on('message' , async (message) => {if(!message.member.bot && message.guild){
        const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
        let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
        const prefixid =  pref.prefix1
    
        if(message.content.startsWith(`${prefixid}request`)){
            const {guild, member} = message
            let chx = db.get(`anchannel_${member.guild.id}`)
            if(chx === null) {return;}
            const datainfo = JSON.parse(fs.readFileSync('emaildata.json', 'utf8'))
let smail = datainfo.info[datainfo.info.length -1].email
let password = datainfo.info[datainfo.info.length -1].pass
let provider = datainfo.info[datainfo.info.length -1].provider
let user = datainfo.info[datainfo.info.length -1].user
let getter = datainfo.info[datainfo.info.length -1].getter

            console.log(smail)
   
            const parts = message.content.split(`${prefixid}request `)
        
           
            const texts = parts[1]
            const embed = new Discord.MessageEmbed()
            .setTitle('New request!')
            .setDescription('Request: ' + texts)
            .setImage(member.user.displayAvatarURL({size: 64}))
            .setColor('#12c4b8')
            .setFooter(member.user.tag)
            message.delete() 
            const channel =  client.channels.cache.get(chx)
            channel.send(embed)
            message.reply('Request successful').then(msg=>msg.delete({timeout:'5000'}))
           


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
                subject: ' New Request',
                text: `You got a new request\nUser: ${member.user.tag}\n` + texts }
                 transporter.sendMail(mailOptions)
                    
                
                
                    
                
                
                

          }



    }})


}