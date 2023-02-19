import Paragraph from "../components/Paragraph";
import { language } from "../language/language";

const AboutPage = () => {
  return (
    <>
      <Paragraph text={language.aboutPage.ABOUT_TEXT} />
    </>
  );
};

export default AboutPage;
