import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dog_Sled from "./pages/Dog_Sled";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Dog_Sled />}>
      </Route>
    </Routes>
  )

}

export default App;
