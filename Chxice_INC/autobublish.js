module.exports = client => {
const Discord =  require('discord.js')
require('dotenv').config()

client.on('message', (message) => {
const {channel }= message
if (channel.type === 'news') {
    message.crosspost()

}

})
}