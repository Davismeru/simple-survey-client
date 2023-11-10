import { useState } from "react";

function Gender({ setUserGender, setInputCheck }) {
  const handleInputChange = (e) => {
    setUserGender(e.target.value);
    setInputCheck(e.target.value);
  };
  return (
    <div className="text-sm">
      <input
        type="radio"
        className="w-fit mr-5 mb-5 md:text-sm"
        value="male"
        name="gender"
        onChange={handleInputChange}
      />
      <label>Male</label>
      <br />

      <input
        type="radio"
        className="w-fit mr-5 mb-5"
        value="female"
        name="gender"
        onChange={handleInputChange}
      />
      <label>Female</label>
      <br />

      <input
        type="radio"
        className="w-fit mr-5 mb-5"
        value="Other"
        name="gender"
        onChange={handleInputChange}
      />
      <label>other</label>
    </div>
  );
}

export default Gender;
