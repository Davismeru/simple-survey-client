import { Link } from "react-router-dom";
import Questions from "../components/Questions";
import { useEffect, useState } from "react";
import axios from "axios";

function Form({ base_api_url }) {
  // fetch questions from server function
  const handleQuestions = async () => {
    const res = await axios.get(`${base_api_url}/api/questions`);
    const data = res.data[0];
    setQuestions(data);
  };

  const [questions, setQuestions] = useState({});

  useEffect(() => {
    handleQuestions();
  }, []);

  return (
    <div className="container">
      {/* page navigation buttons */}
      <div className="header">
        <h1 className="text-3xl font-bold text-purple-400 mb-3">Survey App</h1>
        <section>
          <Link to="/">Survey Form</Link>
          <Link to="/responses">Responses</Link>
        </section>
      </div>

      {/* survey form */}
      <form encType="multipart/form-data" method="PUT">
        {/* questions */}
        <Questions questions={questions} base_api_url={base_api_url} />
      </form>
    </div>
  );
}

export default Form;
