const Todo = require("../model/Todo");


exports.deleteTodo = async(req, resp) =>{
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete({_id: id});

        resp.status(200).json({
            success: true,
            msg: "DELETED SUCCESSFULLY",
        })
    }
    catch(err){
        resp.status(400).json({
            success: false,
            msg: "FAILED SERVER ERROR"
        })
    }
}