import {useEffect} from 'react'
import { useMotionValue,useMotionTemplate,motion, animate } from 'motion/react'
import { FaLinkedinIn,FaInstagram ,FaYoutube  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Hero = () => {
    const COLORS = ["#13FFAA","#0EF3C5","#FF4DA6","#7791C4"]
    const color = useMotionValue(COLORS[0]);//motion value is tool which changes fastly rathen than rendering the whole component
    const backgroundImage = useMotionTemplate`radial-gradient(100% 100% at 50% 0%,#020617 80%,${color})`

    useEffect(()=>{
        //animate a motin value
        animate(color,COLORS,{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
        })
    })
    
  return (
    <>
      <motion.div
        className='h-screen md:h-[60vh] w-full px-10 py-5'
        style={{
            backgroundImage,
        }
      }>
        <div className='flex flex-col md:flex-row gap-3 md:gap-0 md:items-center md:justify-between text-white list-none md:px-10 md:py-5'>
          <div>
            <h1 className='text-white text-[3rem] font-heading'>Sync</h1>
            <div className="flex gap-6 text-white mt-10 text-[1.6rem]">
              <FaLinkedinIn className='hover:text-[1.8rem] cursor-pointer hover:text-blue-400'/>
              <FaInstagram className='hover:text-[1.8rem] cursor-pointer hover:text-pink-500'/>
              <FaXTwitter className='hover:text-[1.8rem] cursor-pointer hover:text-white'/>
              <FaYoutube className='hover:text-[1.8rem] cursor-pointer hover:text-red-400'/>
            </div>
            <p className='text-[0.75rem] text-white mt-10 font-heading'>Copyright ©2026 Sync Communications, Inc. All rights reserved.</p>
          </div>
          <div className='flex flex-col gap-2 mt-3'>
            <h1 className='text-[1.5rem] font-semibold'>Company</h1>
            <li>Careers</li>
            <li>Company News</li>
            <li>Privact</li>
            <li>Terms and Conditions</li>
            <li>Sustanaibilty</li>
          </div>
          <div className='flex flex-col gap-2 mt-3'>
              <h1 className='text-[1.5rem] font-semibold'>Support</h1>
              <li>Test Zoom</li>
              <li>Account</li>
              <li>Contact us</li>
              <li>Feedback</li>
              <li>Developer Support</li>
            </div>
        </div>
    </motion.div>
    </>
  )
}

export default Hero