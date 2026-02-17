import {useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

const ArrowBtn = ({width = '200px', height = '45px', text, icon: Icon, dark = false}) => {
    const btn = useRef(), tl = useRef();
    const theme = dark ? "bg-off-white text-black" : "bg-black text-off-white";
    const circle = dark ? "bg-black text-white" : "bg-off-white text-black";

    useGSAP(() => {
        tl.current = gsap.timeline({paused: true, defaults: {duration: 0.4, ease: "power2.inOut"}})
            .to(".i", {x: -(parseInt(width) - 50)})
            .to(".t", {x: 45}, 0)
            .to(".s", {rotation: 0}, 0)
            // 2. Hover State: If dark, turn white. If light, turn black.
            .to(btn.current, {
                backgroundColor: dark ? "#000000" : "#ffffff",
                color: dark ? "#ffffff" : "#000000"
            }, 0)
            .to(".i", {
                backgroundColor: dark ? "#ffffff" : "#000000",
                color: dark ? "#000000" : "#ffffff"
            }, 0);
    }, {scope: btn, dependencies: [dark, width]});

    return (
        <button ref={btn}
                onMouseEnter={() => tl.current.play()} onMouseLeave={() => tl.current.reverse()}
                className={`border flex flex-row-reverse items-center justify-between rounded-full p-1 cursor-pointer overflow-hidden ${theme}`}
                style={{width, height}}>
            <span className={`i flex items-center justify-center rounded-full w-9 h-9 mr-0.5 ${circle}`}>
                <Icon className="s -rotate-45" width={20}/>
            </span>
            <span className="t mx-4 font-medium">{text}</span>
        </button>
    );
};


export default ArrowBtn;
