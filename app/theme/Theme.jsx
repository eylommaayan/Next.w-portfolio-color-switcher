import Modal from "../components/Modal";
import { primaryColors, backgroundColors } from "./data";
import PrimaryColor from "./PrimaryColor";
import BackgroundColor from "./BackgroundColor";
import "./theme.css";

const Theme = () => {
  return (
    <Modal className="theme__modal">
      <h2 className="roomTitle">הדמיית צבעי קיר</h2>
      <p className="roomSubtitle">
        בחרו צבע וראו איך הוא משתלב עם החדר והרהיטים
      </p>

      <div className="theme__primary-wrapper">
        <h5>צבע עיקרי</h5>
        <div className="theme__primary-colors">
          {primaryColors.map((pColor) => (
            <PrimaryColor key={pColor.className} className={pColor.className} />
          ))}
        </div>
      </div>

      <div className="theme__background-wrapper">
        <h5>צבע רקע</h5>
        <div className="theme__background-colors">
          {backgroundColors.map((bColor) => (
            <BackgroundColor
              key={bColor.className}
              className={bColor.className}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Theme;
