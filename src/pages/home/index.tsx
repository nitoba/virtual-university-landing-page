import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CardInfo } from "../../components/CardInfo";
import { SectionInfo } from "../../components/SectionInfo";

import support from "../../assets/images/support.png";
import onlineStructure from "../../assets/images/online-structure.png";
import securePayments from "../../assets/images/secure-payments.png";
import computeScience from "../../assets/images/compute-science.png";
import businessEconomy from "../../assets/images/business-economy.png";
import chemicalEngineering from "../../assets/images/chemical-engineering.png";
import students from "../../assets/images/students.png";
import map from "../../assets/images/map.png";
import smile from "../../assets/icons/smile.svg";
import people from "../../assets/icons/people.svg";
import clock from "../../assets/icons/clock.svg";

import styles from "./styles.module.scss";

export function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.landingContainer}>
        <div className={styles.landingTextContainer}>
          <h1>A virtual university, with real degrees</h1>
          <p>
            Credischool is an accredited virtual university built by top
            professors from Harvard, Stanford, MIT, and many more. The students
            at Credischool are welcome to study at their own pace.
          </p>
          <Button variant="blue" title="Learn More" />
        </div>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerImageContainer}>
            <CardInfo
              title="Total stipends given"
              description="$10.508.305"
              icon={<img src={smile} />}
              variant="blue"
            />
          </div>
        </div>
      </section>
      <section className={styles.attributionsContainer}>
        <div className={styles.attributionCard}>
          <img className={styles.attributionCardImage} src={support} />
          <h4>24/7 Support</h4>
          <p>Always online to help you</p>
        </div>

        <div className={styles.attributionCard}>
          <img className={styles.attributionCardImage} src={securePayments} />
          <h4>Secure Payments</h4>
          <p>Pay your semesters fast & secure</p>
        </div>

        <div className={styles.attributionCard}>
          <img className={styles.attributionCardImage} src={onlineStructure} />
          <h4>Online Lectures</h4>
          <p>Study in real time, review later</p>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Explore the departments</h2>
        <SectionInfo
          title="Computer Science"
          description="Our computer science department has multiple learning paths, from Mobile and Web development, to Machine Learning and Data Science."
          image={computeScience}
        />
        <SectionInfo
          title="Chemical Engineering"
          description="All of the students that are enrolled in the Chemical Engineering program receive a Chemist’s Kit to practice while learning from home."
          image={chemicalEngineering}
          contentDirection="left"
        />
        <SectionInfo
          title="Business & Economics"
          description="The future CEOs and Entrepreneurs have an opportunity to study the business climate and analyize real world case studies of business success stories."
          image={businessEconomy}
        />
      </section>
      <section className={styles.section}>
        <h2>More than 50.000 students has enrolled this year</h2>
        <img className={styles.map} src={map} alt="Map of students" />
        <div className={styles.cards}>
          <CardInfo
            title="Students"
            description="150.000+"
            icon={<img src={people} />}
            variant="blue"
          />
          <CardInfo
            title="Time Zones"
            description="10+"
            icon={<img src={clock} />}
            variant="red"
          />
        </div>
      </section>
      <section className={styles.interesting}>
        <div className={styles.interestingActionCard}>
          <h3>Interested? Let’s get you started</h3>
          <Button title="Register" variant="red" />
        </div>
        <img src={students} alt="Students forming" />
      </section>
      <Footer />
    </div>
  );
}
