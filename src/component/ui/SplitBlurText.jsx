import React, {useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {SplitText} from 'gsap/SplitText';


const SplitBlurText = ({ children, className = "" }) => {
    const textRef = useRef(null);

    useGSAP(() => {
        if (!textRef.current) return;

        const split = new SplitText(textRef.current, { type: "words" });

        gsap.fromTo(split.words,
            {
                opacity: 0,
                filter: "blur(20px)",
                scale: 1.5,
                y: 20
            },
            {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 85%",
                    toggleActions: "play reverse play reverse",
                }
            }
        );
    }, { scope: textRef });

    return (
        <h1
            ref={textRef}
            className={`${className}`}
        >
            {children}
        </h1>
    );
};


export default SplitBlurText;
