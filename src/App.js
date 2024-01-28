import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import LoadingScreen from "./pages/LoadingScreen";
import Main from "./pages/Main";
import Onboarding1 from "./pages/Onboarding1";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Onboarding1 />} />
              <Route path="main/*" element={<Main />} />
            </Routes>
          </>
        )}
      </Router>
    </>
  );
}

export default App;