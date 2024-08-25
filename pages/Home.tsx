import headphonesImage from "../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImage from "../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImage from "../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import productSpeakerImage from "../public/assets/home/mobile/image-speaker-zx9.png";

export default function HomePage() {
  return (
    <main>
      <div
        className="bg-header-home-mobile bg-center bg-cover bg-no-repeat h-[55rem] flex flex-col justify-center
      items-center text-center px-10 mb-[9rem]"
      >
        <p className="text-[gray] text-[1.4rem] tracking-[1rem] mb-[1.6rem]">
          NEW PRODUCT
        </p>
        <h2 className="text-white text-[3.6rem] font-bold leading-[4rem] mb-[2.4rem]">
          XX99 Mark II HeadphoneS
        </h2>
        <p className="text-[gray] text-[1.5rem] mb-[2.8rem] leading-[2.5rem]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="bg-[#d87d4a] px-10 py-5 text-white text-[1.3rem] font-bold">
          SEE PRODUCT
        </button>
      </div>

      <div className="flex flex-col justify-center items-center px-[2.4rem] pb-[12rem]">
        <div className="flex flex-col justify-center items-center gap-[7rem] w-[100%] mb-[12rem]">
          <div
            className="relative bg-[#f1f1f1] flex flex-col justify-center items-center pb-6 rounded-xl 
          w-[100%] pt-[7rem]"
          >
            <img
              src={headphonesImage.src}
              alt="headphones image"
              className="absolute w-[13rem] top-[-4.5rem]"
            />
            <p className="text-black text-[1.5rem] font-bold mb-[1.7rem]">
              HEADPHONES
            </p>
            <div className="flex items-center gap-[1.3rem]">
              <p className="text-[gray] text-[1.3rem] font-bold">SHOP</p>
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" fill="none" />
              </svg>
            </div>
          </div>

          <div
            className="relative bg-[#f1f1f1] flex flex-col justify-center items-center pb-6 rounded-xl 
          w-[100%] pt-[7rem]"
          >
            <img
              src={speakersImage.src}
              alt="headphones image"
              className="absolute w-[13rem] top-[-4.5rem]"
            />
            <p className="text-black text-[1.5rem] font-bold mb-[1.7rem]">
              HEADPHONES
            </p>
            <div className="flex items-center gap-[1.3rem]">
              <p className="text-[gray] text-[1.3rem] font-bold">SHOP</p>
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" fill="none" />
              </svg>
            </div>
          </div>

          <div
            className="relative bg-[#f1f1f1] flex flex-col justify-center items-center pb-6 rounded-xl 
          w-[100%] pt-[7rem]"
          >
            <img
              src={earphonesImage.src}
              alt="headphones image"
              className="absolute w-[13rem] top-[-4.5rem]"
            />
            <p className="text-black text-[1.5rem] font-bold mb-[1.7rem]">
              HEADPHONES
            </p>
            <div className="flex items-center gap-[1.3rem]">
              <p className="text-[gray] text-[1.3rem] font-bold">SHOP</p>
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="bg-[#d87d4a] w-[100%] bg-home-circles bg-center bg-cover bg-no-repeat
        flex flex-col justify-center items-center text-center mb-[2.4rem] py-[5.5rem] rounded-lg"
        >
          <img
            src={productSpeakerImage.src}
            alt="speaker image"
            className="w-[15rem] mb-[3.2rem]"
          />
          <h2 className="text-white text-[3.6rem] leading-[4rem] font-bold mb-[2.4rem]">
            ZX9 SPEAKER
          </h2>
          <p className="text-white text-[1.5rem] leading-[2.5rem] font-medium mb-[2.4rem]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="bg-black px-10 py-5 text-white text-[1.3rem] font-bold">
            SEE PRODUCT
          </button>
        </div>

        <div
          className="w-[100%] h-[32rem] bg-zx7-speaker-background-mobile bg-no-repeat bg-cover mb-[2.4rem] 
        rounded-lg flex flex-col justify-center items-start pl-[2.4rem]"
        >
          <h2 className="text-black text-[2.8rem] font-bold mb-[3.2rem]">
            ZX7 SPEAKER
          </h2>
          <button
            className="px-10 py-5 text-black text-[1.3rem] font-bold border-[1px] 
          border-black"
          >
            SEE PRODUCT
          </button>
        </div>

        <div
          className="w-[100%] h-[20rem] bg-YX1-earphones-background-mobile bg-cover bg-no-repeat rounded-lg
        mb-[2.4rem]"
        ></div>

        <div className="w-[100%] bg-[#f1f1f1] py-[4.1rem] px-[2.4rem] mb-[12rem] rounded-lg">
          <h2 className="text-black text-[2.8rem] font-bold mb-[3.2rem]">
            YX1 EARPHONES
          </h2>
          <button
            className="bg-[#f1f1f100] px-10 py-5 text-black text-[1.3rem] font-bold border-[1px] 
          border-black"
          >
            SEE PRODUCT
          </button>
        </div>

        <div className="w-[100%] h-[30rem] bg-best-gear-mobile bg-no-repeat bg-cover rounded-lg mb-[4rem]"></div>

        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-black text-[2.8rem] font-bold mb-[3.2rem]">
            BRINGING YOU THE <span className="text-[#d87d4a]">BEST</span> AUDIO
            GEAR
          </h2>

          <p className="text-[gray] text-[1.5rem] font-medium leading-[2.5rem]">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </main>
  );
}
