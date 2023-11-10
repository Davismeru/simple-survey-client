import Select from "react-select";

function Stack({ setUserStack, setInputCheck }) {
  const options = [
    { value: "REACT", label: "React Js" },
    { value: "ANGULAR", label: "Angular Js" },
    { value: "VUE", label: "Vue Js" },
    { value: "SQL", label: "SQL" },
    { value: "P0STGRES", label: "Postgres" },
    { value: "MYSQL", label: "MySQL" },
    { value: "MSSQL", label: "Microsoft SQL Server" },
    { value: "Java", label: "Java" },
    { value: "PHP", label: "PHP" },
    { value: "GO", label: "Go" },
    { value: "RUST", label: "Rust" },
  ];

  const handleChange = (selectedOption) => {
    const option = selectedOption.map((item) => {
      return item.label;
    });
    setInputCheck(option.toString());
    setUserStack(option.toString());
  };

  return (
    <div className="h-72 text-lg overflow-y-auto md:h-54 md:text-sm">
      <Select options={options} isMulti onChange={handleChange} />
    </div>
  );
}

export default Stack;
