import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Header from "./components/Views/Header/Header";
import Footer from "./components/Views/Footer/Footer";
import Projects from "./components/Pages/Projects/Projects";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
