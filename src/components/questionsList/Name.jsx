function Name({ name, setName, setInputCheck }) {
  const handleInputChange = (e) => {
    setName(e.target.value);
    setInputCheck(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Kimani Ann Nyambura"
        value={name}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Name;
