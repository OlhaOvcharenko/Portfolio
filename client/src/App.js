import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Header from "./components/Views/Header/Header";
import Footer from "./components/Views/Footer/Footer";
import Projects from "./components/Pages/Projects/Projects";
import { useDispatch} from "react-redux";
import { useState } from "react";
import { loadProjectsRequest } from "./redux/projectsRedux";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

const App = () => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([dispatch(loadProjectsRequest())])
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
        setLoading(false);
      });
  }, [dispatch]);
  
  return (
    <div>
    {loading ? (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spinner 
          animation="grow" 
          variant="secondary" 
          style={{ width: '100px', height: '100px' }} 
        />
      <h2>Loading ...</h2>
    </div>
    ) : (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
    )}
    </div>
  );
};

export default App;
