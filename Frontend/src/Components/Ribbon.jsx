import {useRef} from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Zooper from './Zooper';
import Cards from './Cards';
import Btn from './Btn';

gsap.registerPlugin(ScrollTrigger);

const Ribbon = () => {
  const ribRef = useRef(null);

  useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ribRef.current,
      start: "top 85%", 
      end: "bottom center",
      scrub: 1.5,
    },
  });

  tl.to(".ribh2", { x: 500, ease: "power1.inOut" }, 0)
    .to(".ribh3", { x: -500, ease: "power1.inOut" }, 0);

}, { scope: ribRef });

  return (
    <div 
      className="h-350 md:h-350 overflow-hidden flex flex-col gap-8 relative w-full items-center justify-between mt-36 "
      ref={ribRef}
    >  
        <h1 className='ribh ribh2 top-[20%] -rotate-12 left-[-20%]'>Connect to your loved ones</h1>
        <h1  className='ribh ribh3 text-nowrap top-[25%] rotate-12 right-[-20%]'>Get Started with sync</h1>
        <div className='absolute top-[45%] flex flex-col items-center gap-7'>
          <Zooper/>
          <Btn />
        </div>

        {/* BOTTOM SECTION: Cards */}
        <div className='absolute top-[65%]'>
          <Cards />
        </div>
    </div>
    
  )
}

export default Ribbon   