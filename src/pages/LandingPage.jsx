import Hero from "../component/landingPage/Hero.jsx";
import AboutUs from "../component/landingPage/AboutUs.jsx";
import Services from "../component/landingPage/Services.jsx";
import Works from "../component/landingPage/Works.jsx";
import Team from "../component/landingPage/Team.jsx";
import {useEffect, useRef} from "react";
import Footer from "../component/Footer.jsx";
import Banner from "../component/landingPage/Banner.jsx";
import Pricing from "../component/landingPage/Pricing.jsx";


const LandingPage = () => {
    const mainRef = useRef(null);
//
//     useEffect(() => {
//         // 1. Ensure the ref is attached
//         if (mainRef.current) {
//             // 2. Convert children (HTMLCollection) to an Array to use .forEach
//             const children = Array.from(mainRef.current.children);
//
//             children.forEach((item) => {
//                 // 3. Add Tailwind border classes to each child
//                 item.classList.add("border", "border-white");
//             });
//         }
//     }, []);

    return (<main ref={mainRef}>
        <Hero></Hero>
        <AboutUs></AboutUs>
        <Services></Services>
        <Works></Works>
        <Team></Team>
        <Pricing></Pricing>
        <Banner></Banner>
        <Footer></Footer>
    </main>)

};

export default LandingPage;
