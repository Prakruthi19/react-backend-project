const express = require('express');

const router = express.Router();

const {addTodo} = require("../controller/addTodo");
const {getTodo, getTodoById} = require("../controller/getTodo");
const {updateTodo} = require("../controller/updateTodo");
const {deleteTodo} = require("../controller/deleteTodo");

router.post("/first", addTodo);
router.get("/getall", getTodo);
router.get("/getById/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);
module.exports = router;

