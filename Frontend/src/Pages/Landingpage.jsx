import { animate, motion, useMotionValue, useTransform } from "motion/react"
import Hero from "../Components/Hero"
import Footer from '../Components/Footer'
import Show from "../Components/Show"
import { useEffect } from "react"
import Navbar from "../Components/Navbar"

const Landingpage = () => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    const controls = animate(count, 100, { duration: 3 })
    return () => controls.stop()
  }, [])

    const logoContainer = {
    hidden: {},
    show: {
        transition: {
        staggerChildren: 0.15,
        },
    },
    }

    const logoItem = {
    hidden: {
        y: 80,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
        ease: "easeOut",
        duration: 0.6,
        },
    },
    }


  return (
    <>
        <motion.div
            className="fixed inset-0 bg-black flex flex-col gap-10 justify-center items-center z-50"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 1, delay: 3 }}
            >
            {/* Logo */}
            <motion.h1
                className="text-white text-[6rem] flex overflow-hidden"
                variants={logoContainer}
                initial="hidden"
                animate="show"
                >
                {["S", "Y", "N", "C"].map((char, i) => (
                    <motion.span
                    key={i}
                    variants={logoItem}
                    className="inline-block font-heading"
                    >
                    {char}
                    </motion.span>
                ))}
            </motion.h1>


            {/* Spinner */}
            <motion.div
                className="h-3 w-[5rem] bg-white"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />

            {/* Counter */}
            <motion.pre className="text-white text-[5rem] font-heading ">
                {rounded}
            </motion.pre>
        </motion.div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Show></Show>
        <Footer/>
    </>
  )
}

export default Landingpage
