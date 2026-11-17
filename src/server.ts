import express from "express";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import router from "./routes/todo_routes";
import connectDb from "./config/db";
dotenv.config();  //!=> env عشان اقرا المتغيرات داخل ملف  
const app = express();
const port = process.env.PORT;
connectDb();

app.use(express.json());
/** 
 1- app.use(express.json());  =>   express جاهز من  middelware ده اسمه
  2- JSON بصيغة  Request وظيفته إنه يستقبل البيانات اللي جاية من الـ 
  در تتعامل معاه JavaScript ويحولها لكائن 
 */

//!logger
app.use((req: Request,
    res: Response,
    next: NextFunction) => {
    console.log(`${req.method}${req.url}`)
    console.log(`${res.json.toString}`)
    next();
})
app.use("/api/todos", router);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});