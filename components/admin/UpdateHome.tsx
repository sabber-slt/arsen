import React from "react";
import { useForm } from "react-hook-form";
import { API_URL0 } from "../../hooks/useFetch";

type FormData = {
  title: string;
  media: string;
};

const UpdateHome: React.FC<{ id: string; title1: string; media1: string }> = ({
  id,
  title1,
  media1,
}) => {
  const { register, handleSubmit } = useForm<FormData>();
  const onClick = async (data: FormData) => {
    const res = await fetch(`${API_URL0}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Role": "public",
      },
      body: JSON.stringify({
        query: `
            mutation MyMutation($id: Int, $media: String, $title: String) {
                update_public(where: {id: {_eq: $id}}, _set: {media: $media, title: $title}) {
                  affected_rows
                  returning {
                    id
                    title
                  }
                }
              }
              `,
        variables: {
          id: parseInt(id),
          media: data.media === "" ? media1 : data.media,
          title: data.title === "" ? title1 : data.title,
        },
      }),
    });
    const json = await res.json();
    console.log(json);
  };
  return (
    <div className="my-32">
      <form
        onSubmit={handleSubmit(onClick)}
        className="flex flex-col items-center justify-center text-zinc-700"
      >
        <label htmlFor="title" className="w-72 text-right pb-2">
          عنوان
        </label>
        <input
          type="text"
          id="title"
          className="w-72 h-9 rounded-lg bg-gray-300"
          {...register("title")}
        />
        <label htmlFor="media" className="w-72 text-right pb-2 pt-4">
          تصویر
        </label>
        <input
          type="text"
          id="media"
          className="w-72 h-9 rounded-lg bg-gray-300"
          {...register("media")}
        />
        <button
          type="submit"
          className="w-28 h-12 bg-rose-400 rounded-md mt-7 text-gray-100"
        >
          ارسال
        </button>
      </form>
    </div>
  );
};

export default UpdateHome;
