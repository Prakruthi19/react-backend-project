//mongodb+srv://prakruthikoteshwar:9z9sR7VAs9gccxvF@data.68ao1.mongodb.net/React Backend

const express= require('express');
const app = express();
app.use(express.json());

const dbconnect = require('./config/db');
const router = require("./routes/todo");

dbconnect();


app.use("/api/v1", router);

// app.use(express.json());
// let arr = [];
// app.post("/abc", (req, resp) =>{
//     const{name, phone, email} = req.body;
//     const newentry = {
//         name: name,
//         phone: phone,
//         email: email
//     }
//     arr.push(newentry);
//     resp.send(arr);
// })
app.listen(3000, () =>
{
    console.log("SERVER IS ON PORT 3000");
})

app.get("/", (req,rep) =>{
    rep.send('HELLO WELCOME TO HOME PAGE');

})

app.get("/admin", (req, rep) =>
{
    rep.send("HELLO WELCOME TO ADMIN PAGE");
})

