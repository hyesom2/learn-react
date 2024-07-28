import React, { createElement as h } from "https://esm.sh/react";

// > 컴포넌트 불러오기
import Card from "./Card.js";

// > 데이터 불러오기
import ProductsData from "../data/Products.js";

function CardList() {
  return h(
    "ul",
    {
      className: "card-list",
    },
    h(
      "li",
      null,
      h(Card, {
        delivery: ProductsData[0].delivery,
        name: ProductsData[0].name,
        desc: ProductsData[0].desc,
        imgURL: ProductsData[0].imgURL,
        original_price: ProductsData[0].original_price,
        ratio: ProductsData[0].ratio,
      })
    ),
    h(
      "li",
      null,
      h(Card, {
        delivery: ProductsData[1].delivery,
        name: ProductsData[1].name,
        desc: ProductsData[1].desc,
        imgURL: ProductsData[1].imgURL,
        original_price: ProductsData[1].original_price,
        ratio: ProductsData[1].ratio,
      })
    ),
    h(
      "li",
      null,
      h(Card, {
        delivery: ProductsData[2].delivery,
        name: ProductsData[2].name,
        desc: ProductsData[2].desc,
        imgURL: ProductsData[2].imgURL,
        original_price: ProductsData[2].original_price,
        ratio: ProductsData[2].ratio,
      })
    ),
    h(
      "li",
      null,
      h(Card, {
        delivery: ProductsData[3].delivery,
        name: ProductsData[3].name,
        desc: ProductsData[3].desc,
        imgURL: ProductsData[3].imgURL,
        original_price: ProductsData[3].original_price,
        ratio: ProductsData[3].ratio,
      })
    )
  );
}

export default CardList;
