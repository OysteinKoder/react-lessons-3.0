// these two components are named exports

import { StyledParagraph } from "./paragraphs/styles";

// ParagraphOne component.
// Renders a paragraph element styled with StyledParagraph and displays the text passed to it as a prop.
// @param {Object} props - Object containing text property as a string.
// @returns {JSX.Element} - ParagraphOne component.

export const ParagraphOne = ({ text }) => {
  return <StyledParagraph>{text}</StyledParagraph>;
};

export const ParagraphTwo = ({ text }) => {
  return <StyledParagraph>{text}</StyledParagraph>;
};
