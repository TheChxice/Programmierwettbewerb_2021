module.exports = client => {
    const fs = require('fs')

    const DisTube = require('distube')
    const distube = new DisTube(client, {searchSongs: true, emitNewSongOnly: true})
//status
    const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;
//listeners
distube
    .on("playSong", (message, queue, song) => {message.channel.send(
        `plays \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: Chxice INC \n${status(queue)}`
    )
    setTimeout(() => message.channel.bulkDelete(3), 2000)})

   .on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue`
    ))
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(
        `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`
    ))
    // DisTubeOptions.searchSongs = true
    .on("searchResult", (message, result) => {
        let i = 0;
        message.channel.send(`**Auswählen bitte**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.duration}\``).join("\n")}\n*60 Sekunden warten oder neu suchen*`);
    })
    // DisTubeOptions.searchSongs = true
    .on("searchCancel", (message) => message.channel.send(`Search canceled`))
    .on("error", (message, err) => message.channel.send(
        "Fehler: " + err
    ))


//befehler
client.on('message' , async (message) => {if(!message.member.bot && message.guild){
    const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))
    let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
    const prefixid =  pref.prefix1
    if(message.content.startsWith(`${prefixid}play`)){ const parts = message.content.split(`${prefixid}play `)
    console.log(parts)
    const {guild, member} = message


    const text = parts[1]
  if (!message.member.voice.channel) return message.channel.send('You are not in a speach channel').then(msg=>msg.delete({timeout:'5000'}))
distube.play(message, parts.join(' '))
message.delete()
}

else if(message.content.startsWith(`${prefixid}stop`)){
    const {guild, member} = message
    const bot = message.guild.members.cache.get(client.user.id)
  if (!message.member.voice.channel) return message.channel.send('You are not in a speach channel').then(msg=>msg.delete({timeout:'5000'}))
  if(bot.voice.channel !== message.member.voice.channel) return message.channel.send('Error').then(msg=>msg.delete({timeout:'5000'}))
distube.stop(message)
message.delete()
message.reply('You stopped the music').then(msg=>msg.delete({timeout:'5000'}))

}


else if(message.content.startsWith(`${prefixid}skip`)){

    const {guild, member} = message
  if (!message.member.voice.channel) return message.channel.send('You are not in a speach channel').then(msg=>msg.delete({timeout:'5000'}))
distube.skip(message)
message.delete()
message.channel.send('Skipped').then(msg=>msg.delete({timeout:'5000'}))

}
}})}