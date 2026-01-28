// Slider.jsx

import { motion } from "framer-motion";
import KuftaSoftware from "../../pages/kufta_software/Kufta_software";
import Portfolio from "../../pages/portfolio/Portfolio";

const pages = [{ element: <KuftaSoftware /> }, { element: <Portfolio /> }];

export default function Slider({ currentIndex }) {
  return (
    <motion.div
      className="slider"
      animate={{ x: `-${currentIndex * 100}vw` }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="slide">
        <KuftaSoftware />
      </div>

      <div className="slide">
        <Portfolio />
      </div>
    </motion.div>
  );
}
