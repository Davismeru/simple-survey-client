import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Responses from "./pages/Responses";
import Success from "./pages/Success";

function App() {
  const base_api_url = "https://survey-app-92kq.onrender.com";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form base_api_url={base_api_url} />}></Route>
        <Route
          path="/responses"
          element={<Responses base_api_url={base_api_url} />}
        ></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
