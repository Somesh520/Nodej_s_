const mongoose=require('mongoose');
const mongourl='mongodb://localhost:27017/hotels'
mongoose.connect(mongourl,{useNewUrlParser: true, useUnifiedTopology:true})
const db=mongoose.connection;
db.on('connected',()=>{console.log("server is connected");
});
db.on('disconnected',()=>{console.log("server is disconected");
});
db.on('error',(err)=>{console.log("something wrong !error");
});
module.export=db;