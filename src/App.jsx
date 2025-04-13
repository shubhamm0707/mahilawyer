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
import ArticleDes from "./ArticleDes";

function App() {
  const [showMore, setShowMore] = useState(false);
  const [data, setData] = useState([]);
  const [showPrivacy, setShowPrivacy] = useState(false);  // Make sure this is false by default
  const [showTerms, setShowTerms] = useState(false);
  const [showArticle, setShowArticle] = useState(false);
  const [articleIndex, setArticleIndex] = useState(0);

  const list = [
    {
      "imgUrl": "https://images.livemint.com/img/2024/07/30/600x338/Sebi_1707411400672_1722317453117.jpg",
      "cardTitle": "SEBI's Operationalization of PaRRVA: A Bold Step Towards Verifiable Investment Claims",
      "des": (
        <article>
          <p>
            In a <em>pivotal</em> move aimed at enhancing transparency <br></br> and investor confidence, the Securities and Exchange Board of India (SEBI) has formalized the recognition and operationalization of Past Risk and Return Verification Agencies (PaRRVAs). This regulatory development, outlined in SEBI Circular SEBI/HO/MIRSD/MIRSD-POD/PICIR/2025/51 dated April 4, 2025, introduces a robust mechanism to validate historical performance claims made by various market intermediaries. The implications for investment advisers, research analysts, algorithmic trading providers, and compliance professionals are profound. This article provides a comprehensive legal analysis of the circular, its background, structural framework, and broader market impact.
          </p>

          <h2>Introduction</h2>

          <p>
            In today’s financial landscape, credibility is currency. With the proliferation of investment advice, algorithmic trading strategies, and market analysis tools, investors are often inundated with performance claims that lack uniform verification standards. Recognizing the systemic risk posed by unverified data, SEBI has taken a decisive step by establishing a framework for Past Risk and Return Verification Agencies (PaRRVAs).
          </p>

          <p>
            Rooted in the powers granted under the SEBI (Intermediaries) Regulations, 2008, and the SEBI (Credit Rating Agencies) Regulations, 1999, this initiative introduces a new class of entities responsible for verifying historical risk and return metrics disclosed by regulated entities. This move not only enhances market integrity but also aligns with global trends in investor protection and accountability.
          </p>

          <h2>Regulatory Framework and Structural Overview</h2>

          <ul>
            <li><strong>Eligibility:</strong> Only SEBI-registered Credit Rating Agencies (CRAs) may be recognized as PaRRVAs, under Regulation 12A of the CRA Regulations, read with Regulation 16E of the Intermediaries Regulations.</li>
            <li><strong>Scope of Verification:</strong> PaRRVAs will validate performance metrics claimed by:
              <ul>
                <li>Investment Advisers (IAs)</li>
                <li>Research Analysts (RAs)</li>
                <li>Algo providers empaneled with recognized Stock Exchanges</li>
                <li>Intermediaries permitted to offer IA, RA, and algorithmic trading services</li>
              </ul>
            </li>
            <li><strong>Operational Model:</strong> Each PaRRVA must partner with a recognized Stock Exchange, which will act as a PaRRVA Data Centre (PDC). While the PDC facilitates the data and computation infrastructure, the responsibility for verification lies solely with the PaRRVA.</li>
            <li><strong>Principal-Agent Relationship:</strong> The PDC functions under a contractual agency model, providing back-end support while the PaRRVA remains the accountable entity.</li>
          </ul>

          <h2>Rationale Behind the Circular</h2>

          <p>The motivation behind this regulatory innovation is threefold:</p>

          <ul>
            <li><strong>Investor Protection:</strong> Ensuring that investment performance claims are backed by a verified track record protects retail and institutional investors from misleading promotions.</li>
            <li><strong>Market Discipline:</strong> The presence of a standardized verification mechanism encourages market participants to adhere to best practices in disclosure and representation.</li>
            <li><strong>Technological Enablement:</strong> Partnering with Stock Exchanges as Data Centres leverages their advanced data ecosystems, creating a scalable and tech-enabled verification system.</li>
          </ul>

          <h2>Implications for the Industry</h2>

          <p>The rollout of PaRRVAs is poised to reshape the regulatory and operational contours of several financial service sectors:</p>

          <ul>
            <li><strong>For Investment Advisers and Analysts:</strong> All claims relating to past returns or performance will require PaRRVA verification, impacting their marketing materials, client reporting, and compliance protocols.</li>
            <li><strong>For Compliance Professionals:</strong> Internal compliance teams must adapt policies and monitoring systems to ensure alignment with PaRRVA standards. Documentation of claims and data integrity will become more critical than ever.</li>
            <li><strong>For Investors:</strong> This initiative significantly enhances the reliability of disclosed information, empowering investors to make better-informed decisions.</li>
            <li><strong>For Legal and Regulatory Practitioners:</strong> The development of case law and regulatory interpretations around PaRRVA operations will be a fertile ground for legal advisory and litigation.</li>
          </ul>

          <h2>Potential Challenges and Considerations</h2>

          <p>Despite its progressive outlook, the implementation of PaRRVAs may face several hurdles:</p>

          <ul>
            <li><strong>Data Standardization:</strong> Ensuring uniformity in data formats and definitions across intermediaries will be a complex undertaking.</li>
            <li><strong>Capacity and Readiness:</strong> CRAs transitioning to PaRRVA roles will need substantial technical infrastructure and domain expertise.</li>
            <li><strong>Cost Implications:</strong> Verification processes may increase operational costs, particularly for smaller intermediaries.</li>
          </ul>

          <p>SEBI's ability to address these challenges will determine the long-term efficacy of the PaRRVA ecosystem.</p>

          <h2>Conclusion</h2>

          <p>
            The establishment of PaRRVAs marks a significant regulatory evolution in the Indian securities market. By institutionalizing the verification of risk and return data, SEBI has fortified the market against misinformation and brought India a step closer to global best practices in financial disclosure. For stakeholders across the spectrum—from regulators and market participants to legal professionals and investors—this is both a challenge and an opportunity to contribute to a more transparent and trustworthy financial ecosystem.
          </p>

          <p>
            As the operational dynamics of PaRRVAs unfold, continuous legal scrutiny and strategic adaptation will be crucial in ensuring that the system achieves its intended objectives without stifling innovation or accessibility in the market.
          </p>
        </article>
      ),
      "borderColor": "#004080",
      "tag1": "SEBIRegulations",
      "tag2": "InvestorProtection",
    },
    {
      "imgUrl": "https://media.istockphoto.com/id/1435605327/photo/cybersecurity-concept-global-network-security-technology-business-people-protect-personal.jpg?s=612x612&w=0&k=20&c=9QvqAsfANdpsNcYdZ0WlMd5lKaTR9BvnTpFnrtGbV0s=",
      "cardTitle": "India's Digital Personal Data Protection (DPDP) Regulations: A Pivotal Advancement in Data Privacy and Governance",
      "des": (
        <article>
          <blockquote>
            <em>"Data privacy is not just a right; it is the foundation of trust in the digital age."</em>
          </blockquote>
          <br></br>

          <p>
            In an increasingly interconnected and digitized world, the protection of personal data has emerged as a critical concern for both individuals and organizations. The introduction of the Digital Personal Data Protection (DPDP) Rules in India marks a significant step forward in the country's data privacy landscape. These rules are part of the broader Digital Personal Data Protection Act, 2023 (DPDP Act), and aim to regulate the collection, storage, processing, and transfer of personal data. The DPDP Rules strike a balance between safeguarding personal data from misuse and encouraging innovation within the digital economy.
          </p>
          <br></br>
          <h2> <strong>1. Overview of the DPDP Rules</strong></h2>
          <p>
            The DPDP Rules have been introduced to empower individuals by granting them greater control over their personal data while holding organizations accountable for their data processing activities. Central to the DPDP Rules is an emphasis on consumer rights and organizational responsibilities.
          </p>
          <p>
            Among the key provisions is the requirement for obtaining <strong>informed consent</strong> before collecting personal data, ensuring that individuals understand how their data will be utilized. The rules also introduce the <strong>right to erasure</strong>, allowing individuals to request the deletion of their data from the systems of data processors. This provision bolsters individuals' autonomy over their digital identities.
          </p>
          <p>
            Moreover, the rules emphasize <strong>data security</strong>, mandating data fiduciaries to implement adequate security practices to prevent breaches and misuse. These provisions represent a significant move toward fostering trust between businesses and consumers within the digital ecosystem.
          </p>
          <br></br>
          <h2> <strong>2. Graded Compliance for Different Stakeholders</strong></h2>
          <p>
            A notable feature of the DPDP Rules is the <strong>graded compliance framework</strong> for businesses. This framework imposes compliance obligations based on the scale and scope of data processing activities conducted by organizations. As such, small businesses and startups are not burdened with overly stringent requirements, while larger corporations that process significant amounts of data are subject to more rigorous standards.
          </p>
          <br></br>
          <h2> <strong>3. Right to Redress and the Establishment of the Data Protection Board</strong></h2>
          <p>
            Another critical aspect of the DPDP Rules is the establishment of the <strong>Data Protection Board</strong>. This regulatory body is tasked with overseeing complaints related to violations of data protection rights. The Board will also have the authority to impose penalties on organizations found to be non-compliant with the DPDP Act.
          </p>
          <p>
            The DPDP Rules are designed with a digital-first approach, offering an online platform for individuals to file complaints and grievances efficiently. This streamlined process not only enhances accessibility for citizens but also ensures a transparent and accountable grievance redressal mechanism.
          </p>
          <br></br>
          <h2> <strong>4. Public Awareness and Stakeholder Involvement</strong></h2>
          <p>
            The development of the DPDP Rules has been notably inclusive, with the Indian government actively seeking input from various stakeholders, including technology companies, privacy advocates, and data protection experts. This collaborative approach has helped shape rules that are both practical and comprehensive, catering to a wide range of sectors.
          </p>
          <p>
            In addition, the government is focused on <strong>public awareness campaigns</strong> to educate citizens about their rights under the new law. Given the ongoing digital transformation in India, where digital literacy varies across the population, these initiatives are vital to ensuring that individuals are aware of their data protection rights and are able to exercise them effectively.
          </p>
          <br></br>
          <h2> <strong>5. Key Provisions of the DPDP Rules</strong></h2>
          <ul className="list-decimal ml-6">
            <li><strong>Informed Consent:</strong> Organizations must obtain explicit, informed, and voluntary consent from individuals before collecting their personal data. Consent must be specific and can be withdrawn at any time by the individual.</li>
            <li><strong>Right to Erasure:</strong> Individuals have the right to request the deletion of their personal data from the systems of data processors, ensuring greater control over their digital footprint.</li>
            <li><strong>Data Fiduciary Obligations:</strong> Data fiduciaries (organizations that collect, store, or process personal data) are required to adopt robust security practices to protect personal data from misuse or unauthorized access.</li>
            <li><strong>Grievance Redressal:</strong> The creation of the Data Protection Board, along with a digital platform for filing complaints, facilitates an efficient and transparent process for addressing data protection violations.</li>
            <li><strong>Data Protection Impact Assessments:</strong> Data fiduciaries must conduct assessments to ensure their data processing activities comply with the DPDP Act.</li>
            <li><strong>Cross-Border Data Transfers:</strong> The DPDP Rules regulate the transfer of personal data outside India, ensuring that such data is protected even when transferred to jurisdictions with differing data protection standards.</li>
          </ul>
          <br></br>
          <h2> <strong>6. The Path Forward: Challenges and Opportunities</strong></h2>
          <p>
            While the DPDP Rules represent a significant advancement in the protection of personal data, the challenge lies in their implementation. Both businesses and individuals will require time and support to adapt to the new regulatory framework. The government's proactive approach, including awareness campaigns and an accessible grievance redressal system, will be crucial for the smooth rollout of these rules.
          </p>
          <p>
            For businesses, understanding and complying with the new regulatory requirements will be essential. Data fiduciaries will need to invest in secure data protection measures and adopt transparent practices to avoid penalties.
          </p>
          <br></br>
          <h2> <strong>7. Conclusion</strong></h2>
          <p>
            The introduction of the Digital Personal Data Protection Rules is a landmark moment for data privacy in India. These rules represent a significant step forward in balancing the need for robust data protection with the fostering of innovation in the digital economy. By establishing a framework that promotes transparency, accountability, and consumer empowerment, India is positioning itself as a global leader in data governance.
          </p>
          <p>
            However, the ultimate success of the DPDP Rules will depend on effective enforcement and the collaborative efforts of all stakeholders, including businesses, government bodies, and the public. As India continues to grow as a digital economy, these rules will play a critical role in safeguarding citizens' privacy and ensuring a secure and transparent digital future.
          </p>
        </article>


      ),
      "borderColor": "#004080",
      "tag1": "CyberLawIndia",
      "tag2": "DataProtection",
    },
    {
      "imgUrl": "https://img.freepik.com/premium-photo/whistleblower-individual-whistle-blower-employee-whistleblower-concept-as-mole-symbol-sec_924455-474.jpg?w=360",
      "cardTitle": "Breaking the Silence: The Role of Whistleblower Protection Laws in India's Corporate World",
      "des": (<div>
        <blockquote>
          <p>
            <em> “Whistle-blowers protection is a policy that all government leaders support in public but few in power tolerate in private” – </em> <strong>Thomas M. Devine</strong>
          </p>
        </blockquote>
        <br></br>
        <p>
          Whistleblower protection is essential for fostering transparency and accountability in organizations, yet employees in India and around the world often hesitate to report corporate misconduct due to fear of retaliation. Recent high-profile cases, such as the dismissal of an Air India trainer pilot following whistleblower claims, the tragic death of OpenAI whistleblower Suchir Balaji, and the lawsuit filed by the family of a deceased Boeing safety whistleblower, highlight the personal risks faced by those who expose wrongdoing. Despite legal protections, such as India’s Whistleblowers Protection Act, challenges in enforcement remain, underscoring the need for stronger safeguards and a corporate culture that supports transparency and ethical reporting.
        </p>
        <p>
          This article explores the evolution of whistleblower protection laws in India, the ongoing challenges, and the importance of creating a safe environment for individuals to speak out against unethical practices.
        </p>
        <br></br>
        <h2> <strong>1. Understanding Whistleblower Protection</strong></h2>
        <p>
          At its core, a whistleblower is a person who reveals unlawful activity, fraud, unethical behavior, or safety issues within their company; these individuals are usually current or former employees. In order to uncover and stop wrongdoing that could otherwise go unnoticed or unheeded, whistleblowers are essential.
        </p>
        <p>
          Laws protecting whistleblowers are intended to safeguard persons who expose such misconduct from reprisals, including harassment, wrongful termination, and other types of personal or professional injury. These safeguards are necessary to preserve moral principles, guarantee legal compliance, and preserve the integrity of the business environment.
        </p>
        <br></br>
        <h2> <strong>2. Legal Framework in India</strong></h2>
        <p>
          India has created a robust legal framework to protect whistleblowers and ensure that companies operate with integrity and transparency. Below are the key legislative provisions that both businesses and legal professionals should be familiar with:
        </p>
        <br></br>
        <h3> <strong>a) The Whistleblower Protection Act, 2014</strong></h3>
        <p>
          The Whistleblower Protection Act (WPA), 2014, is a pivotal piece of legislation intended to safeguard individuals who report corruption, misconduct, or violations of the law. Initially designed for the public sector, the Act also lays a foundation for whistleblower protection in the private sector, though critics argue that its provisions are not strong enough for private-sector employees.
        </p>
        <ul >
          <li><strong>Protection Against Retaliation:</strong> The Act provides clear safeguards against any retaliatory action, including firing, demotion, or discrimination, aimed at employees who report wrongdoing.</li>
          <li><strong>Whistleblower Committees:</strong> Companies are required to set up internal committees to review and address whistleblower complaints. This ensures that allegations are taken seriously and are properly investigated.</li>
          <li><strong>Confidentiality:</strong> The Act mandates that the identity of the whistleblower remains confidential to protect them from retaliation.</li>
        </ul>
        <br></br>
        <h3> <strong>b) The Companies Act, 2013</strong></h3>
        <p>
          Section 177 of the Companies Act, 2013, requires listed companies and certain public companies to establish a formal mechanism for reporting concerns related to unethical behavior, fraud, or violations of company policies.
        </p>
        <ul>
          <li><strong>Vigil Mechanism:</strong> Companies must establish a formal mechanism that allows employees to report violations.</li>
          <li><strong>Protection of Whistleblowers:</strong> The Act ensures that whistleblowers who raise concerns are shielded from retaliation.</li>
          <li><strong>Independence of the Mechanism:</strong> The whistleblower mechanism must be independent of the management.</li>
        </ul>
        <br></br>
        <h3> <strong>c) SEBI Regulations</strong></h3>
        <p>
          The Securities and Exchange Board of India (SEBI) has its own set of guidelines aimed at ensuring corporate governance and the protection of whistleblowers, particularly in the context of listed companies.
        </p>
        <ul>
          <li>SEBI's regulations require companies to implement a whistleblower policy, which guarantees confidentiality and protection from retaliation.</li>
          <li>Companies must disclose their whistleblower policies and establish a clear process for resolving complaints.</li>
        </ul>

        <br></br>
        <h2> <strong>3. Key Challenges in Implementing Whistleblower Protection Laws:</strong></h2>
        <p>
          While India has made significant progress in creating a legal framework for whistleblower protection, several challenges continue to impede its full implementation. Overcoming these challenges is critical to building a truly transparent corporate environment.
        </p>

        <ol className="list-[lower-alpha] ml-6">
          <li>Lack of Awareness and Education: A major obstacle to effective whistleblower protection is the lack of awareness among both employees and employers. Many employees are unaware of their rights under the law, and as a result, they hesitate to report misconduct. In some cases, businesses do not adequately inform employees about whistleblower protection policies, making them less likely to come forward.</li>
          <li>Inconsistent Enforcement and Weak Mechanisms: Though the law mandates the establishment of whistleblower protection mechanisms, their enforcement remains inconsistent. Many companies fail to create independent, transparent systems to handle complaints, which undermines the trust that employees have in these mechanisms. Without a robust follow-up system, whistleblowers may feel that their complaints will not be addressed fairly, deterring them from reporting misconduct.</li>
          <li>Fear of Reprisal: Even with legal safeguards in place, employees may still fear retaliation, especially in corporate environments where unethical behavior is tolerated or overlooked. In such cultures, reporting misconduct can lead to negative consequences, including harassment or damage to the employee’s career. Despite the protections offered by law, the prevailing corporate culture in many organizations still discourages whistleblowing.</li>
          <li>Weak Protection in the Private Sector: While the Companies Act mandates whistleblower policies for listed companies, smaller businesses or those not subject to stringent regulatory oversight often lack robust whistleblower protection mechanisms. This leaves employees in the private sector vulnerable, as there is little legal recourse if retaliation occurs.</li>
        </ol>


        <br></br>
        <h2> <strong>4. Best Practices for Promoting Effective Whistleblower Protection:</strong></h2>
        <p>
          For whistleblower protection laws to be truly effective, companies must go beyond compliance and actively foster an environment where reporting misconduct is encouraged and protected. Here are some best practices:
        </p>
        <ol className="list-[lower-alpha] ml-6">
          <li>Develop Clear and Transparent Whistleblower Policies: Companies should establish clear, written whistleblower policies that outline how complaints can be made, how investigations will be handled, and what protections whistleblowers can expect. These policies should be easily accessible to all employees and communicated regularly.</li>
          <li>Ensure Confidentiality: Confidentiality is paramount in protecting whistleblowers from retaliation. Companies must guarantee that the identity of the whistleblower is kept private throughout the investigation process. Any disclosure should only occur with the express consent of the whistleblower.</li>
          <li>Independent Oversight and Investigation: Whistleblower complaints should be reviewed by an independent committee that is free from management influence. This ensures that investigations are impartial and that the process is transparent. A robust investigation process helps establish trust in the mechanism and encourages more individuals to come forward.</li>
          <li>Provide Legal Support: Offering legal counsel to whistleblowers can help them better understand their rights and navigate the reporting process. Legal support ensures that whistleblowers are aware of the protection afforded to them under Indian law and that they feel empowered to report misconduct without fear of retaliation.</li>
          <li>Foster a Supportive Corporate Culture: Perhaps the most crucial aspect of effective whistleblower protection is the corporate culture. Organizations must foster an environment that encourages ethical behavior and actively discourages retaliation against whistleblowers. Corporate leaders should demonstrate their commitment to transparency and ethical behavior by leading by example.</li>
        </ol>
        <p><em>To date, there are no specific laws dealing with the protection of whistleblowers applicable to private, unlisted companies or unincorporated entities and their employees.</em></p>

        <br></br>
        <h2> <strong>5. Conclusion:</strong></h2>
        <p>
          Corporate whistleblower protection laws in India are essential to ensuring that businesses operate with transparency and accountability. These laws provide vital safeguards for employees who report corporate misconduct, helping to prevent fraud, corruption, and financial wrongdoing. While India’s legal framework has made great strides, challenges remain in its effective implementation. By adopting best practices and strengthening whistleblower protection mechanisms, businesses can foster an environment that encourages ethical conduct and promotes corporate integrity. To continue improving corporate governance, India must focus on enhancing legal protections for whistleblowers, ensuring that they are not only protected by law but also supported by a corporate culture that values transparency and accountability.
        </p>
      </div>),
      "borderColor": "#004080",
      "tag1": "WhistleblowerProtection",
      "tag2": "CorporateTransparency",
    },
  ];

  // https://shubhamm0707.github.io/jsonAPI/data.json
  useEffect(() => {
    fetch("https://shubhamm0707.github.io/jsonAPI/data.json")
      .then(response => response.json())
      .then(data => {
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
      {showArticle && <ArticleDes setShowArticle={setShowArticle} articleIndex={articleIndex} articleData={list} />}

      {(!showPrivacy && !showTerms && !showArticle) && (
        <>
          <Disclaimer />
          <Banner />
          <section className="about flex">
            <h1 className="font-serif">BLOGS AND INSIGHTS</h1>
          </section>
          <div>
            {/* {data && data.map((item, index) => (
              <Article
                key={index}
                cardTitle={item.cardTitle}
                borderColor={item.borderColor}
                imgUrl={item.imgUrl}
              />
            ))} */}
            {list && list.map((item, index) => (
              <Article
                key={index}
                cardTitle={item.cardTitle}
                borderColor={item.borderColor}
                imgUrl={item.imgUrl}
                index={index}
                setShowArticle={setShowArticle}
                setArticleIndex={setArticleIndex}
                articleData={list}
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