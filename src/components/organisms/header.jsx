import background from "../../assets/images/scandinavian-interior-mockup-wall-decal-background 1.png";
import Button from "../atoms/button";

const Header = () => {
  return (
    <section className="h-[500px] md:h-[350px] lg:h-[400px] xl:h-[650px] w-full relative">
      <img
        src={background}
        alt="bg"
        className="h-full object-cover md:h-[350px] lg:h-[400px] xl:h-[650px] w-full"
      />
      <div className=" bg-color1/50 md:bg-color1 h-[370px] md:w-[300px] md:h-[230px] lg:w-[400px] lg:h-[250px] xl:w-[600px] xl:h-[425px] absolute md:right-10 bottom-16">
        <div className="p-8 md:p-5 xl:p-10 relative h-full">
          <p className="text-lg md:text-xs lg:text-sm xl:text-base font-semibold">
            New Arrival
          </p>
          <span className="text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-primary block lg:mb-1 xl:mb-2">
            Discover Our
          </span>
          <span className="text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-primary">
            New Collection
          </span>
          <p className="text-base md:text-[8px] xl:text-base md:mt-2 xl:mt-4 md:leading-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            maiores quod libero corporis minima nam vitae similique blanditiis.
          </p>
          <Button className="px-10 py-3 md:px-5 md:text-[9px] xl:px-20 xl:text-lg lg:px-7 lg:py-3 lg:text-xs font-semibold xl:py-5 bg-primary text-white md:py-2 absolute bottom-5 xl:bottom-10">
            BUY NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
