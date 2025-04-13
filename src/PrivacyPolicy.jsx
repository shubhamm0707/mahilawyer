import React, { useEffect } from "react";

const PrivacyPolicy = ({ setShowPrivacy }) => {

    useEffect(() => {
        window.scrollTo(0, 0); // scroll to top on component mount
    }, []);
    return (
        <div className="px-[10%] py-10 text-[#003355] text-sm leading-6 bg-white">
            <button
                onClick={() => setShowPrivacy(false)}
                className="text-[26px] mb-6 text-[#00446b] rounded transition"
            >
                ←
            </button>

            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <div className="w-full border-t border-dotted border-gray-400"></div>
            <p className="mb-4"><em>Last Revised: April 13, 2025</em></p>

            <div className="space-y-4">
                <section>
                    <h2 className="font-bold text-md md:text-lg">1. INTRODUCTION</h2>
                    <p>
                        At <strong> Mahima Chaudhary</strong>, we respect your privacy. This Privacy Policy (“<strong>Policy</strong>”) explains how we handle your personal information when you visit our website located at [<strong>https://www.advmahimachaudhary.com/ </strong>] (the “<strong>Website</strong>”). By accessing or using the Website, you agree to the terms of this Policy. If you do not agree with this Policy, please refrain from using the Website.
                    </p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">2. INFORMATION WE COLLECT</h2>
                    <p>We do not collect any personal data directly from users who visit our Website. We do not request or store any information such as names, email addresses, or contact details.</p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">3. HOW WE COLLECT INFORMATION</h2>
                    <p>We do not actively collect any information from users. There are no forms or registration processes on the Website that ask for personal information. Additionally, we do not use cookies, web beacons, or any other tracking technologies on our own. However, please be aware that third-party services, such as web hosting or analytics providers, may collect certain data when you visit the Website.</p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">4. USE OF INFORMATION</h2>
                    <p>Since we do not collect personal information, we do not use any data for marketing, analysis, or any other purpose. However, third-party services (such as hosting or analytics providers) may use information according to their own privacy policies. We do not control or have access to any data collected by these third parties.</p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">5. COOKIES AND SIMILAR TRACKING TECHNOLOGIES</h2>
                    <p>Our Website does not use cookies, web beacons, or any similar tracking technologies directly. However, certain third-party services, such as our website hosting or analytics tools, may use cookies or other tracking technologies in accordance with their own privacy practices. We do not have control over how these third parties use cookies or track users.
                        You can manage or disable cookies through your browser settings, but please be aware that doing so may affect your experience on the Website.</p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">6. SHARING OF INFORMATION</h2>
                    <p>We do not share, sell, rent, or trade any personal data because we do not collect it. However, third-party services (such as web hosting providers or analytics tools) may collect and use data according to their own privacy policies. We do not control how these third parties use any information they collect.</p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">7. INTERNATIONAL TRANSFERS OF DATA</h2>
                    <p>Since we do not collect personal data, no data is transferred by us. However, third-party services that may collect data (such as hosting providers) may process data in jurisdictions outside your country. Please review the privacy policies of these third-party services for more information.</p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">8. DATA SECURITY</h2>
                    <p>We do not collect or store personal data, and therefore, we do not have specific security measures in place for data storage. However, third-party services that may collect data (such as hosting or analytics providers) typically implement security measures to protect any information they collect. We do not have control over the security practices of these third parties.</p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">9. DATA RETENTION</h2>
                    <p>As we do not collect personal data, we do not retain any such data. If third-party services collect any data, they retain it according to their own data retention policies. We have no control over how long these third parties retain any information they collect.</p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">10. YOUR RIGHTS AND CONTROL OVER YOUR INFORMATION</h2>
                    <p>Since we do not collect personal data, we do not have any data to modify, delete, or provide access to. However, if you are concerned about data collected by third-party services, we recommend reviewing their privacy policies for information on how to exercise your rights.</p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">11. CHILDREN’S PRIVACY</h2>
                    <p>We do not knowingly collect or process any personal data from anyone, including children under the age of 16. Our Website is designed as a general portfolio site and does not request, store, or track any user information.</p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">12. LINKS TO THIRD-PARTY WEBSITES</h2>
                    <p>Our Website may contain links to third-party websites or services. These external sites are not controlled by us, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party websites you visit.</p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">13. CHANGES TO THIS PRIVACY POLICY</h2>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last Revised” date. Please check this page periodically for updates. Your continued use of the Website after any changes constitutes your acceptance of the updated Privacy Policy.</p>
                </section>

                <section>
                    <h2 className="font-bold text-md md:text-lg">14. CONTACT US</h2>
                    <p>
                        If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at:
                        <br></br>
                        <strong>Email  :</strong> <a href="mailto:advmahimachaudhary@gmail.com">advmahimachaudhary@gmail.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
