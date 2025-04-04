import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";
import ExpertiseContainer from "./Expertise-container";
import Banner from "./Banner";
import SeeMore from "./SeeMore";
import { useState, useEffect } from "react";

function App() {
  const [showMore, setShowMore] = useState(false);
  const [data, setData] = useState([]);

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
    <div>
      <Banner />
      <section className="about flex">
        <h1>BLOGS AND INSIGHTS</h1>
      </section>
      <div>
        {data && data.map((item) => {
          return <Article cardTitle={item.cardTitle} borderColor={item.borderColor} imgUrl={item.imgUrl} />
        })}
      </div>
      {/* <SeeMore data={data} showMore={showMore} setShowMore={setShowMore} /> */}
      <ExpertiseContainer />
      <Footer />
    </div>
  );
}

export default App;