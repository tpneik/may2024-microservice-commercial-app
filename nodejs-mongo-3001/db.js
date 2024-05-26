const mongoose = require('mongoose')
const MONGO_URL = 'mongodb://root:example@mongodb:27017/mydata'

async function connectDb(){
    try{
        await mongoose.connect(MONGO_URL, {
            authSource:"admin",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Done connecting to MongoDB')
    } catch(error){
        console.log(error)
        console.error('Connect Error!')
        process.exit(1)
    }
}
module.exports = connectDb