import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Layout from "./components/Layout";

import CollegeListPage from "./pages/CollegeListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<CollegeListPage/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
