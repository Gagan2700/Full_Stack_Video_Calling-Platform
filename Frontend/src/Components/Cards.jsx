import {useRef} from 'react'
import {motion,useMotionValue,useSpring, useTransform} from 'motion/react'

const Cards = () => {
  return (
    <div className='md:flex mt-12 gap-22 '>
        <TiltCards src='/Copy.png'/>
        <TiltCards/>
        <TiltCards src='/Share.png'/>
    </div>
  )
}

export default Cards


export const TiltCards = ({src='/meeting.png'})=>{
    const heref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
    
    const handleMove=(e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX-rect.left;
        const mouseY = e.clientY-rect.top;

        const xpy = mouseX/width - 0.5
        const ypy = mouseY/height -0.5
        x.set(xpy);
        y.set(ypy)
    }

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };
    

    return(
        <motion.div 
            style={{
                rotateY,
                rotateX,
                transformStyle:"preserve-3d",
            }}
            onMouseMove={handleMove}
            onMouseLeave={handleMouseLeave}
            className='relative h-99 w-72 bg-linear-to-r from-indigo-300 to-violet-300 rounded-xl'
            ref={heref}
        >
            <motion.div
                style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                        backgroundImage:`url(${src})`,
                        backgroundSize:"contain",
                        objectFit:"contain",
                        objectPosition:"center",
                    }}
                className="absolute inset-4 grid place-content-center rounded-xl shadow-lg hover:scale-[1.01] "
            >
                
            </motion.div>
        </motion.div>
    )
}