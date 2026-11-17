import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    complited: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps: true
    });

const ToDoModel = mongoose.model("ToDoModel", todoSchema);
export default ToDoModel;