const mongoose = require('mongoose')
const reString = {
    type: String,
    required:true
}

const profileSchema = mongoose.Schema({
guildId: reString,
userId: reString,
coins: {
    type: Number,
    required: true
}


})
module.exports = mongoose.model('profiles', profileSchema)