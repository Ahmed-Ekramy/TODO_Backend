import ToDoModel from "../models/todo";
import { Request, Response } from "express";
import mongoose from "mongoose";
export const createToDo = async (req: Request, res: Response) => {
    try {
        const { title, complited } = req.body;
        if (!title || typeof title !== "string" || !title.trim()) {
            return res.status(400).json({ massage: "invalid title" })
        }
        const todo = new ToDoModel({
            title: title.trim(),
            complited: complited === true
        })
        await todo.save();
        res.status(201).json(todo)
    } catch (erorr) {
        console.error(erorr);
        res.status(500).json({ massage: "failed to create todo" })

    }
};
export const getAllToDo = async (req: Request, res: Response) => {
    try {

        const todo = await ToDoModel.find().sort({ createdAt: -1 });
        res.status(201).json(todo)
    } catch (erorr) {
        console.error(erorr);
        res.status(500).json({ massage: "failed to create todo" })

    }
};
export const getToDoById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        if (typeof id !== "string" || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ massage: "invalid id" })
        }
        const todo = await ToDoModel.findById(id);
        if (!todo) {
            res.status(400).json({ massage: " Todo Not Found" })
        }
        res.status(201).json(todo)
    } catch (erorr) {
        console.error(erorr);
        res.status(500).json({ massage: "failed to create todo" })

    }
};
export const editeToDoById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { title, complited } = req.body;
        if (!title || typeof title !== "string" || !title.trim()) {
            return res.status(400).json({ massage: "invalid title" })
        }
        if (typeof id !== "string" || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ massage: "invalid id" })
        }
        const todo = await ToDoModel.findByIdAndUpdate(
            id,
            { title: title.trim(), complited: complited === true },
            { new: true }
        );
        if (!todo) {
            res.status(400).json({ massage: " Todo Not Found" })
        }
        res.status(201).json(todo)
    } catch (erorr) {
        console.error(erorr);
        res.status(500).json({ massage: "failed to create todo" })

    }
};
export const deleteToDoById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        if (typeof id !== "string" || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ massage: "invalid id" })
        }
        const todo = await ToDoModel.findByIdAndDelete(
            id,
        );
        if (!todo) {
            res.status(400).json({ massage: " Todo Not Found" })
        }
        res.status(204).json({ massage: "Todo deleted " })
    } catch (erorr) {
        console.error(erorr);
        res.status(500).json({ massage: "failed to create todo" })

    }
};