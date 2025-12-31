import {useRef} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import Ribbon from './Ribbon';
import Btn from './Btn';

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
    const heroref = useRef(null);

    useGSAP(()=>{
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger:".vio",
                start: "top 70%",
                end: "top 0%",
                scrub: true,
            }
        })
        
        tl.to('.vio',{
            width:"90%"
        })
        
        
    },{ scope: heroref })

  return (
    <>
        <div className='min-h-screen flex flex-col justify-between items-center ' ref={heroref}>
            <div className='h-[85%] flex flex-col justify-center items-center text-center gap-7 px-3 py-36'>
                <div>
                    <h1 className='heroh text-[2.5rem] md:text-[5rem] font-heading tracking-tight leading-14 md:leading-20 font-semibold' >
                        Find out what's possible <br /> when work connects
                    </h1>
                    <p className='parah text-[1.2rem] font-heading font-semibold mt-[1.7rem]'>
                        Whether you're chatting with teammates or supporting customers, Sync makes it easier to  <br />connect, collaborate, and reach goals
                    </p>
                </div>
                <Btn></Btn>
            </div>
            <div className='flex items-center justify-center'>
                <video src="/video.mp4" className='w-[60%] align-end vio' muted autoPlay loop></video>
            </div>
            <Ribbon></Ribbon>
        </div>
    </>
  )
}

export default Hero