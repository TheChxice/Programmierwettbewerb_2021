const mongoose = require('mongoose')
const mongopath = 'mongopath'
module.exports= async () => {
    await mongoose.connect(mongopath, {

        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return mongoose
}