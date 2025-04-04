
import { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";



function Header({ isMenuOpen }) {
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const OpenMenu = () => {
        setOpen(!isOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={isMenuOpen ? "hidden" : ""}>
            <div className="flex header-container">
                <a href="#" className="logo p-4 text-[18px] font-[Roboto]">Mahima Chaudhary</a>

                <ul className={`w-full h-[35vh]bg - slate - 400 top - 0 ${isOpen ? 'flex' : 'hidden'} flex - col items - center justify - evenly gap - 0 absolute`}>
                    <li><a className="text-[20px]" href="#">Home</a></li>
                    <li><a className="text-[20px]" href="#">Expertise</a></li>
                    <li><a className="text-[20px]" href="#">Insights & Updates</a></li>
                    <li><a className="text-[20px]" href="#">Resources</a></li>
                    <li><a className="text-[20px]" href="#">About</a></li>
                    <li><a className="text-[20px]" href="#">Contact Me</a></li>
                </ul>

                <button onClick={OpenMenu} className="text-white p-4 hidden">
                    <RiMenu3Line />
                </button>

                <button onClick={OpenMenu} className={` ${isOpen ? 'block' : 'hidden'} text - white relative p - 4 `}>
                    <ImCross />
                </button>
            </div>
        </header>
    );
}

export default Header;
