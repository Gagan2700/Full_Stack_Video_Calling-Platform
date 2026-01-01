import {useState} from 'react'
import { Link } from 'react-router-dom'
import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import axios from 'axios';

const Signup = () => {
    const [ty,setTy] = useState("password")
    const [data,setData] = useState({
        username:"",
        password:"",
    })

    const handleClick = ()=>{
        if(data.password===""){
            return;
        }
        if(ty==="password"){
            setTy("text")
        }else{
            setTy("password")
        }
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res = await axios.post("http://localhost:8080/login",{
                username:data.username,
                password:data.password,
            },{withCredentials:true}
        )
        console.log(res.data)
    }
    
    const handleChange = (e)=>{
        const { name, value } = e.target;
         setData((prev)=>({
            ...prev,
            [name]:value,
         }))
    }

  return (
    <div className="w-full h-screen flex justify-center items-center ">
        <div className="flex flex-col text-center items-center justify-center border-2 border-white py-15 px-10 rounded-lg shadow-lg shadow-cyan-500 focus-within:shadow-xl">
            <h1 className='text-[2.75rem] font-heading font-semibold '>Login</h1>
            <form className='flex flex-col gap-5 lg:mt-12 mt-7' onSubmit={handleSubmit} >
                <input type="text" placeholder='Username' name='username' value={data.username} onChange={handleChange}/>
                <div className='focus-within:outline-2 focus-within:border-0 outline-cyan-400 flex border-2 rounded-lg items-center'>
                    <input type={ty} placeholder='Password' name='password' className='outline-none w-[90%]' value={data.password} onChange={handleChange}/>
                    {
                        ty==="password"?<IoEye className='text-[1.3rem] cursor-pointer' onClick={handleClick} ></IoEye>:<IoIosEyeOff className='text-[1.3rem] cursor-pointer' onClick={handleClick} />
                    }
                </div>
                <p>Don't Have an Account <Link to='/signup' className='underline font-bold'>Signup</Link></p>
                <button className='btn'>
                    Login
                </button>
            </form>
        </div>
    </div>
  )
}

export default Signup