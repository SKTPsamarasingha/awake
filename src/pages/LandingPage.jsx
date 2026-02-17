import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {useRef} from "react";
import SplashCursor from "../component/ui/SplashCursor.jsx";
import SplitBlurText from "../component/ui/SplitBlurText.jsx";
import LogoMarquee from "../component/ui/LogoMarquee.jsx";
import ArrowBtn from "../component/ui/ArrowBtn.jsx";
import {
    ArrowRightIcon, StarIcon
} from "@heroicons/react/24/outline";

import avatar1 from '/src/assets/avatar_1.jpg'
import avatar2 from '/src/assets/avatar_2.jpg'
import avatar3 from '/src/assets/avatar_3.jpg'
import avatar4 from '/src/assets/avatar_4.jpg'

import logo1 from '/src/assets/logoipsum-411.svg'
import logo2 from '/src/assets/logoipsum-413.svg'
import logo3 from '/src/assets/logoipsum-415.svg'
import logo4 from '/src/assets/logoipsum-417.svg'
import logo5 from '/src/assets/logoipsum-419.svg'
import logo6 from '/src/assets/logoipsum-420.svg'

const logos = [logo1, logo2, logo3, logo4, logo5, logo6]
const avatars = [avatar1, avatar2, avatar3, avatar4]

const LandingPage = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(containerRef.current, {
            y: 50, opacity: 0, duration: 1.5, ease: "expo.out", delay: 1.9, stagger: 0.2,

        },);
    }, {scope: containerRef});


    return <section
        className="min-h-screen w-full overflow-hidden -mt-10 flex flex-col items-center ">
        {/* Background Cursor Component */}
        <SplashCursor/>

        <div className="relative z-10 px-6 max-w-6xl">

            <div className={'flex items-center flex-col gap-5 mt-30'}>
                <SplitBlurText
                    className="z-20 text-white font-[450] text-[96px] md:text-[6rem] text-center leading-[1.1] tracking-normal
">
                    Building bold brands <br/> with
                    <span className="text-white font-serif italic ml-5 font-[23px]">thoughtful design</span>
                </SplitBlurText>

                <div ref={containerRef} className={'mt-3 flex flex-col items-center'}>
                    <p className={`text-grey w-[38rem] text-center`}>At Awake, we help small startups
                        tackle
                        the world’s
                        biggest challenges with tailored solutions, guiding you from strategy to success in a
                        competitive
                        market.</p>

                    <div className={`flex items-center gap-5 mt-8`}>
                        <ArrowBtn
                            text="Get started"
                            icon={ArrowRightIcon}
                            width="170px"
                            height="45px"
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

                    <div className={'mt-12'}>
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

export default LandingPage;
