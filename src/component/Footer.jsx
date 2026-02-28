import {useEffect, useRef} from "react";
import {motion, useInView} from "framer-motion";
import {gsap} from "gsap";


const IconX = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);

const IconLinkedIn = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

const IconDribbble = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path
            d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12zm7.369 5.674A10.127 10.127 0 0120.09 10.7c-.265-.063-2.892-.588-5.54-.255-.064-.148-.118-.295-.185-.442a29.49 29.49 0 00-.558-1.183c2.936-1.197 4.272-2.919 4.562-3.146zM12 2.009c2.478 0 4.748.906 6.479 2.396-.248.209-1.444 1.822-4.285 2.879C12.848 5.155 11.32 3.3 11.058 2.98A10.15 10.15 0 0112 2.009zM8.971 3.706c.245.308 1.741 2.172 3.074 4.229-3.875 1.03-7.297 1.011-7.66 1.008A10.114 10.114 0 018.971 3.706zM1.9 12.014v-.264c.352.009 4.388.073 8.515-1.178.237.465.466.939.681 1.413-.109.031-.22.063-.327.099-4.268 1.378-6.531 5.139-6.728 5.474A10.069 10.069 0 011.9 12.014zm10.1 10.089c-2.203 0-4.238-.718-5.88-1.914.155-.315 1.93-3.736 6.618-5.383.019-.007.036-.014.054-.02 1.186 3.076 1.674 5.657 1.8 6.392a10.083 10.083 0 01-2.592.925zm4.528-1.688c-.086-.514-.536-2.973-1.635-6.001 2.474-.395 4.641.254 4.914.337a10.119 10.119 0 01-3.279 5.664z"/>
    </svg>
);

const IconInstagram = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
);

const IconChevronUp = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
         strokeLinejoin="round" className="w-4 h-4">
        <polyline points="18 15 12 9 6 15"/>
    </svg>
);

const AwakeLogo = () => (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M14 2L24 8V20L14 26L4 20V8L14 2Z" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M14 7L19 10.5V17.5L14 21L9 17.5V10.5L14 7Z" fill="white"/>
    </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const sitemap = ["Contact us", "About us", "Work", "Services", "Pricing"];
const otherPages = ["Error 404", "Terms & Conditions", "Privacy Policy", "Documentation"];
const socials = [
    {icon: <IconX/>, label: "X"},
    {icon: <IconLinkedIn/>, label: "LinkedIn"},
    {icon: <IconDribbble/>, label: "Dribbble"},
    {icon: <IconInstagram/>, label: "Instagram"},
];

// ─── Animation variants ────────────────────────────────────────────────────────

const fadeUp = {
    hidden: {opacity: 0, y: 32},
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08},
    }),
};

const linkHover = {
    rest: {x: 0},
    hover: {x: 4, transition: {duration: 0.2, ease: "easeOut"}},
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function NavLink({children, index}) {
    return (
        <motion.li variants={fadeUp} custom={index} initial="hidden" animate="visible">
            <motion.a
                href="#"
                variants={linkHover}
                initial="rest"
                whileHover="hover"
                className="text-[#999] text-[13.5px] font-normal tracking-[-0.01em] hover:text-white transition-colors duration-200 inline-block"
            >
                {children}
            </motion.a>
        </motion.li>
    );
}

function SocialIcon({icon, label, index}) {
    const btnRef = useRef(null);

    const handleEnter = () => {
        gsap.to(btnRef.current, {y: -3, duration: 0.2, ease: "power2.out"});
    };
    const handleLeave = () => {
        gsap.to(btnRef.current, {y: 0, duration: 0.25, ease: "elastic.out(1,0.6)"});
    };

    return (
        <motion.a
            ref={btnRef}
            href="#"
            aria-label={label}
            className="text-[#999] hover:text-white transition-colors duration-200"
            variants={fadeUp}
            custom={index}
            initial="hidden"
            animate="visible"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            {icon}
        </motion.a>
    );
}

function ScrollTopButton() {
    const btnRef = useRef(null);

    const handleClick = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
        gsap.fromTo(
            btnRef.current,
            {scale: 0.88},
            {scale: 1, duration: 0.4, ease: "elastic.out(1.2, 0.5)"}
        );
    };

    return (
        <motion.button
            ref={btnRef}
            onClick={handleClick}
            className="fixed bottom-7 right-7 w-10 h-10 rounded-lg flex items-center justify-center text-white cursor-pointer z-50"
            style={{backgroundColor: "#4928fd"}}
            initial={{opacity: 0, scale: 0.7}}
            animate={{opacity: 1, scale: 1}}
            transition={{delay: 0.8, duration: 0.4, ease: [0.22, 1, 0.36, 1]}}
            whileHover={{scale: 1.08}}
            whileTap={{scale: 0.93}}
            aria-label="Scroll to top"
        >
            <IconChevronUp/>
        </motion.button>
    );
}

