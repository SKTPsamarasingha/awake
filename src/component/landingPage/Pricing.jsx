import ArrowBtn from "../ui/ArrowBtn";
import {ArrowUpRightIcon} from "@heroicons/react/24/outline";
import SplitBlurText from "../ui/SplitBlurText.jsx";
import {ArrowRightIcon, CheckIcon} from "@heroicons/react/24/outline/index.js";
import {FaCheck} from "react-icons/fa6";

const prices = [
    {
        name: "Stater",
        description: "For companies who need design support. One request at a time",
        price: 2500,
        features: ["Design Updates Every 2 Days", "Mid-level Designer", "SEO optimization", "Monthly analytics", "2x Calls Per Month", "Licence free assets"],
        color: "#f6e683",
        text: "black"
    },
    {
        name: "Pro",
        description: "2x the speed. Great for an MVP, Web App or complex problem",
        price: 2500,
        features: ["Design Updates Daily", "Senior-level Designer", "AI Advisory Framework", "Full-service Creative Team", "4x Calls Per Month", "Licence free assets"],
        color: "#4928fd",
        text: "white"
    },
]

const Pricing = () => {
    return (<section className="mb-4">
                <SplitBlurText
                    className="mt-25 z-20 text-white font-[450] text-[48px] md:text-[48px] text-center leading-[1.1] tracking-normal
        ">
                    Pick the plan that <br/> fits your
                    <span className="text-white font-serif italic ml-5 font-[23px]"> Business</span>
                </SplitBlurText>

        <div className={'mt-20 flex items-center justify-center gap-10'}>
            {
                prices.map(({name, description, price, features, color, text}) => (
                    <div className={'flex w-[45rem] h-[23rem] rounded-[15px]  '}
                         style={{backgroundColor: `${color}`}}
                         key={name}>
                        {/*content*/}
                        <div className={'flex flex-col px-15 py-10 '}>
                            <h2 className={'text-white bg-black px-4 py-1 w-fit rounded-full '}>{name}</h2>
                            <p style={{color: text}} className={'text-dark tracking-wide text-[16px] w-[15rem] mt-3 ml-2 '}>{description}</p>

                            <h1 style={{color: text}}
                                className={'text-[3rem] font-[450] mt-15 mb-1'}>{`$${price}`}<span
                                className={'font-normal text-[18px] ml-1'}>/month</span></h1>

                            <ArrowBtn
                                text="Let’s Collaborate"
                                Icon={ArrowRightIcon}
                                width={200}
                                height={45}
                                dark={text === "black"}

                            />
                        </div>
                        <div className={'bg-grey w-[1px] h-[15rem] py-1'}></div>
                        {/*   features*/}

                        <div style={{color: text}} className={'px-8 py-10'}>
                            <h3 className={'mb-2 font-[400] text-[20px]'}>What's included
                            </h3>
                            <ul
                                className={'flex flex-col gap-3'}>
                                {features.map((feature, i) => (
                                    <li className={'flex text-[18px] tracking-wide'}><FaCheck
                                        className={'w-5 h-5 mr-3 mt-1'}></FaCheck> {feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))
            }

        </div>
    </section>);
};

export default Pricing;