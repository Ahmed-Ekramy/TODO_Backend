import express from "express";
import ToDoModel from "../models/todo";
import { createToDo, getAllToDo, getToDoById, editeToDoById, deleteToDoById } from "../controller/todo_controllers";
const router = express.Router();

router.get("", getAllToDo);
router.get("/:id", getToDoById)
router.post("", createToDo);
router.put("/:id", editeToDoById);
router.delete("/:id", deleteToDoById);
export default router; 