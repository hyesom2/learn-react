import React, { createElement as h } from "https://esm.sh/react";

function Card({ delivery, name, desc, imgURL, original_price, ratio }) {
  return h(
    "div",
    {
      className: "card",
    },
    h(
      "a",
      {
        href: "/",
        className: "img-wrap",
      },
      h("img", {
        src: imgURL,
        alt: name,
      })
    ),
    h(
      "a",
      {
        href: "/",
        className: "card-info",
      },
      h(
        "span",
        {
          className: "delivery",
        },
        delivery
      ),
      h(
        "h2",
        {
          className: "title",
        },
        name
      ),
      h(
        "p",
        {
          className: "desc",
        },
        desc
      ),
      h(
        "div",
        {
          className: "price",
        },
        h(
          "div",
          {
            className: "price-original",
          },
          h(
            "span",
            {
              className: "price-number",
            },
            original_price
          ),
          h(
            "span",
            {
              className: "won",
            },
            "원"
          )
        ),
        h(
          "div",
          {
            className: "price-discount",
          },
          h(
            "strong",
            {
              className: "price-ratio",
            },
            ratio === null ? " " : `${ratio}%`
          ),
          h(
            "strong",
            {
              className: "price-sales",
            },
            h(
              "span",
              {
                className: "price-number",
              },
              `${original_price}` - `${original_price}` * `${ratio / 100}`
            ),
            h(
              "span",
              {
                className: "won",
              },
              "원"
            )
          )
        )
      )
    ),
    h(
      "button",
      {
        type: "button",
        className: "cart-button",
      },
      "담기"
    )
  );

  // return (
  //   <div className="card">
  //     <a href="#" className="img-wrap">
  //       <img src="/products/product-0.png" alt="[풀무원] 탱탱쫄면 4입" />
  //     </a>
  //     <a href="#" className="card-info">
  //       <span className="delivery">샛별배송</span>
  //       <h2 className="title">[풀무원] 탱탱쫄면 4입</h2>
  //       <p className="desc">튀기지 않아 부담 없는 매콤함</p>
  //       <div className="price">
  //         <div className="price-original">
  //           <span className="price-number">27900</span>
  //           <span className="won">원</span>
  //         </div>
  //         <div className="price-discount">
  //           <strong className="price-ratio">30%</strong>
  //           <strong className="price-sales">
  //             <span className="price-number">27900</span>
  //             <span className="won">원</span>
  //           </strong>
  //         </div>
  //       </div>
  //     </a>
  //     <button type="button" className="cart-button">
  //       담기
  //     </button>
  //   </div>
  // );
}

export default Card;
