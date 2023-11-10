function Certificates({ setUserCertificates, setInputCheck, setFileNames }) {
  const handleInputChange = (e) => {
    const allFiles = e.target.files;
    const fileNames = [];
    for (let i = 0; i < allFiles.length; i++) {
      fileNames.push(allFiles[i].name);
    }
    setUserCertificates(e.target.files);
    setInputCheck(e.target.value);
    setFileNames(fileNames);
  };
  return (
    <div>
      <input
        type="file"
        name="file"
        accept=".pdf"
        multiple
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Certificates;
