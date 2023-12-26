import { products } from "../constant";

export const datum = (params) => {
  products.filter((item) => {
    return item.id == params.id;
  });
};
