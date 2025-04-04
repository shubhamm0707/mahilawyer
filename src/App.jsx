import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";
import ExpertiseContainer from "./Expertise-container";
import Banner from "./Banner";
import SeeMore from "./SeeMore";
import { useState, useEffect } from "react";
import Disclaimer from "./Disclaimer";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfUse from "./TermsOfUse";

function App() {
  const [showMore, setShowMore] = useState(false);
  const [data, setData] = useState([]);
  const [showPrivacy, setShowPrivacy] = useState(false);  // Make sure this is false by default
  const [showTerms, setShowTerms] = useState(false);

  // https://shubhamm0707.github.io/jsonAPI/data.json
  useEffect(() => {
    fetch("https://shubhamm0707.github.io/jsonAPI/data.json")
      .then(response => response.json())
      .then(data => {
        console.log("work..");
        console.log(data);
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="relative">

      {showPrivacy && <PrivacyPolicy setShowPrivacy={setShowPrivacy} />}
      {showTerms && <TermsOfUse setShowTerms={setShowTerms} />}

      {(!showPrivacy && !showTerms) && (
        <>
          <Disclaimer />
          <Banner />
          <section className="about flex">
            <h1>BLOGS AND INSIGHTS</h1>
          </section>
          <div>
            {data && data.map((item, index) => (
              <Article
                key={index}
                cardTitle={item.cardTitle}
                borderColor={item.borderColor}
                imgUrl={item.imgUrl}
              />
            ))}
          </div>
          {/* <SeeMore data={data} showMore={showMore} setShowMore={setShowMore} /> */}
          <ExpertiseContainer />
          <Footer setShowPrivacy={setShowPrivacy} setShowTerms={setShowTerms} />
        </>
      )}
    </div>
  );
}

export default App;