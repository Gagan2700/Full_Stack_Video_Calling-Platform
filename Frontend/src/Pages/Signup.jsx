import {useState} from 'react'
import { Link } from 'react-router-dom'
import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import axios from 'axios'

const Signup = () => {
    const [ty,setTy] = useState("password")
    const [data,setData] = useState({
        username:"",
        name:"",
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
        const res = await axios.post("http://localhost:8080/signup",{
            username:data.username,
            name:data.name,
            password:data.password
        },{withCredentials:true})

        console.log(res.data);
    }

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

  return (
    <div className='flex flex-col gap-12 lg:flex-row lg-gap-0 pt-3 lg:pt-0 mt-5'>
        <div className="lg:w-1/2 px-10 lg:px-[5.1rem]py-[2.1rem] flex flex-col items-center lg:justify-around lg:h-screen">
            <img className='lg:w-[45vh] h-[25vh] lg:h-auto' src="/signup.png" alt="" />
            <div className='lg:flex-col bg-white px-5 py-10 text-black rounded-2xl shadow-xl shadow-cyan-500/50'>
                <h1 className='text-[1.5rem] font-heading font-semibold '>Create Your Basic free Account</h1>
                <p className='text-[1.04rem]  pt-3'>Unlimited instant meassaging</p>
                <p className='text-[1.04rem] '>Share Screen option</p>
            </div>
        </div>
        <div className="w-full h-[50vh] lg:w-1/2 lg:h-auto flex flex-col text-center items-center justify-center">
            <h1 className='text-[1.75rem] font-heading font-semibold '>Let's Get Started</h1>
            <form className='flex flex-col gap-5 lg:mt-12' onSubmit={handleSubmit}>
                <input required type="text" placeholder='Username' name='username' value={data.username} onChange={handleChange}/>
                <input required type="text" placeholder='Name' name='name' value={data.name} onChange={handleChange}/>
                <div className='focus-within:outline-2 focus-within:border-0 outline-cyan-400 flex border-2 rounded-lg items-center'>
                    <input required type={ty} placeholder='Password' name='password' className='outline-none w-[90%]' value={data.password} onChange={handleChange}/>
                    {
                        ty==="password"?<IoEye className='text-[1.3rem] cursor-pointer' onClick={handleClick} ></IoEye>:<IoIosEyeOff className='text-[1.3rem] cursor-pointer' onClick={handleClick} />
                    }
                </div>
                <p>Already Have an Account <Link to='/login' className='underline font-bold'>Login</Link></p>
                <button className='btn'>
                    Signup
                </button>
            </form>
        </div>
    </div>
  )
}

export default Signup