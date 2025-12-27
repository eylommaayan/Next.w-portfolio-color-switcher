import Image from "next/image";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <Image
              src="/assets/about.jpg"
              alt="About"
              width={600}
              height={800}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
        </div>

        <div className="about__right">
          <h2>עלי</h2>

          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>

          <p>
            אני מתמחה בצביעת בתים, חידוש קירות, תיקוני שפכטל ויצירת גרפיקות קיר
            שמוסיפות אופי לכל חלל. המטרה שלי פשוטה: להפוך קיר “רגיל” למשהו
            שמרגישים בו בית.
          </p>

          <p>
            לפני כל עבודה אני עוזר לבחור גוון נכון לפי התאורה והריהוט, דואג
            להכנה מקצועית של הקיר (ניקוי/שיוף/שפכטל), וצובע בגימור נקי ומדויק.
            אפשר גם להוסיף ציורי קיר/דוגמאות/טקסטורות לפי סגנון: מודרני, ילדים,
            בוהו, יוקרתי ועוד.
          </p>

          <a href="#contact" className="btn primary">
            קבלו הצעת מחיר
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
