import { motion } from "framer-motion";

// Styles
import "./style.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="hero__text"
          >
            <h1>LEONIA</h1>
            <h2>Soluciones estadísticas y de inteligencia artificial</h2>
            <p className="paragraph paragraph--big">
              Lógica, Estrategia y Optimización en Negocios con Inteligencia Artificial
            </p>
            <button className="btn btn--primary btn--big" type="button">
              Comencemos
            </button>
          </motion.div>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
