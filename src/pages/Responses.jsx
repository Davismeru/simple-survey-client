import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ResponseCard from "../components/ResponseCard";

function Responses({ base_api_url }) {
  const [responses, setResponses] = useState([]);

  const handleResponses = async () => {
    const res = await axios.get(
      `${base_api_url}/api/questions/responses?page=0`
    );
    console.log(res?.data);
    setResponses(res?.data);
  };

  // handle each individual certificates are diaplayed
  const handleCerts = (certs) => {
    // convert the certs list into an array
    const allCerts = certs.split(",");

    const certNames = allCerts.map((cert, index) => {
      const certName = cert.substring(21);

      // get the name as stored in the server
      const rootName = cert.substring(8);

      return (
        <li className="text-blue-500" key={index}>
          {" "}
          <a
            href={`${base_api_url}/api/questions/responses/certificates/${rootName}`}
          >
            {certName}
          </a>
        </li>
      );
    });

    return <ul>{certNames}</ul>;
  };

  // pagination functionality
  const handlePagination = () => {
    const pagesNumber = responses?.totalPages;
    const arr = [];
    for (let i = 0; i < pagesNumber; i++) {
      arr.push(`Page ${i + 1}`);
    }

    const pageList = arr.map((item, index) => {
      return (
        <button
          className="pagination_btn"
          key={index}
          onClick={async () => {
            const res = await axios.get(
              `${base_api_url}/api/questions/responses?page=${index}`
            );
            setResponses(res?.data);
          }}
        >
          {item}
        </button>
      );
    });

    return pageList;
  };

  useEffect(() => {
    handleResponses();
  }, []);
  return (
    <div className="mt-10">
      {/* header section */}
      <div className="res_header">
        <h1 className="text-3xl font-bold text-gray-600 mb-3">Survey App</h1>
        <section>
          <Link to="/">Survey Form</Link>
          <Link to="/responses">Responses</Link>
        </section>
      </div>

      {/* filter by email section */}
      <section className="filter_section">
        <input
          type="text"
          placeholder="Search email address"
          onChange={async (e) => {
            const res = await axios.get(
              `${base_api_url}/api/questions/responses?page=0&email=${e.target.value}`
            );
            setResponses(res.data);
            if (e.target.value == "") {
              handleResponses();
            }
          }}
        />
      </section>

      {/* responses section */}
      <div className="res_container">
        {responses.filteredData == ""
          ? responses.data &&
            responses.data.map((response, index) => (
              <ResponseCard
                response={response}
                handleCerts={handleCerts}
                key={index}
              />
            ))
          : responses.data &&
            responses.filteredData.map((response, index) => (
              <ResponseCard
                response={response}
                handleCerts={handleCerts}
                key={index}
              />
            ))}
      </div>

      {/* pagination buttons */}
      <section className="flex flex-wrap justify-center gap-3 my-5">
        {handlePagination()}
      </section>
    </div>
  );
}

export default Responses;
