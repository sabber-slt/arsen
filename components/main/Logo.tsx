import Image from "next/image";
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 text-zinc-600">
      <div className="vstack">
        <Image
          alt=""
          src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1659600996/guarantee-ppwjq7dwlvh92jvs8v4wo5d62gqmahjiir1auqnr80_v0e3zk.png"
          width={50}
          height={50}
        />
        <p className="pt-2">ضمانت اصالت کالا</p>
      </div>
      <div className="vstack">
        <Image
          alt=""
          src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1659600995/salary-ppwjkaydpbeg6ogcpbb80myztdtnyw46djlke7eqa8_sx3zxm.png"
          width={50}
          height={50}
        />
        <p className="pt-2">7 روزضمانت برگشت وجه</p>
      </div>
      <div className="vstack">
        <Image
          alt=""
          src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1659600995/delivery-van-ppwjyovgb13fvtk1p16noi9z4owws48a0r23to2t1s_itwtdr.png"
          width={50}
          height={50}
        />
        <p className="pt-2"> ارسال سریع</p>
      </div>
      <div className="vstack">
        <Image
          alt=""
          src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1659600995/mobile-ppwkjx28nc5k2sq0qpichnfq2yabm1i1xtfuzmlqj4_djh3kv.png"
          width={50}
          height={50}
        />
        <p className="pt-2">پرداخت امن</p>
      </div>
    </div>
  );
};

export default Logo;
