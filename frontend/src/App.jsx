import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form.jsx";
import { Navbar } from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import FavoriteBooks from "./pages/FavortitesBooks.jsx";




function App() {
  return (

    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Form />} />
          <Route path="/edit/:id" element={<Form />} />
          <Route path="/fav" element={<FavoriteBooks />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;