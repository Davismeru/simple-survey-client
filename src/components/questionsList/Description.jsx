function Description({ userDescription, setUserDescription, setInputCheck }) {
  const handleInputChange = (e) => {
    setUserDescription(e.target.value);
    setInputCheck(e.target.value);
  };
  return (
    <div>
      <textarea
        className="border-[2px] outline-none h-72 w-full resize-none p-2 text-sm md:h-36 md:border-[1px] md:rounded-md"
        onChange={handleInputChange}
        value={userDescription}
      ></textarea>
    </div>
  );
}

export default Description;
