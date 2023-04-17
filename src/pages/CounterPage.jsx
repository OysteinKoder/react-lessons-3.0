import { TEXT } from "../language/language";
import { useState } from "react";
import { StyledButton } from "../components/button/styles";
import { StyledParagraph } from "../components/paragraphs/styles";

const CounterPage = () => {
  // Hook that creates a state and a function to update it
  const [count, setCount] = useState(0);

  // Function that increments the count
  const increment = () => {
    setCount((count) => count + 1);
  };

  // Function that decrements the count
  const decrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      {/* Paragraph element that displays the current count */}
      <StyledParagraph
        value={count}
        // If the count is positive, the text color is green
        // If the count is negative, the text color is red
      >
        {count}
      </StyledParagraph>

      {/* Button that calls the increment function */}
      <StyledButton onClick={increment}>
        {TEXT.COUNTER_PAGE.INCREMENT_BUTTON}
      </StyledButton>

      {/* Button that calls the decrement function */}
      <StyledButton onClick={decrement}>
        {TEXT.COUNTER_PAGE.DECREMENT_BUTTON}
      </StyledButton>
    </>
  );
};

export default CounterPage;
