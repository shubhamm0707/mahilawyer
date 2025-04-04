import Header from "./Header";
import './Banner.css';
import Nav from "./Nav"



function Banner() {

    return <>

        <Nav />

        <section className="banner flex flex-col justify-start">

            <Header />


            <div className="bg-red-300 rounded-[50%] w-[60vw] h-[60vw] mt-20 md:w-[50vh] md:h-[50vh]">
                <img className="rounded-[50%] w-full h-full object-cover" src={process.env.PUBLIC_URL + "/mahima.png"} alt="Profile Picture" />
            </div>



            <div className="text-center p-[10%] text-white">
                <p className="text-[16px] font-bold">Hi, I am <span className="text-white text-[24px]">Mahima</span>, Corporate Lawyer | CS Professional</p>
            </div>

            <div className="px-[10%] text-center text-gray-200 text-[12px]">
                I am a corporate law professional with expertise in corporate advisory, capital markets, infrastructure and project finance, and regulatory compliance.
            </div>


            <button className="primary-btn mt-14 w-[50%] h-[7%] bg-white text-[14px] text-[#004080]">Download Resume</button>



            {/* <section className="title container">
            <p className="banner-subheading">Protect | Grow | Succeed – Corporate Legal Expertise You Can Trust.</p>
            <h3 className="banner-heading">
                Your Partner in Business Law/Compliance
            </h3>
            <p className="banner-rhym"> I specialize in corporate
                law, contract drafting, business compliance, and dispute
                resolution. <br /> Let's protect and grow your business together.</p>
            <div style={{ marginTop: "20px" }}>
                <button className="primary-btn">View My Services</button>
                <button className="sec-btn">Schedule a Consultation</button>
            </div>
        </section> */}

        </section>
    </>

}

export default Banner;