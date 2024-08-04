// > css
import '@/styles/card.css';
// > prop-types
import { products } from '@/@types/products.d';
Card.propTypes = {
  products: products
};

// function Card({ delivery, name, desc, imgURL, original_price, ratio }) {
function Card(products) {
  const { delivery, name, desc, imgURL, original_price, ratio } = products;

  return (
    <div className="card">
      <a href="/" className="img-wrap">
        <img src={imgURL} alt={name} />
      </a>
      <a href="/" className="card-info">
        <span className="delivery">{delivery}</span>
        <h2 className="title">{name}</h2>
        <p className="price">{desc}</p>
        <div className="price-original">
          <span className="price-number">{original_price}</span>
          <span className="won">원</span>
        </div>
        <div className="price-discount">
          <strong className="price-ratio">{ratio ? ratio + '%' : null}</strong>
          <strong className="price-sales">
            <span className="price-number">
              {`${original_price}` - `${original_price}` * `${ratio / 100}`}
            </span>
            <span className="won">원</span>
          </strong>
        </div>
      </a>
      <button type="button" className="cart-button">
        담기
      </button>
    </div>
  );
}

export default Card;