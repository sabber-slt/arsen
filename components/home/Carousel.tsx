import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ProTypes } from "../../types/public.types";

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
              <div className="flex flex-row bg-black items-center md:items-center h-96 md:h-[80vh] justify-center">
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
