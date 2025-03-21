const Todo = require("../model/Todo");

exports.getTodo = async(req, resp) =>{
    try{
        const todo = await Todo.find({});
        resp.status(200).json({
            success : true,
            msg: "HERE IS YOUR DATA",
            data: todo
        })
    }
    catch (err)
    {
        resp.status(400).json({
            success: false,
            msg:"ERROR WHILE GETTING DATA",
            data: err.message,
        })
    }
}
exports.getTodoById = async(req, resp) =>{
    try{
        const id = req.params.id;
        const ans = await Todo.find({_id : id});
        if(ans.length == 0){
            return resp.status(404).json({
                success: false,
                msg: "DATA NOT FOUND"
            })
        }
        resp.status(200).json({
                success: true,
                msg: "DATA IS FOUND",
                data: ans,
        })
    }
    catch (err)
    {
        resp.status(500).json({
            success: false,
            msg:"SERVER ERROR",
            data: err.message,
        })
    }
}