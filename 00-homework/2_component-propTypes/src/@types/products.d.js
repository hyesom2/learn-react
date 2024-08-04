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