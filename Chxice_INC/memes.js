module.exports = client => {


const Discord= require('discord.js')
const got = require('got')
const fs = require('fs')
    client.on('message' , async (message) => {if(!message.member.bot && message.guild){

        const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
    let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
    const prefixid =  pref.prefix1
        if(message.content.startsWith(`${prefixid}meme`)){
message.delete()
const embed= new Discord.MessageEmbed()
got('https://www.reddit.com/r/memes/random.json').then(response => {
    let content = JSON.parse(response.body)
let permalink = content[0].data.children[0].data.permalink
let memeUrl = `https://reddit.com${permalink}`
let memeImage = content[0].data.children[0].data.url
let memeTitle = content[0].data.children[0].data.title
let memeUpvotes = content[0].data.children[0].data.ups
let memeDownvotes = content[0].data.children[0].data.downs
let memeNumComments = content[0].data.children[0].data.num_comments

embed.setTitle(`${memeTitle}`)
embed.setURL(`${memeUrl}`)
embed.setImage(memeImage)
embed.setColor('#12c4b8')
embed.setFooter(`Likes: ${memeUpvotes}  Downvotes: ${memeDownvotes} Comments: ${memeNumComments}`)
message.channel.send(embed).then(msg=>msg.delete({timeout:'15000'}))})





    }}})


}