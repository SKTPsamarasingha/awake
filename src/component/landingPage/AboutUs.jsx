import SplitBlurText from "../ui/SplitBlurText.jsx";
import {FaPlus} from "react-icons/fa6";
import {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import CountUp from "react-countup";
import {stats, tags} from "../../constants/data.js";


export const AboutUs = () => {
    const containerRef = useRef(null); // Ref for the whole section
    const tagRef = useRef(null);
    const statsRef = useRef(null);
    const [startCount, setStartCount] = useState(false);

    useGSAP(() => {
        const children = gsap.utils.toArray(tagRef.current.children);

        children.forEach((tag, i) => {
            const direction = tags[i].from;
            gsap.from(tag, {
                x: direction.x,
                y: direction.y,
                opacity: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "top 20%",
                    scrub: 1.5
                },
                ease: "power2.out"
            });
        });

        gsap.to(statsRef.current, {
            scrollTrigger: {
                trigger: statsRef.current,
                start: "top 100%", // Triggers when top of grid is % down the screen
                onEnter: () => setStartCount(true),
                once: true,
            }
        });

    }, {scope: containerRef});

    return (
        <section
            ref={containerRef}
            className="relative  flex flex-col items-center text-center mt-30">

            <SplitBlurText
                className="w-[70rem] z-20 text-white font-[450] text-[48px] md:text-[48px] text-center text-sm/12 tracking-normal">
                Crafting effective, technology-driven strategies <br/>
                <span className="text-white font-serif italic ml-5 font-[23px]"> for impactful results</span>

                .</SplitBlurText>

            <div ref={tagRef} className="flex gap-5 mt-12">
                {tags.map(({text, bgClass, textClass, icon: Icon}) => (
                    <div
                        key={text}
                        className={`border-none w-[16rem] h-[4rem] ${bgClass} ${textClass} font-serif italic flex items-center justify-center gap-3 rounded-full border border-current/20`}
                    >
                        <Icon className="w-9 h-9"/>
                        <span className="text-[35px]">{text}</span>
                    </div>
                ))}
            </div>

            <div ref={statsRef} className={`mt-30 grid grid-cols-1 md:grid-cols-3 gap-60 relative left-10`}>

                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center relative"
                    >
                        {index !== 0 && (
                            <div
                                className="absolute -left-15 top-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-gradient-to-b from-transparent via-white/70 to-transparent hidden md:block"/>
                        )}
                        <FaPlus className="w-15 h-15 text-white absolute top-1 -left-10"/>

                        <CountUp
                            key={startCount ? 'started' : 'waiting'} // Force re-mount when state changes
                            start={0}
                            end={startCount ? item.value : 0} // Hold at 0 until startCount is true
                            duration={3}
                            separator=","
                            className="text-white font-sans text-[10rem] md:text-[10rem] font-semibold leading-none"
                        />


                        <p className="text-grey  text-[18px] tracking-wide">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default AboutUs