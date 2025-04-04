import { useState } from "react";

const ResumeDownloadButton = () => {
    const [buttonText, setButtonText] = useState("Download Resume");

    const handleDownload = async () => {
        setButtonText("Downloading...");

        // Simulating a delay (optional, gives a real feel of download)
        setTimeout(() => {
            setButtonText("Download Resume");
        }, 5000); // Change text back after 3 seconds
    };

    return (
        <a
            href="https://drive.google.com/uc?export=download&id=1rO8H-sZoZMe39DWMzwrxwL4Hb2aqwb0L"
            download
            className="primary-btn mt-14 w-[50%] h-[7%] bg-white text-[14px] text-[#004080] flex justify-center"
            onClick={handleDownload}
        >
            {buttonText}
        </a>
    );
};

export default ResumeDownloadButton;
