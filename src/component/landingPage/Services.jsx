import SplitBlurText from "../ui/SplitBlurText.jsx";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";
import ArrowBtn from "../ui/ArrowBtn.jsx";
import {
    ArrowRightIcon
} from "@heroicons/react/24/outline";
import {services} from "../../constants/data.js";

const Services = () => {
    const cardRef = useRef(null)

    useGSAP(() => {
        const children = gsap.utils.toArray(cardRef.current.children);

        gsap.set(children, {opacity: 0, scale: 0.5});

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80%",
                end: "top 30%",
                scrub: 1,
            }
        });

        children.forEach((child, i) => {
            let xPos = 0;
            if (i < 2) xPos = -270 * (2 - i);
            else if (i > 2) xPos = 270 * (i - 2);

            tl.to(child, {
                x: xPos,
                opacity: 1,
                scale: 1,
                ease: "power1.inOut",
            }, 0);
        });

    }, [cardRef]);

    return (
        <section className={'flex flex-col items-center gap-10 mt-60 h-screen  '}>
            <SplitBlurText
                className="z-20 text-white font-[450] text-[48px] md:text-[48px] text-center leading-[1.1] tracking-normal
">
                Where innovation meets <br/>
                <span className="text-white font-serif italic ml-5 font-[23px]">aesthetics</span>
            </SplitBlurText>

            <div ref={cardRef} className={`relative -left-30`}>
                {services.map(({text, color, icon,}) => (<div
                    key={text}
                    className="absolute top-0 w-[15rem] h-[15rem] rounded-[1rem] p-6 flex flex-col border-none"
                    style={{
                        backgroundColor: `${color}1A`,
                        color: color,
                    }}
                >
                    <div className={'ml-3'}>
                        <img alt={"service icon"} src={icon} className="w-10 h-10 mb-20"/>
                        {text.split(' ').map((word, i) => (
                            <span className={'text-[28px]'} key={i}>{word}<br/></span>
                        ))}
                    </div>
                </div>))}
            </div>

            <div className="ml-60 mt-65
          mx-auto w-[75rem]
          flex flex-col gap-6 md:flex-row md:items-center md:justify-between
          rounded-3xl
          bg-dark
          px-6 py-6
        ">
                {/* Text */}
                <h2 className="text-white text-[24px] ml-10  font-normal leading-snug">
                    See Our Work in Action. <br/>
                    Start Your Creative Journey with Us!
                </h2>

                {/* Buttons */}
                <div className="flex gap-4">
                    <ArrowBtn
                        text="Let’s Collaborate"
                        Icon={ArrowRightIcon}
                        width={199}
                        height={50}
                        dark={false}
                    />

                    <ArrowBtn
                        text="Get Started"
                        Icon={ArrowRightIcon}
                        width={170}
                        height={50}
                        dark={true}
                    />
                </div>
            </div>

        </section>)
}

export default Services
