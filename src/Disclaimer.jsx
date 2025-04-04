import { useState, useEffect } from 'react';

const Disclaimer = () => {
    const [isAccepted, setIsAccepted] = useState(() => {
        return localStorage.getItem('disclaimerAccepted') === 'true';
    });

    const handleAccept = () => {
        setIsAccepted(true);
        localStorage.setItem('disclaimerAccepted', 'true');
    };

    if (isAccepted) {
        return null;
    }

    return (
        <div className="fixed bottom-0 w-full bg-white shadow-lg z-[10000] h-[40vh] flex flex-col rounded-t-2xl animate-slide-up">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 rounded-t-2xl">
                <h2 className="text-xl font-bold text-[#004080]">Disclaimer</h2>
            </div>

            {/* Scrollable content */}
            <div className="p-4 overflow-y-auto text-sm leading-relaxed text-gray-700 flex-1">
                <div className="space-y-4 max-w-3xl mx-auto">
                    <p>
                        This website has been designed only for the purposes of dissemination of basic information about Mahima Chaudhary;
                        information which is otherwise available on the internet, various public platforms and social media. Careful attention
                        has been given to ensure that the information provided herein is accurate and up-to-date. However, Mahima is not
                        responsible for any reliance that a reader places on such information and shall not be liable for any loss or damage
                        caused due to any inaccuracy in or exclusion of any information, or its interpretation thereof. Reader is advised to
                        confirm the veracity of the same from independent and expert sources.
                    </p>
                    <p>
                        This website is not an attempt to advertise or solicit clients, and does not seek to create or invite any lawyer-client
                        relationship. The links provided on this website are to facilitate access to basic information about Mahima Chaudhary,
                        and, to share the various thought leadership initiatives undertaken by it. The content herein or on such links should
                        not be construed as a legal reference or legal advice. Readers are advised not to act on any information contained
                        herein or on the links and should refer to legal counsels and experts in their respective jurisdictions for further
                        information and to determine its impact.
                    </p>
                    <p>
                        Mahima advises against the use of the communication platform provided on this website for exchange of any confidential,
                        business or politically sensitive information. User is requested to use his or her judgment and exchange of any such
                        information shall be solely at the user's risk.
                    </p>
                    <p>
                        Mahima uses cookies on its website to improve its usability. This helps us in providing a good user experience and to
                        also help in improving our website. By continuing to use our website without changing your privacy settings, you agree
                        to use our cookies.
                    </p>
                </div>
            </div>

            {/* Button */}
            <div className="p-4 border-t border-gray-200 bg-white">
                <button
                    onClick={handleAccept}
                    className="w-full bg-[#004080] text-white py-4 px-6 rounded-lg text-base font-medium 
                             hover:bg-[#003366] active:bg-[#002952] transition-colors
                             shadow-md hover:shadow-lg
                             focus:outline-none focus:ring-2 focus:ring-[#004080] focus:ring-opacity-50"
                >
                    I Agree
                </button>
            </div>
        </div>
    );
};

export default Disclaimer;
