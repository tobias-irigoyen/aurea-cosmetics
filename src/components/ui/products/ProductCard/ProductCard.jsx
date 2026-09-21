import { Link } from "react-router-dom";
import "./ProductCard.scss";
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    category,
    description,
    price,
    stock,
    currency,
    badge,
    image,
    slug,
  } = product;

  const [counter, setCount] = useState(0);

  const increaseCount = () => {
    if (counter < stock) {
      setCount(counter + 1);
    }
  };

  const decreaseCount = () => {
    if (counter > 0 ) {
      setCount(counter - 1);
    }
  };
  const showBuy = () => {
    console.log(name)
  }

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
        <div class="product-card__info">
          <span className="product-card__category">
            {category}
          </span>
          <span className="product-card__category product-card__stock">
            Stock: {stock}
          </span>
        </div>

        <h2 className="product-card__title">
          {name}
        </h2>
          <span className="product-card__price">
            ${price}
          </span>

        <p className="product-card__description">
          {description}
        </p>

        <div className="product-card__footer">
          <div className="product-card__buy-counters">
            <button className="product-card__button" onClick={decreaseCount}>-</button>
            <span>{ counter }</span>
            <button className="product-card__button" onClick={increaseCount}>+</button>
          </div>
          <button className="product-card__button product-card__buy-button" onClick={showBuy}>Comprar</button>

        </div>
      </div>
    </article>
  );
};

export default ProductCard;