import React, { useEffect } from "react";

const TermsOfUse = ({ setShowTerms }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on mount
    }, []);

    return (
        <div className="px-[10%] py-10 text-[#003355] text-sm leading-6 bg-white">
            <button
                onClick={() => setShowTerms(false)}
                className="text-[26px] mb-6 text-[#00446b] rounded transition"
            >
                ←
            </button>
            <h1 className="text-2xl font-bold mb-2">TERMS OF USE</h1>
            <div className="w-full border-t border-dotted border-gray-400"></div>
            <p className="mb-2 font-semibold">Last Revised: [Insert Date]</p>

            <p className="mb-4">
                Welcome to Mahima Chaudhary. These Terms of Use ("Terms") govern your
                access to and use of the website located at [Insert URL] (the
                "Website") and any services provided by Mahima Chaudhary (the
                "Services"). By accessing or using the Website, you agree to comply
                with and be bound by these Terms. If you do not agree with these Terms,
                you must not use the Website.
            </p>

            <h2 className="font-semibold text-md mt-6 mb-2">1. DEFINITIONS</h2>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <strong>1.1</strong> "Website" refers to the website owned and
                    operated by Mahima Chaudhary available at [Insert URL].
                </li>
                <li>
                    <strong>1.2</strong> "Services" refers to the services, content, and
                    functionalities made available through the Website.
                </li>
                <li>
                    <strong>1.3</strong> "User" refers to any individual, organization, or
                    entity that accesses or uses the Website.
                </li>
                <li>
                    <strong>1.4</strong> "Content" refers to any text, images, videos,
                    audio, software, or other materials available on the Website.
                </li>
            </ul>

            <h2 className="font-semibold text-md mt-6 mb-2">2. ACCEPTANCE OF TERMS</h2>
            <p className="mb-4">
                By accessing or using the Website, you agree to abide by these Terms and
                the Privacy Policy. If you do not agree to these Terms, you must not
                access or use the Website.
            </p>

            <h2 className="font-semibold text-md mt-6 mb-2">3. CHANGES TO TERMS</h2>
            <p className="mb-4">
                We reserve the right to modify, amend, or update these Terms at any time,
                at our sole discretion. Any changes will be effective immediately upon
                posting on the Website. Your continued use of the Website after such
                modifications will constitute your acceptance of the updated Terms.
            </p>

            <h2 className="font-semibold text-md mt-6 mb-2">4. PRIVACY POLICY</h2>
            <p className="mb-4">
                Your use of the Website is also governed by our Privacy Policy,
                available at [Insert Privacy Policy URL]. By using the Website, you
                consent to the collection and use of your personal data as outlined in
                the Privacy Policy.
            </p>

            {/* Sections 5 to 17: repeat same structure */}
            {[...Array(13)].map((_, i) => (
                <div key={i}>
                    <h2 className="font-semibold text-md mt-6 mb-2">
                        {`${i + 5}. ${[
                            "ACCESS AND RESTRICTIONS",
                            "USER REGISTRATION AND ACCOUNT",
                            "INTELLECTUAL PROPERTY",
                            "DISCLAIMER OF WARRANTIES",
                            "LIMITATION OF LIABILITY",
                            "INDEMNIFICATION",
                            "THIRD-PARTY LINKS",
                            "COOKIES AND TRACKING TECHNOLOGIES",
                            "GOVERNING LAW AND DISPUTE RESOLUTION",
                            "TERMINATION",
                            "SEVERABILITY",
                            "ENTIRE AGREEMENT",
                            "CONTACT INFORMATION",
                        ][i]}`}
                    </h2>
                    <p className="mb-4">
                        [Insert content from the respective section in your original terms.]
                    </p>
                </div>
            ))}
        </div>
    );
};

export default TermsOfUse;