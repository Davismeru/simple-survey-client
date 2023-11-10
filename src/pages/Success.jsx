import { FaFaceSmileWink } from "react-icons/fa6";

function Success() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5 text-xl">
      <p className="text-8xl text-blue-500">
        <FaFaceSmileWink />
      </p>
      <h1 className="text-3xl text-gray-600 font-semibold text-center">
        Form submitted succesfully
      </h1>
    </div>
  );
}

export default Success;
