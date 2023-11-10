function Email({ email, setEmail, setInputCheck }) {
  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setInputCheck(e.target.value);
  };
  return (
    <div>
      <input
        type="email"
        placeholder="ann@gmail.com"
        value={email}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Email;
