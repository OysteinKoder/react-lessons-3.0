import styled from "styled-components";

// StyledParagraph component.
// Renders a styled paragraph element with specific CSS styles.
// @returns {JSX.Element} - StyledParagraph component.

export const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) =>
    props.value > 0 ? "green" : props.value < 0 ? "red" : null};
  margin-bottom: 1em;
`;
