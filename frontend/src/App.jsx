import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

import CollegeListPage from "./pages/CollegeListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CollegeListPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
