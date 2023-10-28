import { useForm } from "react-hook-form";
import { useCreateMeme } from "./useCreateMeme";

export default function CreateMeme() {

  const { register, reset, handleSubmit, getValues, formState } = useForm();

  const { isCreating, createMeme } = useCreateMeme();

  const onSubmit = (data:any) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    createMeme(
      { ...data, image: image },
      {
        onSuccess: () => {
          console.log('success')
          reset();
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="meme name"
        id="name"
        {...register("name", {
          required: "This field is required",
        })}
      />
      <input
        type="text"
        placeholder="description of meme"
        id="description"
        {...register("description", {
          required: "This field is required",
        })}
      />
      <input
      type="file"
        id="image"
        accept="image/*"
        {...register("image", {
          required: "This field is required",
        })}
      />
      <button type="submit">submit</button>
    </form>
  );
}
