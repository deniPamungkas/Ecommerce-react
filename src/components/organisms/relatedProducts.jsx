import Card from "../atoms/card";
import Button from "../atoms/button";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { products } from "../../constant";
import { useState } from "react";

const RelatedProducts = () => {
  const par = useParams();
  const [itemShow, setItemShow] = useState(9);
  const datum = products.filter((item) => {
    return item.id == par.id;
  });
  const relatedData = products
    .filter((item) => {
      return item.category == datum[0].category;
    })
    .slice(1, itemShow);
  const handleShowMore = () => {
    setItemShow(itemShow + 8);
  };
  return (
    <section className="px-3 md:px-16 w-full h-fit py-12">
      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-center mb-7">
        Related Products
      </h1>
      <ul className="w-full flex flex-wrap gap-2">
        {relatedData.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </ul>
      {itemShow - 1 == relatedData.length ? (
        <Button
          onClick={handleShowMore}
          className={
            "bg-white border-2 border-primary px-5 py-1 text-xs xl:px-16 lg:px-12 md:px-10 text-primary font-semibold lg:py-2 lg:text-base m-auto mt-8"
          }
        >
          Show More
        </Button>
      ) : (
        ""
      )}
    </section>
  );
};

RelatedProducts.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.any,
  className: PropTypes.string,
  data: PropTypes.any,
};

export default RelatedProducts;
