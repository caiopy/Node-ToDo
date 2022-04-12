const mongoose = require('mongoose');



// do not execute the mongoose.connect() here unless u want the connection to the DB happend after the server start
// connectDB returns a promise
const connectDB = (url) =>{
  return mongoose
  .connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false,
    useUnifiedTopology:true
  })
}

// the second argument on .connect() isn't required on mongoose version 6 above
//they remove the warnings on version 5 

module.exports = connectDB