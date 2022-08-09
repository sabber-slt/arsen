import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="h-[70vh] bg-zinc-900 hstack justify-around  bottom-0">
      <div className="w-36 vstack">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-16">
          <Link href="https://instagram.com/sabber.slt">
            <a>
              <Image
                alt=""
                width={50}
                height={50}
                src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656308312/2609558_instagram_social_media_social_icon_dsa3ai.png"
              />
            </a>
          </Link>
          <Link href="tel:00989122863901">
            <a href="tel:00989122863901">
              <Image
                alt=""
                width={50}
                height={50}
                src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656308397/1055012_phone_communication_telephone_icon_qw6bd7.png"
              />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/sabber-soltani-a71397236">
            <a>
              <Image
                alt=""
                width={50}
                height={50}
                src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1652763913/in_vqyfhw.png"
              />
            </a>
          </Link>
          <Link href="https://github.com/sabber-slt">
            <a>
              <Image
                alt=""
                width={50}
                height={50}
                src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1659542487/Pngtree_3d_pin_location_wit_map_7270173_d0ka3t.png"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="w-72 md:w-[40vw] text-center flex flex-col items-center">
        <div className="relative w-24 h-24">
          <Image alt="" src={"/arsen.png"} layout="fill" />
        </div>
        {/* <Link href="/">
          <a>
            <p className="text-center text-amber-400 px-5 text-sm font-light">
              همیشه اولین نفر باشید! برای اطلاع از آخرین تخفیف ها و
              جدیدترینکالاها در خبرنامه ثبت نام کنید
            </p>
          </a>
        </Link> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-10 px-5">
          <Link href="/edu">
            <a>
              <p> درباره ما</p>
            </a>
          </Link>
          <Link href="/">
            <a>
              <p>مقالات</p>
            </a>
          </Link>
          <Link href="/">
            <a>
              <p> محصولات برتر</p>
            </a>
          </Link>
          <Link href="/">
            <a>
              <p> تماس با ما</p>
            </a>
          </Link>
        </div>
        <p className="text-sm px-5 pb-5">درباره آرسن</p>
        <p className="text-sm px-5 text-amber-400">
          آرسن فروشگاه تخصصی هدفون بوده و به صورت تخصصی تمامی هدفون های موجود در
          بازار را تست کرده و محصولاتی که واقعا ارزش خرید دارن رو موجود کرده و
          به مخاطب های خود معرفی میکند.
        </p>
      </div>
    </div>
  );
};
export default Footer;
