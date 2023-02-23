import { TEXT } from "../language/language";
import { useState } from "react";
import { StyledButton } from "../components/button/styles";
import { StyledParagraph } from "../components/paragraphs/styles";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
    console.log("increment");
  };

  const decrement = () => {
    setCount((count) => count - 1);
    console.log("decrement");
  };

  return (
    <>
      <StyledParagraph
        style={
          count > 0 ? { color: "green" } : count < 0 ? { color: "red" } : null
        }
      >
        {count}
      </StyledParagraph>
      <StyledButton onClick={increment}>
        {TEXT.COUNTER_PAGE.INCREMENT_BUTTON}
      </StyledButton>
      <StyledButton onClick={decrement}>
        {TEXT.COUNTER_PAGE.DECREMENT_BUTTON}
      </StyledButton>
    </>
  );
};

export default CounterPage;
