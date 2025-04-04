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
            <p className="mb-4 font-semibold">Last Revised: March 25, 2025</p>

            <div className="space-y-4">
                <section>
                    <h2 className="font-bold text-lg">1. INTRODUCTION</h2>
                    <p>
                        At Mahima Chaudhary, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy ("Policy") explains how we collect, use, disclose, and safeguard your information when you visit our website located at [Insert URL] (the "Website") and use the services offered through the Website (the "Services").
                        <br />
                        By accessing or using the Website, you agree to the terms of this Policy. If you do not agree with this Policy, please refrain from using the Website.
                    </p>
                </section>

                <section>
                    <h2 className="font-bold text-lg">2. INFORMATION WE COLLECT</h2>
                    <p><strong>2.1 Personal Data:</strong></p>
                    <ul className="list-disc ml-6">
                        <li>Identity Data: Name, username, or similar identifiers.</li>
                        <li>Contact Data: Email address, phone number, mailing address.</li>
                        <li>Financial Data: Payment details, billing information (if applicable).</li>
                        <li>Technical Data: IP address, browser type, device type, operating system.</li>
                        <li>Usage Data: Information about how you use the Website.</li>
                        <li>Other Data: Information you provide directly through interactions such as submitting forms, contacting customer support, or participating in surveys.</li>
                    </ul>
                    <p className="mt-2"><strong>2.2 Non-Personal Data:</strong> Aggregate data, browsing patterns, and analytics to help improve our Website and Services.</p>
                </section>

                <section>
                    <h2 className="font-bold text-lg">3. HOW WE COLLECT INFORMATION</h2>
                    <ul className="list-disc ml-6">
                        <li>Direct Interactions: When you register for an account, subscribe to newsletters, or contact us directly.</li>
                        <li>Automated Technologies: Cookies, web beacons, and other tracking technologies.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-bold text-lg">4. USE OF PERSONAL DATA</h2>
                    <ul className="list-disc ml-6">
                        <li>To provide, maintain, and improve our Website and Services.</li>
                        <li>To communicate with you about your account or transaction.</li>
                        <li>To send promotional emails and newsletters.</li>
                        <li>To process transactions and provide customer support.</li>
                        <li>To comply with legal obligations or resolve disputes.</li>
                        <li>To analyze Website usage and improve user experience.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-bold text-lg">5. COOKIES AND SIMILAR TRACKING TECHNOLOGIES</h2>
                    <p>We use cookies to:</p>
                    <ul className="list-disc ml-6">
                        <li>Remember your preferences and settings.</li>
                        <li>Analyze traffic patterns.</li>
                        <li>Provide targeted advertising.</li>
                    </ul>
                    <p>You can adjust your browser settings to manage or refuse cookies. For more details, refer to our Cookie Policy.</p>
                </section>

                <section>
                    <h2 className="font-bold text-lg">6. SHARING OF PERSONAL DATA</h2>
                    <ul className="list-disc ml-6">
                        <li>With Service Providers (e.g., analytics, payment processors).</li>
                        <li>To comply with legal obligations.</li>
                        <li>In business transactions like mergers or acquisitions.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-bold text-lg">7. INTERNATIONAL TRANSFERS OF DATA</h2>
                    <p>Your information may be transferred outside your jurisdiction. By using our Website, you consent to such transfers.</p>
                </section>

                <section>
                    <h2 className="font-bold text-lg">8. DATA SECURITY</h2>
                    <p>We use reasonable security measures to protect your data but cannot guarantee absolute security.</p>
                </section>

                <section>
                    <h2 className="font-bold text-lg">9. DATA RETENTION</h2>
                    <p>We retain your data only as long as necessary. Once it’s no longer needed, we securely delete or anonymize it.</p>
                </section>

                <section>
                    <h2 className="font-bold text-lg">10. YOUR RIGHTS AND CONTROL OVER YOUR INFORMATION</h2>
                    <ul className="list-disc ml-6">
                        <li>Access</li>
                        <li>Correction</li>
                        <li>Erasure</li>
                        <li>Objection</li>
                        <li>Restriction</li>
                        <li>Withdrawal of Consent</li>
                    </ul>
                    <p>To exercise your rights, please contact us at [Insert Contact Information].</p>
                </section>

                <section>
                    <h2 className="font-bold text-lg">11. CHILDREN’S PRIVACY</h2>
                    <p>We do not knowingly collect personal data from children under 16. Contact us if you believe we have done so inadvertently.</p>
                </section>

                <section>
                    <h2 className="font-bold text-lg">12. LINKS TO THIRD-PARTY WEBSITES</h2>
                    <p>We are not responsible for the privacy practices of third-party websites linked from our site. Please review their policies.</p>
                </section>

                <section>
                    <h2 className="font-bold text-lg">13. CHANGES TO THIS PRIVACY POLICY</h2>
                    <p>We may update this Policy. Continued use of the Website constitutes acceptance of the updated Policy.</p>
                </section>

                <section>
                    <h2 className="font-bold text-lg">14. CONTACT US</h2>
                    <p>
                        If you have any questions, contact us at:
                        <br />
                        Email: [Insert email address] <br />
                        Address: [Insert physical address] <br />
                        Phone: [Insert phone number]
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