// ─── Divider line animation via GSAP ──────────────────────────────────────────

function AnimatedDivider() {
    const lineRef = useRef(null);
    const inView = useInView(lineRef, {once: true});

    useEffect(() => {
        if (inView && lineRef.current) {
            gsap.fromTo(
                lineRef.current,
                {scaleX: 0, transformOrigin: "left center"},
                {scaleX: 1, duration: 1, ease: "power3.inOut", delay: 0.1}
            );
        }
    }, [inView]);

    return (
        <div ref={lineRef} className="h-px w-full" style={{backgroundColor: "rgba(255,255,255,0.08)"}}/>
    );
}

// ─── Main Footer ──────────────────────────────────────────────────────────────

export default function Footer() {
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, {once: true, margin: "-80px"});

    // GSAP stagger on nav column titles when in view
    useEffect(() => {
        if (isInView && footerRef.current) {
            gsap.fromTo(
                footerRef.current.querySelectorAll(".col-title"),
                {opacity: 0, y: 18},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.15,
                }
            );
        }
    }, [isInView]);

    return (
        <>
            <footer
                ref={footerRef}
                className="w-full pt-16"
                style={{
                    backgroundColor: "#141516",
                    fontFamily: '"Inter Tight", system-ui, sans-serif',
                }}
            >
                <div className="max-w-[1080px] mx-auto px-10">
                    {/* ── Top grid ── */}
                    <div className="grid grid-cols-4 gap-12 pb-14">

                        {/* Brand */}
                        <motion.div
                            variants={fadeUp}
                            custom={0}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <a href="#" className="flex items-center gap-2.5 mb-4 no-underline">
                                <AwakeLogo/>
                                <span className="text-white text-[17px] font-semibold tracking-[-0.02em]">
                  Awake
                </span>
                            </a>

                            <p className="text-[#999] text-[13px] leading-relaxed font-normal max-w-[210px]">
                                Empowering businesses with innovative solutions. Let's create something amazing
                                together.
                            </p>

                            <div className="flex items-center gap-3.5 mt-6">
                                {socials.map((s, i) => (
                                    <SocialIcon key={s.label} icon={s.icon} label={s.label} index={i + 1}/>
                                ))}
                            </div>
                        </motion.div>

                        {/* Sitemap */}
                        <div>
                            <h3
                                className="col-title text-[11px] font-semibold tracking-[0.07em] uppercase mb-5 opacity-0"
                                style={{color: "#CCCCCC"}}
                            >
                                Sitemap
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {sitemap.map((item, i) => (
                                    <NavLink key={item} index={i}>{item}</NavLink>
                                ))}
                            </ul>
                        </div>

                        {/* Other Pages */}
                        <div>
                            <h3
                                className="col-title text-[11px] font-semibold tracking-[0.07em] uppercase mb-5 opacity-0"
                                style={{color: "#CCCCCC"}}
                            >
                                Other Pages
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {otherPages.map((item, i) => (
                                    <NavLink key={item} index={i}>{item}</NavLink>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Details */}
                        <motion.div
                            variants={fadeUp}
                            custom={3}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <h3
                                className="col-title text-[11px] font-semibold tracking-[0.07em] uppercase mb-5 opacity-0"
                                style={{color: "#CCCCCC"}}
                            >
                                Contact Details
                            </h3>
                            <p className="text-[#999] text-[13px] leading-relaxed mb-3.5">
                                81 Rivington Street London EC2A 3AY
                            </p>
                            <p className="mb-3.5">
                                <a
                                    href="mailto:hello@awake.agency"
                                    className="text-[#999] text-[13px] hover:text-white transition-colors duration-200"
                                >
                                    hello@awake.agency
                                </a>
                            </p>
                            <p>
                                <a
                                    href="tel:01051923556"
                                    className="text-[#999] text-[13px] hover:text-white transition-colors duration-200"
                                >
                                    0105 192 3556
                                </a>
                            </p>
                        </motion.div>

                    </div>

                    {/* ── Divider ── */}
                    <AnimatedDivider/>

                    {/* ── Bottom bar ── */}
                    <motion.div
                        className="py-5 text-center"
                        variants={fadeUp}
                        custom={5}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <p className="text-[#999] text-[13px]">
                            ©2026 Awake. All Rights Reserved
                        </p>
                    </motion.div>

                </div>
            </footer>

            <ScrollTopButton/>
        </>
    );
}