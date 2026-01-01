import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["rgba(0, 0, 0, 0)", "rgba(255, 255, 255, 0.1)"]
  );

  const backdropFilter = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["blur(0px)", "blur(12px)"]
  );

  return (
    <>
      {/* Navbar */}
      <motion.div
        className="fixed top-0 w-full flex justify-between items-center text-white px-8 md:px-15 py-6 font-heading z-40 bg-transparent"
        style={{
          backgroundColor,
          backdropFilter,
          WebkitBackdropFilter: backdropFilter,
        }}
      >
        <Link className="text-[1.75rem] font-semibold" to='/'>Sync</Link>

        <div className="hidden md:flex gap-5 text-[1.1rem] items-center">
          <Link to="/">Join as Guest</Link>
          <Link to="/register">Register</Link>
          <button className="btn">
            <Link to="/login">Login</Link>
          </button>
        </div>

        {isOpen ? (
          <RxCross1
            className="md:hidden text-white cursor-pointer text-[2rem] z-40"
            onClick={toggleMenu}
          />
        ) : (
          <RxHamburgerMenu
            className="md:hidden text-white cursor-pointer text-[2rem]"
            onClick={toggleMenu}
          />
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 bg-black h-screen w-screen flex flex-col gap-7 justify-center items-center text-white z-30"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Link to="/" onClick={() => setIsOpen(false)}>
              Join as Guest
            </Link>
            <Link to="/register" onClick={() => setIsOpen(false)}>
              Register
            </Link>
            <button className="btn bg-white px-7 py-2 ">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
