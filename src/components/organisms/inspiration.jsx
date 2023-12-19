import Button from "../atoms/button";

const Inspiration = () => {
  return (
    <section className="flex w-full h-[600px] py-10 bg-ins">
      <div className="w-2/5 h-full pl-16 pr-10 flex flex-col justify-center gap-y-5">
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
      <div className="bg-purple-800 w-3/5 h-full"></div>
    </section>
  );
};

export default Inspiration;
