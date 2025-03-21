const { default: mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title: 
        {
            type: "string",
            requrired: true,
            maxLength: 50,
        },
        description:{
            type: "string",
            required: true,
            maxLength: 100
        }
    }
);

module.exports = mongoose.model("Todo", todoSchema);