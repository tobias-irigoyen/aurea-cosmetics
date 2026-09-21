import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    category,
    description,
    price,
    currency,
    badge,
    image,
    slug,
  } = product;

  return (
    <article className="product-card">
      <div className="product-card__image">
        <Link to={`/productos/${slug}`}>
          <img src={image} alt={name} />
        </Link>

        {badge && (
          <span className="product-card__badge">
            {badge}
          </span>
        )}
      </div>

      <div className="product-card__content">
        <span className="product-card__category">
          {category}
        </span>

        <h2 className="product-card__title">
          {name}
        </h2>

        <p className="product-card__description">
          {description}
        </p>

        <div className="product-card__footer">
          <span className="product-card__price">
            ${price}
          </span>

          <button className="product-card__button">
            AÑADIR
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;