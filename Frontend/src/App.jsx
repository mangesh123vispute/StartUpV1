import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./Component/Main";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashbord" element={<Main />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
