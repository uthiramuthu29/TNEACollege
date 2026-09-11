import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import CollegeListPage from "./pages/CollegeListPage";
import CalculatorPage from "./pages/CalculatorPage";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/colleges" element={<CollegeListPage />} />
          <Route path="/cutoff-calc" element={<CalculatorPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
