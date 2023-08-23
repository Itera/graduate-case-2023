import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
      </Route>
    </Routes>
  )

}

export default App;
