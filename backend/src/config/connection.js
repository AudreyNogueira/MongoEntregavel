const mongoose = require('mongoose');

function connection() {
    mongoose.connect("mongodb://localhost:27017/fseletro", {
         useNewUrlParser: true,
          useUnifiedTopology: true 
        })
    
    .then(() => {
        console.log("MongoDB conectou com sucesso!")
    })
    .catch((error) => {
        console.log(error)
    })
}

module.exports = connection()