import express from  'express'
import mongoose from 'mongoose';
import http from "http"
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userRoutes from './Routes/user.routes.js'
import { connectToSocket } from './Controllers/socketManager.js';
dotenv.config();

const app = express();
const server = http.createServer(app);
const port = process.env.PORT||8080;
const uri = process.env.MONGO_URI;
const io = connectToSocket(server);

const corsOptions = {
    origin:"http://localhost:5173",
    credentials:true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions))

app.use("/",userRoutes);

const start = async()=>{
    await mongoose.connect(uri)
        .then(()=>{
            console.log("connected to Database")
        })
}

start();

server.listen(port,(req,res)=>{
    console.log(`app is listening on port : ${port}`);
})
