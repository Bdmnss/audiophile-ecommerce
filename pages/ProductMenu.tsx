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
      <div className="bg-black pb-[3.2rem]  pt-[11rem] flex justify-center items-center">
        <h1 className="text-[2.8rem] font-bold text-white">
          {productMenuName?.toString().toUpperCase()}
        </h1>
      </div>
      <div className="px-[2.4rem]">
        {productMenu.map((item) => (
          <div
            key={item.id}
            className="my-[6.5rem] flex flex-col justify-center items-center text-center"
          >
            <img
              src={item.image.mobile}
              alt="product image"
              className="rounded-lg mb-[3.2rem]"
            />
            {item.new && (
              <p className="text-[#d87d4a] text-[1.4rem] tracking-[1rem] mb-[2.4rem]">
                NEW PRODUCT
              </p>
            )}
            <h2 className="text-black text-[2.8rem] font-bold mb-[2.4rem]">
              {item.name}
            </h2>
            <p className="text-[gray] text-[1.5rem] font-medium mb-[2.4rem]">
              {item.description}
            </p>
            <Link href={`/${productMenuName}/${item.slug}`}>
              <button className="bg-[#d87d4a] px-10 py-5 text-white text-[1.3rem] font-bold">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        ))}

        <div className="mt-[15rem]">
          <Navigation />
        </div>

        <SloganText />
      </div>
    </div>
  );
}
