import logoWhite from '/src/assets/logowhite.svg'
import {Link} from "react-router";
import {motion} from "framer-motion";
import {navLinks} from "../constants/data.js";
import {useScroll, useMotionValueEvent} from "framer-motion";
import {useState} from "react";


export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const {scrollY} = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (<nav
        className={`
                fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[70rem] rounded-full px-1 py-3
                transition-all duration-500 ease-in-out
                 ${isScrolled ? "bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl" : "bg-transparent"}
            `}>
        <div className={`flex justify-around items-center rounded-full px-4`}>
            <Link to={'/'} className="cursor-pointer group">
                <img src={logoWhite} alt={"logo"}/>
            </Link>

            <div>
                <ul className="flex justify-around items-center w-[40rem] h-[3rem] px-1
               rounded-full bg-white/10 backdrop-blur-lg border-none">

                    {navLinks.map((link) => (<motion.li
                        key={link.name}
                        whileHover={{
                            scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)", color: "#000"
                        }}
                        whileTap={{scale: 0.95}}
                        transition={{
                            type: "spring", stiffness: 400, damping: 17
                        }}
                        className="flex items-center justify-center h-[85%] w-full text-white font-medium cursor-pointer rounded-full"
                    >
                        {link.name}
                    </motion.li>))}
                </ul>
            </div>

            <div>
                <button
                    className='inset-shadow-sm inset-shadow-white/20 group cursor-pointer px-4 py-1.5 rounded-full relative overflow-hidden shadow-xl shadow-black/50 transition-transform active:scale-95'>
                    <Link
                        to='/'
                        className="relative z-10 text-white font-semibold group-hover:text-black transition-colors duration-500"
                    >
                        Create account </Link>
                    <span
                        className='absolute inset-0 bg-white w-0 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300 ease-out z-0'/>
                </button>


            </div>


        </div>
    </nav>)
}


export default NavBar