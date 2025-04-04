import { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";

const Nav = () => {

    const [isOpen, setOpen] = useState(false);
    const OpenMenu = () => {
        setOpen(!isOpen);
    }

    return <div className="relative">
        <div className={`w-[80vw] h-[100vh] transition-all duration-500 ease-in-out bg-white
                absolute top-0 ${isOpen ? 'right-[0vw]' : 'right-[-80vw]'} 
                flex items-start justify-center z-[9999]`}>

            <div className="absolute mt-20 z-[-10] left-0">
                <div className="w-40 h-40 text-white text-2xl rounded-full flex cursor-pointer">
                    <div className="relative w-full h-full">

                        <img src={process.env.PUBLIC_URL + "/hinge_org.png"} alt="Profile Picture" className="w-full h-full relative left-[-50%] object-cover rotate-[-90deg]" />
                    </div>
                    <RiMenu3Line className="relative text-[#004080] left-[-100%]" onClick={OpenMenu} />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 mt-10 w-full">
                <h1 className="text-[#004080] text-[24px] font-bold">Mahima Chaudhary</h1>

                <div className="flex flex-col justify-center gap-6 w-[80%] mt-10 text-white">
                    <button className="neuromorphic-btn">HOME</button>
                    <button className="neuromorphic-btn">ABOUT ME</button>
                    <button className="neuromorphic-btn">SERVICES</button>
                    <button className="neuromorphic-btn">BLOGS</button>
                    <button className="neuromorphic-btn">CONTACT ME</button>
                </div>
            </div>

        </div>
    </div>
}


export default Nav;