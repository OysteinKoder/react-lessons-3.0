// A React functional component is a simple JavaScript function
// Accepts props and returns a React element.

const Button = () => {
  const testLog = () => {
    console.log("hello world");
  };

  return (
    <>
      <button onClick={testLog}>click me</button>
    </>
  );
};

// Export default is used to export a single class, function or primitive from a script file
// You can only have one default export per file
export default Button;
