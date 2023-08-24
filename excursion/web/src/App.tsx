import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import RibTrip from "./pages/RibTrip";
import Booking from "./pages/Booking";
import Dog_Sled from "./pages/Dog_Sled";
import Overview from "./pages/Overview";

const App = () => {

  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/overview" element={<Overview />}></Route>
        <Route path="/rib" element={<RibTrip />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/dog-sled" element={<Dog_Sled />}></Route>
    </Routes>
  )

}

export default App;
