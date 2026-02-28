import SplitBlurText from "../ui/SplitBlurText.jsx";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import {works} from "../../constants/data.js";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export const Works = () => {
    const cardRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(cardRef.current.children);
        gsap.set(cards, { y: 600, opacity: 0, scale: 0.9 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${(cards.length / 2) * 150}%`,
                pin: true,
                scrub: 1,
            }
        });

        // Loop through cards in steps of 2
        for (let i = 0; i < cards.length; i += 2) {
            const leftCard = cards[i];
            const rightCard = cards[i + 1];

            // 1. ENTRANCE: Both cards in the pair scroll up together
            tl.to([leftCard, rightCard], {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power2.out",
                stagger: 0.1 // Slight offset between the two looks more organic
            });

            // 2. EXIT: Left goes Up-Left, Right goes Up-Right
            // We only fly them away if there is another pair coming or if you want total clearance
                tl.to(leftCard, {
                    xPercent: -150,
                    yPercent: -150,
                    opacity: 0,
                    rotation: -20,
                    display: "none",
                    duration: 1,
                    ease: "power2.in"
                }, "+=0.5"); // Pause briefly so user can see them

                tl.to(rightCard, {
                    xPercent: 150,
                    yPercent: -150,
                    opacity: 0,
                    rotation: 20,
                    display: "none",
                    duration: 1,
                    ease: "power2.in"
                }, "<"); // "<" starts this at the exact same time as the leftCard exit
        }
    }, { scope: containerRef });


    return (
        <section ref={containerRef} className="flex flex-col items-center overflow-hidden h-screen w-fu">
            <SplitBlurText className="z-20 text-white font-[450] text-[48px] text-center leading-[1.1] tracking-normal">
                How we transformed a small <br/> business's{" "}
                <span className="text-white font-serif italic ml-5 font-[23px]">online presence</span>
            </SplitBlurText>

            {/* card container */}
            <div ref={cardRef} className="ml-40 mt-10 flex flex-wrap gap-x-10 gap-y-20">
                {works.map(({name, image, service}) => (
                    <div key={name} className="relative w-[40rem]">
                        {/* Image Container */}
                        <div className="relative group w-full h-[28rem] overflow-hidden rounded-[0.5rem]">
                            <img
                                className="rounded-[0.5rem] w-full h-full object-cover group-hover:brightness-50 transition-all duration-300 ease-in-out"
                                src={image}
                                alt={name}
                            />
                            <ArrowRightIcon
                                className="cursor-pointer opacity-0 group-hover:opacity-100 absolute right-4 top-4 w-12 h-12 p-2 text-black -rotate-45 bg-white rounded-full transition-opacity duration-300"
                                strokeWidth={2}
                            />
                        </div>

                        {/* Content below image */}
                        <div className="mt-4">
                            <h3 className="text-white text-[28px] font-medium hover:text-blue-500 cursor-pointer transition-colors">
                                {name}
                            </h3>

                            <div className="flex gap-3 mt-3">
                                {service.map((item) => (
                                    // FIXED: Added return or used implicit return (parentheses)
                                    <div key={item}
                                         className="border border-white/20 text-gray-400 w-fit px-4 py-1 rounded-full hover:bg-white hover:text-black transition-all cursor-default">
                                        <span className="text-[14px] tracking-wide">{item}</span>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Works;
