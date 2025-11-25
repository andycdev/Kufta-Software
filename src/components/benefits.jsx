// components/benefits.jsx
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemLeft = {
  hidden: { opacity: 0, x: -300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const itemRight = {
  hidden: { opacity: 0, x: 300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Benefits() {
  return (
    <div className="my-benefits">
      <h1>¿Por qué elegir Kufta Software?</h1>

      {/* CONTENEDOR PADRE con whileInView */}
      <motion.div
        className="timeline"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: true,        // Solo se anima una vez
          amount: 0.3,       // Se activa cuando el 30% de la sección es visible
          margin: "-100px"   // ← CLAVE: empieza un poco antes de llegar
        }}
      >
        <motion.div className="timeline-item left" variants={itemLeft}>
          <div className="content">Calidad garantizada</div>
        </motion.div>

        <motion.div className="timeline-item right" variants={itemRight}>
          <div className="content">Entrega puntual</div>
        </motion.div>

        <motion.div className="timeline-item left" variants={itemLeft}>
          <div className="content">Código limpio y escalable</div>
        </motion.div>

        <motion.div className="timeline-item right" variants={itemRight}>
          <div className="content">Acompañamiento constante</div>
        </motion.div>

        <motion.div className="timeline-item left" variants={itemLeft}>
          <div className="content">Comunicación clara</div>
        </motion.div>

        <motion.div className="timeline-item right" variants={itemRight}>
          <div className="content">Soporte post-proyecto</div>
        </motion.div>
      </motion.div>

      <h2>En Kufta Software nos enfocamos en entregarte un producto sólido, estable y escalable, acompañado de un soporte confiable que te respalda en cada etapa.</h2>

    </div>
  );
}