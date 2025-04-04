import React from "react";
import "./Footer.css";

const Footer = ({ setShowPrivacy, setShowTerms }) => {
    return (
        <footer className="bg-[#005380] text-white px-[10%] mx-auto">
            <div className="flex justify-between flex-wrap mx-auto">
                <div className="w-full">
                    <h2 className="logo text-xl text-center my-5 font-serif">Mahima Chaudhary</h2>
                    <p className="mT1 text-center font-serif">Protect | Grow | Succeed – Corporate Legal Expertise You Can Trust.</p>
                    <div className="flex justify-evenly mt-5">
                        <span>🔵</span>
                        <span>🐦</span>
                        <span>📷</span>
                        <span>🔗</span>
                    </div>
                </div>


                <div className="footer-blog mt-5">
                    <h4>Latest Blog</h4>
                    <div className="blog-item mT2">
                        <div className="blog-thumbnail"></div>
                        <p>I think really important to design...</p>
                    </div>
                    <div className="blog-item mT2">
                        <div className="blog-thumbnail"></div>
                        <p>Recognizing the need is the primary...</p>
                    </div>
                </div>
            </div>

            <div
                className="footer-bottom text-[12px] text-gray-200 text-center py-4 cursor-pointer transition"
            >
                <span onClick={() => setShowPrivacy(true)} className="mb-1 font-serif">Privacy Policy | </span>
                <span onClick={() => setShowTerms(true)} className="mb-1 font-serif">Terms of Service</span>
                <p className="text-gray-400 font-serif">© 2025 Mahima Chaudhary. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
