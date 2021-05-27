const mongoose = require('mongoose')
const mongopath = 'mongolink placeholder'

module.exports= async () => {
    await mongoose.connect(mongopath, {

        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return mongoose
}