import { motion } from "framer-motion";
// Styles
import "./style.css";

const Products = () => {
  return (
    <section className="products">
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
        <div className="title">
          <h2>Productos</h2>
        </div>
        <ul className="products-list">
          <li className="product-list__item">
            <h3><a href="https://zorro.leonia.com.co/" className="link link--primary"
              target="_blank" rel="noopener noreferrer">ZoRRO</a>
            </h3>
            <div className="product-list__item-description">
              <img src="/images/zorro-ss.webp" alt="Zorro" />
              <p className="paragraph paragraph--big">ZoRRO hace que la recolección de información de texto sea dinámica para los usuarios y útil para las empresas.</p>
            </div>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};
export default Products;