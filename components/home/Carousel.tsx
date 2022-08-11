import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ProTypes } from "../../types/public.types";

// const data = [
//   {
//     id: 1,
//     media:
//       "https://res.cloudinary.com/dupfwlkgb/image/upload/v1660029728/pexels-richard-balane-3250815_1_fbwamz.jpg",
//     title: "هدفون ، هدست یا هندزفری، هر چی که تو بخوای",
//   },
//   {
//     id: 2,
//     media:
//       "https://res.cloudinary.com/dupfwlkgb/image/upload/v1660029738/pexels-fauxels-3183132_dw8s0q.jpg",
//     title: "خرید حضوری یا اینترنتی ، انتخاب با شماست",
//   },
//   {
//     id: 3,
//     media:
//       "https://res.cloudinary.com/dupfwlkgb/image/upload/v1660029721/pexels-cottonbro-4606339_tkctzc.jpg",
//     title: "تنوعی کامل از محصولات شیائومی با بهترین قیمت  ",
//   },
// ];

const Carousel: React.FC<{
  data: ProTypes[];
}> = ({ data }) => {
  const [emblaRef] = useEmblaCarousel(
    { loop: false, draggable: false, speed: 10 },
    [Autoplay()]
  );

  return (
    <div style={{ direction: "ltr" }} className="my-16 w-full">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {data.map((item) => (
            <div key={item.id} className="embla__slide">
              <div className="flex flex-row bg-zinc-900 items-center md:items-center h-96 md:h-[80vh] justify-center">
                <div className="relative flex w-full md:w-1/2  h-96 md:h-[80vh] z-0 bg-zinc-800">
                  <Image
                    src={item.media as string}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    style={{ opacity: 0.8 }}
                    priority
                  />
                </div>
                <h1
                  style={{ direction: "rtl" }}
                  className="absolute md:relative w-full md:w-1/2 px-3 py-5 bg-zinc-900 bg-opacity-60 md:bg-opacity-0 text-center text-md text-white"
                >
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
