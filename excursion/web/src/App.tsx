import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RibTrip from "./pages/RibTrip";
import Booking from "./pages/Booking";

const App = () => {

  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rib" element={<RibTrip />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
    </Routes>
  )

}

export default App;
