import Paragraph from "../components/Paragraph";
import { StyledParagraph } from "../components/paragraphs/styles";
import { TEXT } from "../language/language";

const AboutPage = () => {
  return (
    <>
      <StyledParagraph> {TEXT.ABOUT_PAGE.ABOUT_TEXT} </StyledParagraph>
    </>
  );
};

export default AboutPage;
