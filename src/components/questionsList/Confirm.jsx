function Confirm({
  name,
  email,
  userDescription,
  userGender,
  userStack,
  fileNames,
}) {
  return (
    <div className="confirm_section">
      <section className="text-lg text-gray-500 flex flex-col gap-2 h-72 overflow-y-auto md:h-52 md:text-[12px]">
        <p>
          <span>FULL NAME</span> {name}
        </p>
        <p>
          <span>EMAIL ADDRESS</span> {email}
        </p>
        <p>
          <span>ABOUT ME</span> {userDescription}
        </p>
        <p>
          <span>GENDER</span> {userGender}
        </p>
        <p>
          <span>PROGRAMMING STACK</span> {userStack}
        </p>
        <ul>
          <span>CERTIFICATES: </span>
          {fileNames.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Confirm;
