const { default: mongoose } = require('mongoose');
const DB = process.env.DATABASE
mongoose.connect(DB).then(()=>{
    console.log('Connected TO DB')
}).catch((err)=>console.log('No connection'));