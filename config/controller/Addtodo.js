const Todo = require("../model/Todo");


exports.Addtodo = async(req, res) =>{
    try{
        const {title, description} = req.body;
        const response = await Todo.create({title, description});
        res.status(200).json({
            success:true,
            data: response,
            msg : "DATA Submitted to DB"
        })

        }
    catch(err)
    {
        res.status(500).json({
            success: false,
            data: "INTERNAL SERVER ERROR",
            msg: err.message
        })
    }
}