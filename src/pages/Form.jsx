import { Link } from "react-router-dom";
import Questions from "../components/Questions";
import { useEffect, useState } from "react";
import axios from "axios";

function Form({ base_api_url }) {
  // fetch questions from server function
  const handleQuestions = async () => {
    const res = await axios.get(`${base_api_url}/api/questions`);
    const data = res.data[0];
    setLoading(false);
    setQuestions(data);
  };

  const [questions, setQuestions] = useState({});
  const [loading, setLoading] = useState(true);

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
      <form encType="multipart/form-data" method="PUT" className="relative">
        {/* loading container */}
        <section
          className={
            loading
              ? "absolute z-30 w-full h-full bg-white left-0 top-0 flex flex-col items-center justify-center gap-2"
              : "hidden"
          }
        >
          <img src="loading.gif" alt="loading..." className="w-12 h-12" />
          <p className="text-sm">Just a sec...</p>
        </section>
        {/* questions */}
        <Questions questions={questions} base_api_url={base_api_url} />
      </form>
    </div>
  );
}

export default Form;
