import logoWhite from '/src/assets/logowhite.svg'
import {Link} from "react-router";
import {motion} from "framer-motion";


const navLinks = [{
    name: "Services", to: "Services"
}, {
    name: "Work", to: "Work"
}, {
    name: "Team", to: "Team"
}, {
    name: "Pricing", to: "Pricing"
}, {
    name: "Awards", to: "Awards"
}, {
    name: "Contact", to: "Contact"
}, {
    name: "About us", to: "About us"
},]


export const NavBar = () => {
    return (<nav className={`py-5 max-h-[5rem] mx-20`}>
        <div className={`flex justify-around items-center`}>
            <Link to={'/'} className="cursor-pointer group">
                <img src={logoWhite} alt={"logo"}/>
            </Link>

            <div>
                <ul className="flex justify-around items-center w-[40rem] h-[3rem] px-1
               rounded-full bg-white/10 backdrop-blur-lg border-none
               shadow-[0_0_20px_rgba(255,255,255,0.15)]">

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