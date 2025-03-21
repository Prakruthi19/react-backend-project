const Todo = require("../model/Todo");

exports.updateTodo = async(req, resp) =>{
    try{
        const {id} = req.params;
        const {title, description} = req.body;
        const ans = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description},
            {new: true},
        )

        resp.status(200).json({
            success: true,
            data: ans,
            msg: "UPDATED SUCCESSFULLY"
        })
    }
    catch (err){
        resp.status(500).json({
            success: false,
            err: "SERVER ERROR"
        })
    }
}