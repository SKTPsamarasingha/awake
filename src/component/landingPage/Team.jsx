import SplitBlurText from "../ui/SplitBlurText.jsx";
import {FaLinkedin, FaXTwitter} from "react-icons/fa6";
import {team} from "../../constants/data.js";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";


export const Team = () => {

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

        children.forEach((child) => {
            tl.to(child, {
                opacity: 1,
                scale: 1,
                ease: "power1.inOut",
            }, 0);
        });

    }, [cardRef]);

    return (<section className={`w-full h-[50rem] mt-30 mb-15 flex items-center flex-col `}>
        <SplitBlurText
            className="mt-25 z-20 text-white font-[450] text-[48px] md:text-[48px] text-center leading-[1.1] tracking-normal
">
            Meet the creative minds <br/> behind
            <span className="text-white font-serif italic ml-5 font-[23px]"> our success</span>
        </SplitBlurText>

        {/*team container*/}
        <div ref={cardRef} className={'flex items-center gap-10 mt-20'}>
            {team.map(({name, job, image}) => (
                <div className={'flex items-center flex-col gap-4 w-[15rem] h-[25rem] group'}>
                    <img
                        className={`w-[20rem] h-[15rme] object-cover grayscale-0 group-hover:grayscale transition-all duration-500 ease-in-out`}
                        src={image} alt={'logon'}/>

                    <div className={'flex items-center flex-col'}>
                        <h2 className={`text-grey text-[18px] font-semibold`}>{name}</h2>
                        <h2 className={`text-grey text-[18px] font-semibold`}>{job}</h2>
                    </div>

                    <div className={'flex gap-4 text-grey text-[1.5rem]'}>
                        <FaXTwitter className={'text-grey'}></FaXTwitter>
                        <FaLinkedin className={'text-grey'}></FaLinkedin>
                    </div>
                </div>
            ))}
            {/*team card*/}


        </div>
    </section>)
}


export default Team
