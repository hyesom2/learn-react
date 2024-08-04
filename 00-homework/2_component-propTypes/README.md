# 컴포넌트 속성 검사 및 테스트
* 바닐라 프로젝트 UI 결과물 중 일부를 선별한 후, 리액트를 사용해 컴포넌트로 구현합니다.
* 컴포넌트 구현 과정에서 속성 검사 및 테스트 코드를 작성하는 것이 과제입니다.
* 아토믹(atomic) 또는 몰레큘(molecule) 컴포넌트를 작성합니다.
* 작성된 컴포넌트는 속성(props) 검사를 포함해야 합니다. → prop-types 사용

# 수행 조건
1. 모두가 접근 가능
2. 의미있는 구조 설계
3. 체계적인 표현 설계

# 파일 구조
![파일구조](https://github.com/user-attachments/assets/70e7cfa9-9c2f-4f00-84b1-747b72fcf290)

# 컴포넌트 속성 검사
* CardList와 Card 컴포넌트 안에 들어가는 데이터는 products 데이터
![카드구조](https://github.com/user-attachments/assets/7bd09c2f-ec55-4d94-93c8-4faad47cb736)
* 필수 : name, delivery, desc, imgURL, original_price
* 옵션 : ratio

### 1. prop-types 생성
```javascript
// > prop-types
import { number, string, exact } from "prop-types";

export const products = exact(
  {
    id: number.isRequired,
    delivery: string.isRequired,
    name: string.isRequired,
    desc: string.isRequired,
    imgURL: string.isRequired,
    original_price: number.isRequired,
    ratio: number,
  }
);
```

### 2. CardList컴포넌트 속성 검사
```javascript
// > css
import '@/styles/card-list.css'
// > components
import Card from '@/components/Card';
// > prop-types
import { arrayOf } from "prop-types";
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
```

### 3. Card컴포넌트 속성 검사
```javascript
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
```
# 후기
* 저번에 아토믹 컴포넌트를 제작할 때에는 React.createElement로 만들었던 컴포넌트를 이번에는 함수컴포넌트로 제작했습니다.😎
* 처음에는 prop-types를 왜 쓰는거지🤔 하면서 의문을 가졌는데 과제를 하고 다시 수업내용을 복습하면서 조금씩 이해되고 있습니다.
* 타입스크립트로도 작성을 해보고 싶었지만 복습하는데 시간이 너무 많이 소모되어 아직은 손을 못 대겠습니다.😴
