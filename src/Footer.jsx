import React from "react";
import "./Footer.css";

const Footer = ({ setShowPrivacy }) => {
    return (
        <footer className="bg-[#005380] text-white px-[10%] mx-auto">
            <div className="flex justify-between flex-wrap mx-auto">
                <div className="w-full">
                    <h2 className="logo text-xl text-center my-5">Mahima Chaudhary</h2>
                    <p className="mT1 text-center">We create digital experiences for brands and companies by using technology.</p>
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
                className="footer-bottom text-[12px] text-gray-200 text-center py-4 cursor-pointer hover:text-blue-700 transition"
                onClick={() => setShowPrivacy(true)}
            >
                <p className="mb-1 underline underline-offset-2">Privacy Policy | Legal Notice | Terms of Service</p>
                <p className="text-gray-400">© 2025 Mahima Chaudhary. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
