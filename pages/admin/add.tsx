import { useForm } from "react-hook-form";
import React from "react";
import Search from "../../components/products/Search";
import { API_URL0 } from "../../hooks/useFetch";
import useAuth from "../../utils/useAuth";
import Login from "../../components/admin/Login";

type FormData = {
  title: string;
  desc: string;
  content: string;
  price: number;
  old_price: string;
  show_price: string;
  media: string;
  media1: string;
  media2: string;
  brand: string;
  brand_child: string;
  type: string;
  use: string;
  category: string;
};

const Add: React.FC = () => {
  const { auth } = useAuth();
  const [loading, setLoading] = React.useState("");

  const { register, handleSubmit, reset } = useForm<FormData>();

  const onClick = async (data: FormData) => {
    const res = await fetch(`${API_URL0}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Role": "public",
      },
      body: JSON.stringify({
        query: `
            mutation MyMutation($brand: String, $brand_child: String , $category: String , $content: String, $desc: String , $media: String , $media1: String, $media2: String, $old_price: String , $price: Int , $show_price: String, $title: String, $type: String , $use: String) {
                insert_products(objects: {brand: $brand, brand_child: $brand_child, category: $category, content: $content, desc: $desc, media: $media, media1: $media1, media2: $media2, old_price: $old_price, price: $price, show_price: $show_price, title: $title, type: $type, use: $use}) {
                  returning {
                    brand
                  }
                }
              }
            `,
        variables: {
          brand: data.brand,
          brand_child: data.brand_child,
          category: data.category,
          content: data.content,
          desc: data.desc,
          media: data.media,
          media1: data.media1,
          media2: data.media2,
          old_price: data.old_price,
          price: data.price,
          show_price: data.show_price,
          title: data.title,
          type: data.type,
          use: data.use,
        },
      }),
    });
    const json = await res.json();
    if (json.errors) {
      setLoading("مشکلی در ارسال داده ها به سرور وجود دارد");
    } else {
      setLoading("داده ها با موفقیت ثبت شد");
    }
    reset();
  };
  return (
    <div>
      <Search />
      {auth ? (
        <form
          onSubmit={handleSubmit(onClick)}
          className="flex flex-col items-center justify-center text-zinc-700 my-8"
        >
          <p>{loading}</p>
          <label htmlFor="title" className="w-72 text-right pb-2">
            عنوان
          </label>
          <input
            type="text"
            id="title"
            className="w-72 h-9 rounded-lg bg-slate-300 pr-3"
            {...register("title")}
          />
          <label htmlFor="desc" className="w-72 text-right pb-2 pt-4">
            ویژگی ها
          </label>
          <textarea
            id="desc"
            className="w-72 h-36 rounded-lg bg-slate-300 pr-3"
            {...register("desc")}
          ></textarea>
          <label htmlFor="content" className="w-72 text-right pb-2 pt-4">
            توضیحات
          </label>
          <textarea
            id="content"
            className="w-72 h-36 rounded-lg bg-slate-300 pr-3"
            {...register("content")}
          ></textarea>
          <input
            type="number"
            placeholder="قیمت به تومان"
            className="w-72 h-9 rounded-lg bg-slate-300 mt-4 pr-3"
            {...register("price")}
          />
          <input
            type="text"
            placeholder="قیمت قبلی (اختیاری) مثال: ۵,۰۰۰ تومان"
            className="w-72 h-9 rounded-lg bg-slate-300 text-zinc-700 mt-4 pr-3"
            {...register("old_price")}
          />
          <input
            type="text"
            placeholder="قیمت نمایشی (اجباری) مثال: ۵,۰۰۰ تومان"
            className="w-72 h-9 rounded-lg bg-slate-300 text-zinc-700 mt-4 pr-3"
            {...register("show_price")}
          />
          <input
            type="text"
            placeholder="تصویر محصول 1"
            className="w-72 h-9 rounded-lg bg-slate-300 text-zinc-700 mt-4 pr-3"
            {...register("media")}
          />
          <input
            type="text"
            placeholder="تصویر محصول 2"
            className="w-72 h-9 rounded-lg bg-slate-300 text-zinc-700 mt-4 pr-3"
            {...register("media1")}
          />
          <input
            type="text"
            placeholder="تصویر محصول 3"
            className="w-72 h-9 rounded-lg bg-slate-300 text-zinc-700 mt-4 pr-3"
            {...register("media2")}
          />
          <input
            type="text"
            placeholder=" نام برند برای مثال شیائومی"
            className="w-72 h-9 rounded-lg bg-slate-300 text-zinc-700 mt-4 pr-3"
            {...register("brand")}
          />
          <input
            type="text"
            placeholder="زیر گروه  برای مثال anker"
            className="w-72 h-9 rounded-lg bg-slate-300 text-zinc-700 mt-4 pr-3"
            {...register("brand_child")}
          />
          <input
            type="text"
            placeholder="مدل برای مثال هندزفری دور گردنی"
            className="w-72 h-9 rounded-lg bg-slate-300 text-zinc-700 mt-4 pr-3"
            {...register("type")}
          />
          <input
            type="text"
            placeholder="نوع استفاده یرای مثال ورزش"
            className="w-72 h-9 rounded-lg bg-slate-300 text-zinc-700 mt-4 pr-3"
            {...register("use")}
          />
          <p className="w-72 text-right pb-2 mt-4">محل نمایش محصول</p>
          <input
            type="text"
            placeholder="یا top یا takhfif یا چیزی ننویسید"
            className="w-72 h-9 rounded-lg bg-slate-300 text-zinc-700 pr-3"
            {...register("category")}
          />
          <button
            type="submit"
            className="w-28 h-12 bg-rose-400 rounded-md mt-7 text-gray-100"
          >
            ارسال
          </button>
        </form>
      ) : (
        <Login />
      )}
    </div>
  );
};
export default Add;
