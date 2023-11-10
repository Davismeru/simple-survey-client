import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Name from "./questionsList/Name";
import Email from "./questionsList/Email";
import Description from "./questionsList/Description";
import Gender from "./questionsList/Gender";
import Stack from "./questionsList/Stack";
import Certificates from "./questionsList/Certificates";
import axios from "axios";
import Confirm from "./questionsList/Confirm";

function Questions({ questions }) {
  // destructure questions prop
  const {
    full_name,
    email_address,
    description,
    gender,
    programming_stack,
    certificates,
  } = questions;

  // convert questions object into an array
  const questionsArr = [
    full_name,
    email_address,
    description,
    gender,
    programming_stack,
    certificates,
  ];

  const [counter, setCounter] = useState(0);
  const [inputCheck, setInputCheck] = useState(""); //confirm initial state of each input is not empty
  const [fileNames, setFileNames] = useState([]); //recieve an array of uploaded cert's names from Certificates component

  // BUTTONS FUNCTIONS
  const handlePrevious = (e) => {
    e.preventDefault();
    setCounter(counter - 1);
    setInputCheck("some text");
  };

  const handleNext = (e) => {
    e.preventDefault();
    inputCheck != ""
      ? setCounter(counter + 1)
      : alert("This field is required");
    setInputCheck("");
  };

  // initial states of all inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userStack, setUserStack] = useState("");
  const [userCertificates, setUserCertifcates] = useState([]);

  // set which input is displayed
  const handleInputs = () => {
    if (counter == 0) {
      return (
        <Name name={name} setName={setName} setInputCheck={setInputCheck} />
      );
    } else if (counter == 1) {
      return (
        <Email
          email={email}
          setEmail={setEmail}
          setInputCheck={setInputCheck}
        />
      );
    } else if (counter == 2) {
      return (
        <Description
          userDescription={userDescription}
          setUserDescription={setUserDescription}
          setInputCheck={setInputCheck}
        />
      );
    } else if (counter == 3) {
      return (
        <Gender
          userGender={userGender}
          setUserGender={setUserGender}
          setInputCheck={setInputCheck}
        />
      );
    } else if (counter == 4) {
      return (
        <Stack
          userStack={userStack}
          setUserStack={setUserStack}
          setInputCheck={setInputCheck}
        />
      );
    } else if (counter == 5) {
      return (
        <Certificates
          userCertificates={userCertificates}
          setUserCertificates={setUserCertifcates}
          setInputCheck={setInputCheck}
          setFileNames={setFileNames}
        />
      );
    } else {
      return (
        <Confirm
          name={name}
          email={email}
          userDescription={userDescription}
          userGender={userGender}
          userStack={userStack}
          userCertificates={userCertificates}
          fileNames={fileNames}
        />
      );
    }
  };

  // submit all user inputs as form data
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const formData = new FormData();

    e.preventDefault();
    formData.append("full_name", name);
    formData.append("email_address", email);
    formData.append("description", userDescription);
    formData.append("gender", userGender);
    formData.append("programming_stack", userStack);
    for (let i = 0; i < userCertificates.length; i++) {
      formData.append("certificates", userCertificates[i]);
    }
    console.log(userCertificates);
    await axios.put("http://localhost:3000/api/questions/responses", formData);
    navigate("/success");
  };

  return (
    <div className="questions_container">
      {/* question section */}
      <section>
        <p className="mb-5 md:text-lg">{questionsArr[counter]}</p>
        {handleInputs()}
      </section>

      {/* buttons */}
      <div>
        {/* prev button */}
        <button
          onClick={handlePrevious}
          className={counter == 0 ? "hidden" : "visible"}
        >
          Previous
        </button>

        {/* next button */}
        <button
          onClick={handleNext}
          className={counter > questionsArr.length - 1 ? "hidden" : "visible"}
        >
          Next
        </button>

        {/* submit button */}
        <button
          className={counter < questionsArr.length ? "hidden" : "visible"}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Questions;
