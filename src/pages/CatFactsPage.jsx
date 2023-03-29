import axios from "axios";
import { useState, useEffect } from "react";
import { TEXT } from "../language/language";

const CatFactsPage = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const fetchData = () => {
    // Make a GET request to the specified URL
    axios
      .get("https://cat-fact.herokuapp.com/facts")
      .then((res) => {
        // Set the data state
        setData(() => res.data);
      })
      .catch((res) => {
        // Set the error state
        setError(() => res);
      });
  };

  useEffect(() => {
    // Fires fetchData on mount
    fetchData();
  }, []);
  // data.map goes through the array and returns the text property of each object
  if (data) {
    return (
      <>
        <h2>Facts</h2>
        {data.map((fact) => {
          return <p key={fact._id}>{fact.text}</p>;
        })}
      </>
    );
  }

  // If there is an error, display the error message
  else if (error) {
    return <h2>{error.message}</h2>;
  } else {
    return <h2>{TEXT.EVENTS.LOADING}</h2>;
  }
};

export default CatFactsPage;
