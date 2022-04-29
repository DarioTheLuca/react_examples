
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from './pages/Home';
import Layout from "./pages/Layout";
import ClockPage from "./pages/ClockPage";
import NameFormPage from "./pages/NameFormPage";
import FlavorFormPage from "./pages/FlavorFormPage";
import ReservationPage from "./pages/ReservationPage";
import CalculatorPage from "./pages/CalculatorPage";
import CountPage from "./pages/CountPage";
import EssayFormPage from "./pages/EssayFormPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="clock" element={<ClockPage />} />
        <Route path="nameForm" element={<NameFormPage />} />
        <Route path="flavorForm" element={<FlavorFormPage />} />
        <Route path="reservation" element={<ReservationPage />} />
        <Route path="temperatura" element={<CalculatorPage />} />
        <Route path="count" element={<CountPage />} />
        <Route path="essayForm" element={<EssayFormPage />} />
        {/* <Route path="*" element={<NoPage />} /> */}

      </Route>
    </Routes>
  </BrowserRouter>
  );
}


export default App;
