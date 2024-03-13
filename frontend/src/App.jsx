import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";





function App() {
  return (

    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;