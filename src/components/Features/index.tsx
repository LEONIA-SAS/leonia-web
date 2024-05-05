import { motion } from "framer-motion";
import InfoCards from "@/components/Componentes/InfoCards";

// Icons
import {
  BrandIcon,
  RecordsIcon,
  BookIcon,
} from "../../assets/icons/icons";

// Features
const features = [
  {
    icon: <RecordsIcon />,
    title: "Soluciones a medida",
    text: "Potenciamos todas las áreas de tu empresa usando desarrollos de Inteligencia Artificial a la medida.",
  },
  {
    icon: <BrandIcon />,
    title: "Análisis estadísticos",
    text: "Realizamos análisis estadísticos para que puedas tomar decisiones informadas y basadas en datos.",
  },
  {
    icon: <BookIcon />,
    title: "Audio y texto",
    text: "Nos especializamos en el manejo de audio y texto, para que puedas tener las mejores soluciones para tus requerimientos.",
  },
];

const Features = () => {
  return (
    <InfoCards title="Nuestros servicios">
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
        <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-list__item"
                style={{transform: `translateY(${index * 15}%)`}}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p className="paragraph paragraph--small">{feature.text}</p>
              </li>
            ))}
          </ul>
      </motion.div>
    </InfoCards>
  );
};

export default Features;
