import Frame from "../atoms/frame";
import bedroom from "../../assets/images/bedroom.png";
import dining from "../../assets/images/dining.png";
import living from "../../assets/images/living.png";

const Range = () => {
  return (
    <section className="px-3 md:px-16 w-full xl:h-[685px] py-10">
      <div className="">
        <div className="mb-5 md:mb-6 lg:mb-12">
          <h1 className="font-bold text-center text-xl md:text-2xl">
            Browse The Range
          </h1>
          <p className="text-center text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-x-2 gap-y-7 items-center justify-between">
          <div className="flex-1">
            <Frame src={living} className={"object-contain rounded-lg "} />
            <p className="text-center text-base font-bold xl:text-xl mt-2 md:mt-1 lg:mt-2">
              Dining
            </p>
          </div>
          <div className="flex-1">
            <Frame src={dining} className={"object-contain rounded-lg "} />
            <p className="text-center text-base font-bold xl:text-xl mt-2 md:mt-1 lg:mt-2">
              Living
            </p>
          </div>
          <div className="flex-1">
            <Frame src={bedroom} className={"object-contain rounded-lg "} />
            <p className="text-center text-base font-bold xl:text-xl mt-2 md:mt-1 lg:mt-2">
              Bedroom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Range;
