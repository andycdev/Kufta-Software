import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/header/Header.jsx";
import KuftaSoftware from "./pages/kufta_software/Kufta_software.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import ContactMe from "./components/contactme/ContactMe.jsx";
import AboutMe from "./pages/aboutme/AboutMe.jsx";

const routes = ["/", "/portfolio", "/aboutme"];

const getInitialIndex = (pathname) => {
  const index = routes.indexOf(pathname);
  return index === -1 ? 0 : index;
};

const pageVariants = {
  initial: { x: "100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-100vw", opacity: 0 },
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(() =>
    getInitialIndex(location.pathname),
  );

  useEffect(() => {
    setCurrentIndex(getInitialIndex(location.pathname));
  }, [location.pathname]);

  const handleNavigate = (index) => {
    navigate(routes[index]);
  };

  return (
    <div className="app">
      <Header currentIndex={currentIndex} onNavigate={handleNavigate} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <KuftaSoftware />
              </motion.div>
            }
          />

          <Route
            path="/portfolio"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <Portfolio />
              </motion.div>
            }
          />

          <Route
            path="/aboutme"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <AboutMe />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
