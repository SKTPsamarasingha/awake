import React, {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";


const LogoMarquee = ({items, speed = 20, title = "Loved by brands"}) => {
    const marqueeRef = useRef(null);

    useGSAP(() => {
        // Infinite seamless loop
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            ease: "none",
            duration: speed,
            repeat: -1,
        });
    }, {scope: marqueeRef});

    return (
        <div className="w-full mt-20 overflow-hidden">
            {/* Fading Lines Section */}
            <div className="flex items-center justify-center gap-4 w-full px-4 mb-10">
                <div className="h-[3px] flex-grow bg-gradient-to-l from-white to-transparent"></div>
                <p className="text-gray-400   tracking-[0.2em] whitespace-nowrap">
                    {title}
                </p>
                <div className="h-[3px] flex-grow bg-gradient-to-r from-white to-transparent"></div>
            </div>

            <div
                className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                <div ref={marqueeRef} className="flex flex-nowrap w-fit gap-16 items-center">
                    {/* Double the items to create the loop illusion */}
                    {[...items, ...items].map((item, index) => (
                        <div key={index}
                             className="flex-shrink-0 ">
                            {typeof item === 'string' ? (
                                <img src={item} className="h-10 w-auto object-contain" alt="Brand Logo"/>
                            ) : (
                                item
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoMarquee;
