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
            <p className="mb-2 "><em>Last Revised: April 13, 2025</em></p>

            <p className="mb-4">
                Welcome to the portfolio website of Mahima Chaudhary. These Terms of Use ("Terms") govern your access to and use of the website located at <a href="https://www.advmahimachaudhary.com/">[<strong>https://www.advmahimachaudhary.com/</strong>]</a> (the "Website"). By using this Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use the Website.
            </p>
            <div className="space-y-4">
                <section>
                    <h2 className="font-bold text-md md:text-lg">1. DEFINITIONS</h2>
                    1.1 <strong>"Website"</strong> refers to the online portfolio of Mahima Chaudhary available at <a href="https://www.advmahimachaudhary.com/">[<strong>https://www.advmahimachaudhary.com/</strong>]</a>.
                    <br></br>
                    1.2 <strong>"User"</strong> refers to any person or entity accessing or using the Website.
                    <br></br>
                    1.3 <strong>"Content"</strong> includes all text, images, graphics, design elements, and other materials available on the Website.
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">2. ACCEPTANCE OF TERMS</h2>
                    <p>
                        By accessing or using the Website, you agree to comply with these Terms and our Privacy Policy. If you do not agree, you must not use the Website.
                    </p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">3. CHANGES TO TERMS</h2>
                    <p>
                        We may update these Terms at any time without prior notice. Changes will be effective once posted on the Website. Continued use of the Website after such changes indicates your acceptance of the revised Terms.
                    </p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">4. PRIVACY</h2>
                    <p>
                        This Website does not collect personal data, track users, or use cookies. However, please be aware that third-party services such as hosting providers may collect data (e.g., IP addresses or basic usage statistics) under their own privacy policies. For more information, see our Privacy Policy.
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Reproduce, distribute, or exploit Website content without prior written permission.</li>
                        <li>Use the Website in a way that could damage or interfere with its functionality.</li>
                        <li>Attempt to gain unauthorized access to any part of the Website.</li>
                        <li>Use the Website in violation of any applicable law or regulation.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">5. ACCESS AND USAGE</h2>
                    <p>
                        You may use this Website solely for personal and non-commercial purposes. You agree not to:
                    </p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">6.  USER REGISTRATION</h2>
                    <p>
                        This Website does not require or offer user registration. There are no login or account creation features.
                    </p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">7.  INTELLECTUAL PROPERTY</h2>
                    <p>
                        All Content on the Website is owned by Mahima Chaudhary or licensed to her and is protected under intellectual property laws. You may not use, copy, or modify any part of the Website without express written permission.
                    </p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">8. DISCLAIMER OF WARRANTIES</h2>
                    <p>
                        The Website is provided "as is" and "as available" without any warranties, express or implied. We make no guarantees regarding the availability, accuracy, or reliability of the Website.
                    </p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">9. LIMITATION OF LIABILITY</h2>
                    <p>
                        To the maximum extent permitted by law, Mahima Chaudhary shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Website.
                    </p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">10. INDEMNIFICATION</h2>
                    <p>
                        You agree to indemnify and hold harmless Mahima Chaudhary from any claims, damages, or expenses resulting from your violation of these Terms or misuse of the Website.
                    </p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">11. THIRD-PARTY LINKS</h2>
                    <p>
                        This Website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites. Visiting these links is at your own discretion and risk.
                    </p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">12. COOKIES AND TRACKING</h2>
                    <p>
                        We do not use cookies, analytics, or any tracking technologies. However, third-party hosting services may collect basic technical data as part of their standard operations. Please refer to their policies for details.
                    </p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">13. TERMINATION</h2>
                    <p>
                        We reserve the right to suspend or terminate your access to the Website at any time, without notice, for conduct that violates these Terms or is harmful to other users or the Website itself.
                    </p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">14. SEVERABILITY</h2>
                    <p>
                        If any provision of these Terms is held to be invalid or unenforceable, the remainder of the Terms will continue to be valid and enforceable.
                    </p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">15. ENTIRE AGREEMENT</h2>
                    <p>
                        These Terms, together with the Privacy Policy, constitute the entire agreement between you and Mahima Chaudhary regarding the use of the Website.
                    </p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">16. CONTACT</h2>
                    <p>
                        If you have any questions or concerns about these Terms, please contact:
                        <br></br>
                        <strong>Email:</strong> Mahima.chaudhary.chahal@gmail.com
                    </p>
                </section>
            </div>
        </div >
    );
};

export default TermsOfUse;