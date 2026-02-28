import avatar1 from '/src/assets/avatar_1.jpg'
import avatar2 from '/src/assets/avatar_2.jpg'
import avatar3 from '/src/assets/avatar_3.jpg'
import avatar4 from '/src/assets/avatar_4.jpg'

import logo1 from '/src/assets/logoipsum-411.svg'
import logo2 from '/src/assets/logoipsum-413.svg'
import logo3 from '/src/assets/logoipsum-415.svg'
import logo4 from '/src/assets/logoipsum-417.svg'
import logo5 from '/src/assets/logoipsum-419.svg'
import logo6 from '/src/assets/logoipsum-420.svg'
import {FaBolt, FaBullseye, FaWandMagicSparkles} from "react-icons/fa6";
import Brand from "../assets/Brand.svg";
import Analytics from "../assets/Analytics.svg";
import Marketing from "../assets/Marketing.svg";
import Design from "../assets/Design.svg";
import Development from "../assets/Development.svg";
import flowBank from "../assets/FlowBank.jpg";
import Academy from "../assets/Academy.co.jpg";
import Genome from "../assets/Genome.jpg";
import Hotto from "../assets/Hotto.jpg";
import logan from "../assets/logan.png";
import Ana from "../assets/ana.png";
import Brian from "../assets/barin.png";
import Darko from "../assets/darko.png";

export const navLinks = [{
    name: "Services", to: "Services"
}, {
    name: "Work", to: "Work"
}, {
    name: "Team", to: "Team"
}, {
    name: "Pricing", to: "Pricing"
}, {
    name: "Awards", to: "Awards"
}, {
    name: "Contact", to: "Contact"
}, {
    name: "About us", to: "About us"
},]

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6]

export const avatars = [avatar1, avatar2, avatar3, avatar4]

export const tags = [
    {
        text: "Creativity",
        bgClass: "bg-purple-500/10",
        textClass: "text-purple-500",
        icon: FaWandMagicSparkles,
        from: {x: -300, y: -100} // Entrance from Left-Top
    },
    {
        text: "Innovation",
        bgClass: "bg-sky-400/10",
        textClass: "text-sky-400",
        icon: FaBolt,
        from: {x: 0, y: -400} // Entrance from pure Top
    },
    {
        text: "Strategy",
        bgClass: "bg-yellow-400/10",
        textClass: "text-yellow-400",
        icon: FaBullseye,
        from: {x: 300, y: -100} // Entrance from Right-Top
    }
];

export const stats = [
    {
        value: 40,
        label: "Total Projects Completed",
    },
    {
        value: 15,
        label: "Years of Experience",
    },
    {
        value: 12,
        label: "Design Awards",
    },
];

export const services = [{
    text: "Brand Strategy", icon: Brand, color: "#a204e0",
}, {
    text: "Analytics Reporting", icon: Analytics, color: "#78e12f",
}, {
    text: "Digital Marketing", icon: Marketing, color: "#66afd9",
}, {
    text: "UI/UX Design", icon: Design, color: "#e88d22",
}, {
    text: "Web Development", icon: Development, color: "#f12741",
},

];

export const works = [{
    name: "FlowBank", image: flowBank, service: ["UX Research", "Interface Design"]

}, {
    name: "Academy.co", image: Academy, service: ["Product Design", "Interaction Design"]

}, {
    name: "Genome", image: Genome, service: ["Brand identity design", "UX Research"]

}, {
    name: "Hotto", image: Hotto, service: ["Visual Storytelling", "Web & Mobile Design"]
},]

export const team = [
    {
        name: "Logan Dang",
        job: "WordPress Developer",
        image: logan,
    },
    {
        name: "Ana Belić",
        job: "Social Media Specialist",
        image: Ana,
    }, {
        name: "Brian Hanley",
        job: "Product Designer",
        image: Brian,
    }, {
        name: "Darko Stanković",
        job: "UI Designer",
        image: Darko,
    },

]