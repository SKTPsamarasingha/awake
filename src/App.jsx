import {BrowserRouter} from "react-router";
import AllRoutes from "./routes/AllRoutes.jsx";
import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP, SplitText);


export const App = () => {
    return (
        <>
            <BrowserRouter>
                <AllRoutes/>
            </BrowserRouter>
        </>)
}

export default App
