const mongoose = require("mongoose");
let url = "mongodb+srv://prakruthikoteshwar:9z9sR7VAs9gccxvF@data.68ao1.mongodb.net/react_backend"
const dbconnect = ()=> {
    mongoose.connect(url, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to db"))
    .catch((error) =>
    {
        console.log(error);
        console.log("ERROR OCCURED");
    })
}

module.exports=dbconnect;