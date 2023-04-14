const mongoose = require('mongoose');

connectDatabase = () => {
    // url="mongodb+srv://divya_admin:divya2933@cluster0.vk1tkhq.mongodb.net/?retryWrites=true&w=majority";
    url="mongodb://admin:123456@mongodb:27017" 
    mongoose.connect(url).then(console.log("Database connected successfully")).catch((error) => {console.log(error)})
} 

module.exports = connectDatabase;