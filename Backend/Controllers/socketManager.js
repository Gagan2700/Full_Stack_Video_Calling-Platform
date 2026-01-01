import { Server } from "socket.io";

let connections = {};
let messages = {};
let timeOnline = {};

export const connectToSocket = (server)=>{
    const io =  new Server(server,{
        cors:{
            origin:"http://localhost:5173",
            credentials:true,
        }
    });

    // io.on("connection",(socket)=>{

    //     socket.on('join-call',()=>{

    //     })

    //     socket.on('signal',())
    // })

    return io;
}