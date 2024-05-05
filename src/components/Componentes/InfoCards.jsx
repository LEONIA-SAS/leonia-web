import { motion } from "framer-motion";
import "./InfoCards.css";

const InfoCards = ({ title, children }) => {
  return (
    <section className="features" id="servicios">
      <motion.div
        initial={{ opacity: 0, y: 72 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.5,
            duration: 1,
          },
        }}
        viewport={{ once: true }}
        className="container"
      >
        <div class="featuresTitle">
          <h2>{title}</h2>
        </div>
        {children}
      </motion.div>
    </section>
  )
};

export default InfoCards;