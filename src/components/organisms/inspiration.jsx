import Button from "../atoms/button";
import Slider from "react-slick";
import "../../assets/slick.css";
import "../../assets/slick-theme.css";

const Inspiration = () => {
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "90px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <section className="flex w-full h-[600px] py-10 bg-ins relative">
      <div className="w-full h-full pl-3 md:pl-16 pr-10 flex flex-col justify-center gap-y-5">
        <h1 className="text-5xl font-bold">50+ Beautiful Room Inspirations</h1>
        <p className=" leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          reiciendis explicabo dolores quos similique.
        </p>

        <Button
          className={
            "border-2 border-primary w-[170px] py-2 bg-primary text-white"
          }
        >
          Explore More
        </Button>
      </div>
      {/* <div className=" w-3/5 h-full relative">
        <Slider className="w-4/5 h-full" {...settings}>
          <div className="h-[500px] bg-orange-400">
            <h3>1</h3>
          </div>
          <div className="h-[500px] bg-green-400">
            <h3>2</h3>
          </div>
          <div className="h-[500px] bg-yellow-400">
            <h3>3</h3>
          </div>
          <div className="h-[500px] bg-blue-400">
            <h3>4</h3>
          </div>
          <div className="h-[500px] bg-red-400">
            <h3>5</h3>
          </div>
          <div className="h-[500px] bg-purple-400">
            <h3>6</h3>
          </div>
        </Slider>
      </div> */}
    </section>
  );
};

export default Inspiration;
