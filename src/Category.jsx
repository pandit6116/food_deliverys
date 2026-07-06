import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineBreakfastDining } from "react-icons/md";
import { MdOutlineLunchDining } from "react-icons/md";
import { SiIfood } from "react-icons/si";
import { MdOutlineDinnerDining } from "react-icons/md";
import { LuDessert } from "react-icons/lu";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";


export const categories = [
    {
        id: 1,
        name: "All",
        icon:<TiThSmallOutline className="w-[60px] h-[60px]" />

    },
    {
        id: 2,
        name: "breakfast",
        icon:<MdOutlineBreakfastDining className="w-[60px] h-[60px]"/>
    },
    {
        id: 3,
        name: "Soups",
        icon:<MdOutlineLunchDining className="w-[60px] h-[60px]"/>
    },
    {
        id: 4,
        name: "pasta",
        icon:<SiIfood className="w-[60px] h-[60px]" />
    },
    {
        id: 5,
        name: "main_course",
        icon:<MdOutlineDinnerDining className="w-[60px] h-[60px]" />

    },{
        id: 6,
        name: "pizza",
        icon:<LuDessert className="w-[60px] h-[60px]" />
    },
    {
        id: 7,
        name: "burger",
        icon:<MdOutlineEmojiFoodBeverage className="w-[60px] h-[60px]" />

    },
];