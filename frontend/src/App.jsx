import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Card.jsx";
import Form from "./components/Form.jsx";




function App() {
  return (

    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/add" element={<Form />} />
          <Route path="/edit/:id" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;