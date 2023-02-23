// A React functional component is a simple JavaScript function
// Accepts props and returns a React element.

import { StyledButton } from "./button/styles";

const Button = ({ text }) => {
  const testLog = () => {
    console.log("hello world");
  };
  return (
    <>
      <StyledButton onClick={testLog}>{text}</StyledButton>
    </>
  );
};

// Export default is used to export a single class, function or primitive from a script file
// You can only have one default export per file
export default Button;
