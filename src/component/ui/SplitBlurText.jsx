import React, {useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {SplitText} from 'gsap/SplitText';

// Register the plugin
gsap.registerPlugin(SplitText);

const SplitBlurText = ({children, className = ""}) => {
    const textRef = useRef(null);

    useGSAP(() => {
        // Split by words to handle the nested span and break correctly
        const split = new SplitText(textRef.current, {type: "words"});

        gsap.fromTo(split.words,
            {
                opacity: 0,
                filter: "blur(20px)",
                scale: 1.5,
            },
            {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                delay: 0.5
            }
        );
    }, {scope: textRef});

    return <h1 ref={textRef} className={className}>{children}</h1>;
};


export default SplitBlurText;
