const mongo = require('./mongoose')
const profileSchema = require('./schema')

module.exports.addCoins = async (guildId, userId, coins) => {
    return await mongo().then(async mongoose => {
const result = await profileSchema.findOneAndUpdate({guildId, userId}, {guildId, userId, $inc:{
    coins
}}, {upsert: true,
new: true})
    })
}

module.exports.getCoins = async (guildId,userId) => {
return await mongo().then(async mongoose => {
    
console.log('running')
const result = await profileSchema.findOne({
guildId,
userId

})

let coins= 0
if (result) {coins =result.coins}

else {
await new profileSchema({
    guildId,
    userId,
    coins
}).save()

}
return coins

}

) 


}