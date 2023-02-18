// A React functional component is a simple JavaScript function
// Accepts props and returns a React element.

const Button = () => {
  return <button onClick={() => console.log("hello world")}>click me</button>;
};

// Export default is used to export a single class, function or primitive from a script file
// You can only have one default export per file
export default Button;
