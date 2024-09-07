import data from "../data.json";
import Navigation from "@/components/Navigation";
import SloganText from "@/components/SloganText";
import Link from "next/link";

export default function ProductMenu({
  productMenuName,
}: {
  productMenuName: string;
}) {
  const productMenu = data.filter((item) => item.category === productMenuName);
  return (
    <div className="pb-[12rem]">
      <div
        className="bg-black pb-[3.2rem] pt-[11rem] flex justify-center items-center 
      md:pt-[15rem] md:pb-[7.2rem]"
      >
        <h1 className="text-[2.8rem] font-bold text-white md:text-[4rem]">
          {productMenuName?.toString().toUpperCase()}
        </h1>
      </div>
      <div className="px-[2.4rem] md:px-[4rem] lg:px-[16.5rem]">
        {productMenu.map((item, index) => (
          <div
            key={item.id}
            className={`my-[6.5rem] flex flex-col justify-center items-center text-center 
            lg:flex-row lg:justify-between lg:mb-[16rem] ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="lg:w-[50%]">
              <img
                src={item.categoryImage.mobile}
                alt="product image"
                className="rounded-lg mb-[3.2rem] md:hidden"
              />
              <img
                src={item.categoryImage.tablet}
                alt="product image"
                className="rounded-lg mb-[3.2rem] h-[35rem] hidden md:block lg:hidden"
              />

              <img
                src={item.categoryImage.desktop}
                alt="product image"
                className="rounded-lg hidden lg:block"
              />
            </div>
            <div className="lg:w-[50%]">
              {item.new && (
                <p className="text-[#d87d4a] text-[1.4rem] tracking-[1rem] mb-[2.4rem]">
                  NEW PRODUCT
                </p>
              )}
              <div className="md:px-44">
                <h2
                  className="text-black text-[2.8rem] font-bold mb-[2.4rem] md:text-[4rem]
              md:leading-[4.4rem]"
                >
                  {item.name}
                </h2>
                <p className="text-[gray] text-[1.5rem] font-medium mb-[2.4rem]">
                  {item.description}
                </p>
              </div>
              <Link href={`/${productMenuName}/${item.slug}`}>
                <button
                  className="bg-[#d87d4a] px-10 py-5 text-white text-[1.3rem] font-bold
              md:px-14 md:py-7 hover:bg-[#fbaf85]"
                >
                  SEE PRODUCT
                </button>
              </Link>
            </div>
          </div>
        ))}

        <div className="mt-[15rem] lg:mt-[25rem]">
          <Navigation />
        </div>

        <SloganText />
      </div>
    </div>
  );
}
