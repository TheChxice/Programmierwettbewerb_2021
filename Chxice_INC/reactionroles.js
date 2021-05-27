
const mongoose = require("mongoose")
  const Schema = require('./schemarrr')
  const fs = require('fs')
const { Util } = require("discord.js")
const Discord = require('discord.js')
module.exports =  client => {
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;

    Schema.findOne({Message: reaction.message.id}, async(err, data)=>{
        if(!data)return
        if(!Object.keys(data.Roles).includes(reaction.emoji.name)) return
const [ roleid] = data.Roles[reaction.emoji.name]
reaction.message.guild.members.cache.get(user.id).roles.add(roleid)
    })
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;

    Schema.findOne({Message: reaction.message.id}, async(err, data)=>{
        if(!data)return
        if(!Object.keys(data.Roles).includes(reaction.emoji.name)) return
const [ roleid] = data.Roles[reaction.emoji.name]
reaction.message.guild.members.cache.get(user.id).roles.remove(roleid)
    })
})
//rradd
client.on('message', async (message) => {
    if (!message.member.bot && message.guild) {
      const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
      let pref = prefixconfig.prefixs[prefixconfig.prefixs.length - 1]
      const prefixid = pref.prefix1
  
      if (message.content.startsWith(`${prefixid}rradd`)) {
message.delete()
        const parts = message.content.split(' ')
        const role = message.mentions.roles.first()
        console.log(parts)
        let emoji = parts[2]
        if (!emoji) return message.reply('Please specify a emoji').then(msg => msg.delete({
          timeout: '5000'
      }))
        const parsedEmoji = Discord.Util.parseEmoji(emoji)
        console.log(emoji)
        console.log(parsedEmoji)
        Schema.findOne({
          Guild: message.guild.id
        }, async (err, data) => {
          if (data) {
            data.Roles[parsedEmoji.name] = [
              role.id, {
                id: parsedEmoji.id,
                raw: emoji
              }
            ]
            await Schema.findOneAndUpdate({
              Guild: message.guild.id
            }, data)
          } else {
            new Schema({
              Guild: message.guild.id,
              Message: 0,
              Roles: {
                [parsedEmoji.name]: [
                  role.id, {
                    id: parsedEmoji.id,
                    raw: emoji
                  }
                ]
              }
            }).save()
          }
          message.reply('new Role added').then(msg => msg.delete({
            timeout: '5000'
        }))
        })
      }
    }
  })
//rrpanel
 
client.on('message' , async (message) => {
    if (!message.member.bot && message.guild) {
  const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
const prefixid =  pref.prefix1
if(message.content.startsWith(`${prefixid}panel`)){
message.delete()
const channel = message.mentions.channels.first() || message.channel
 Schema.findOne({
   Guild: message.guild.id
 }, async(err, data)=> {
   if(!data) return message.reply('No data was in here').then(msg => msg.delete({
    timeout: '5000'}))
   const mapped = Object.keys(data.Roles)
   .map((value,index)=> {
     const role = message.guild.roles.cache.get(
       data.Roles[value][0])

  return `${index + 1}) ${data.Roles[value][1].raw} - ${role}`
  }).join('\n\n')

  channel.send(new Discord.MessageEmbed()
  .setTitle('React to an emoji to get the role')
  .setDescription(mapped))
  .then((msg) => {
 data.Message = msg.id;
 data.save();
 
 const reactions = Object.values(data.Roles).map((val)=> val[1].id?? val[1].raw)
   
 reactions.map((emoji)=> msg.react(emoji))
  })
})
  }}})



}