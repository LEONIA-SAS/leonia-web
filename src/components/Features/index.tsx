import React, { Fragment } from "react";
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
      <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index} className="feature-list__item"
              style={{transform: `translateY(${index * 15}%)`}}>
              <div>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p className="paragraph paragraph--small">{feature.text}</p>
            </li>
          ))}
        </ul>
    </InfoCards>
  );
};

export default Features;
