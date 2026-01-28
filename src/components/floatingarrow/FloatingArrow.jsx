import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import style from "./FloatingArrow.module.css";

export default function FloatingArrow() {
  return (
    <motion.div
      className={style.floatingArrow}
      animate={{ y: [0, -10, 0] }} // sube 10px y baja
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <FiArrowDown size={32} color="#008383" />
    </motion.div>
  );
}
