import { offer } from "../../constant";

const OfferBar = () => {
  return (
    <div className="w-full md:h-[150px] lg:h-[230px] xl:h-[270px] bg-filter px-5 md:px-16 flex gap-y-3 md:gap-y-0 py-5 flex-wrap items-start md:flex-nowrap md:items-center justify-between">
      {offer.map((item) => {
        return (
          <li
            key={item.name}
            className="flex items-center gap-x-1 md:gap-x-2 shrink-0 w-[145px] md:w-auto"
          >
            <img
              src={item.icon}
              alt="icon"
              className="w-6 h-6 lg:w-10 lg:h-10 xl:w-14 xl:h-14"
            />
            <div>
              <h1 className="font-bold text-xs lg:text-lg xl:text-2xl">
                {item.name}
              </h1>
              <p className="text-[10px] lg:text-sm xl:text-base">{item.desc}</p>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default OfferBar;
