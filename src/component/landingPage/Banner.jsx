import ArrowBtn from "../ui/ArrowBtn";
import SplitBlurText from "../ui/SplitBlurText.jsx";
import {ArrowRightIcon} from "@heroicons/react/24/outline/index.js";

const Banner = () => {
    return (
        <section className="w-[100rem] bg-black px-4 py-20 flex items-center -ml-5 justify-center  mt-30">
            <div
                className="
          rounded-[28px]
          bg-gradient-to-r
          from-[#c7dbe0]
          via-[#dedede]
          to-[#e4d8bd]
          px-6 py-20
          sm:px-10
          text-center
        "
            >
                <SplitBlurText
                    className="w-[70rem] z-20 text-black font-[450] text-[48px] md:text-[48px] text-center text-sm/12 tracking-normal">
                    Innovative solutions for <span className="italic">bold brands</span>

                </SplitBlurText>


                {/* Sub text */}
                <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-black">
                    Looking to elevate your brand? We craft immersive experiences that
                    captivate, engage, and make your business unforgettable in every
                    interaction.
                </p>

                {/* CTA */}
                <div className="mt-10 flex justify-center">

                    <ArrowBtn
                        text="Let’s Collaborate"
                        Icon={ArrowRightIcon}
                        width={200}
                        height={45}
                        dark={false}

                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;