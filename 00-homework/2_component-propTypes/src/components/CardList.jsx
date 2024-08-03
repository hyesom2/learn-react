// > css
import '@/styles/card-list.css'
// > components
import Card from '@/components/Card';
// > prop-types
import { arrayOf } from 'prop-types';
import { products } from '@/@types/products.d';

CardList.propTypes = {
  ProductsData: arrayOf(products).isRequired,
};

function CardList({ ProductsData }) {
  return (
    <ul className="card-list">
      {ProductsData.map(
        ({ id, delivery, name, desc, imgURL, original_price, ratio }) => (
          <li key={id}>
            <Card
              delivery={delivery}
              name={name}
              desc={desc}
              imgURL={imgURL}
              original_price={original_price}
              ratio={ratio}
            />
          </li>
        )
      )}
    </ul>
  );
}

export default CardList;