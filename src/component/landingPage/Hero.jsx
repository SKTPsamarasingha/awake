import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

import {
    ArrowRightIcon, StarIcon
} from "@heroicons/react/24/outline";
import SplashCursor from "../ui/SplashCursor.jsx";
import SplitBlurText from "../ui/SplitBlurText.jsx";
import ArrowBtn from "../ui/ArrowBtn.jsx";
import {avatars, logos} from "../../constants/data.js";
import LogoMarquee from "../ui/LogoMarquee.jsx";
import {useRef, useState} from "react";


const Hero = () => {
    const containerRef = useRef(null);
    const [active, setActive] = useState(false);


    useGSAP(() => {
        gsap.from(containerRef.current.children, {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 1.9,
            stagger: 0.3,
        });
    }, {scope: containerRef});


    return <section
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className="flex flex-col items-center relative w-full h-fit overflow-hidden">
        {/* Background Cursor Component */}
        <div className="absolute inset-0 z-0 pointer-events-auto">
            {/*{active && <SplashCursor/>}*/}
        </div>

        <div className="relative z-10 px-6 max-w-6xl">

            <div className={'flex items-center flex-col gap-10 mt-40'}>
                <SplitBlurText
                    className="z-20 text-white font-[450] text-[86px] md:text-[5.5rem] text-center leading-[1.1] tracking-normal
">
                    Building bold brands <br/> with
                    <span className="text-white font-serif italic ml-5 font-[23px]">thoughtful design</span>
                </SplitBlurText>

                <div ref={containerRef} className={'mt-5 flex flex-col items-center'}>
                    <p className={`text-grey w-[35rem] text-center  text-[14px]`}>At Awake, we help small startups
                        tackle
                        the world’s
                        biggest challenges with tailored solutions, guiding you from strategy to success in a
                        competitive
                        market.</p>

                    <div className={`flex items-center gap-5 mt-8`}>
                        <ArrowBtn
                            text="Get started"
                            Icon={ArrowRightIcon}
                            width={165}
                            height={42}
                            dark={true}

                        />
                        <div className="flex -space-x-2 ml-5">
                            {avatars.map((avatar, index) => <img
                                key={index}
                                className="w-11 h-11 border-2 border-white rounded-full object-cover"
                                src={avatar}
                                alt={`Avatar ${index}`}
                            />)}
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        className={`w-5 h-5 ${i < 4 ? 'fill-yellow-primary' : 'fill-none stroke-current'}`}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-500 text-center mt-2">
                                Trusted by 1000+ clients
                            </p>
                        </div>


                    </div>

                    <div className={'mt-15 ml-8'}>
                        <LogoMarquee
                            items={logos}
                            speed={15}
                            title="Loved by 1000+ big and small brands around the world"
                        />
                    </div>
                </div>
            </div>


            {/* Mega Left Gradient */}
            <div
                className="absolute -left-[40%] top-[4rem]  w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"/>

            {/* Mega Right Gradient */}
            <div
                className="absolute -right-[20%] top-[4rem] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"/>


        </div>
    </section>;
};

export default Hero;
