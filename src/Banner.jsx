import Header from "./Header";
import './Banner.css';
import Nav from "./Nav"
import ResumeDownloadButton from "./DownloadResume";



function Banner() {

    return <>

        <Nav />

        <section className="banner flex flex-col justify-start">

            <Header />


            <div className="bg-red-300 rounded-[50%] w-[60vw] h-[60vw] mt-20 md:w-[50vh] md:h-[50vh]">
                <img className="rounded-[50%] w-full h-full object-cover" src={process.env.PUBLIC_URL + "/mahima.png"} alt="Profile Picture" />
            </div>



            <div className="text-center p-[10%] text-white">
                <p className="text-[16px] font-thin font-serif animate-slide-up">Hi, I am <span className="text-white text-[24px] font-normal ">Mahima</span>, Lawyer | CS Professional</p>
            </div>

            <div className="px-[10%] text-center text-gray-200 text-[12px] font-serif animate-slide-up">
                I am a law professional with expertise in corporate advisory, capital markets, infrastructure and project finance, and regulatory compliance.
            </div>


            <ResumeDownloadButton />



        </section>
    </>

}

export default Banner;