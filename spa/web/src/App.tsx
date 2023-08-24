import { Route, Routes } from "react-router-dom";
import TreatmentPage from "./pages/TreatmentPage";
import ConfirmationPage from "./pages/ConfirmationPage";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<TreatmentPage />}/>
      <Route path="/confirmation" element={<ConfirmationPage/>}/>
    </Routes>
  )

}

export default App;
