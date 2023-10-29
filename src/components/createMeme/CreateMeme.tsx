import { useForm } from "react-hook-form";
import { useCreateMeme } from "./useCreateMeme";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100vh;
  padding-top: 1rem;
  padding-left: 1rem;
`;

export default function CreateMeme() {
  const { register, reset, handleSubmit } = useForm();

  const { isCreating, createMeme } = useCreateMeme();

  const onSubmit = (data: any) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    createMeme(
      { ...data, image: image },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input
        disabled={isCreating}
        type="text"
        placeholder="meme name"
        id="name"
        {...register("name", {
          required: "This field is required",
        })}
      />
      <input
        disabled={isCreating}
        type="text"
        placeholder="description of meme"
        id="description"
        {...register("description", {
          required: "This field is required",
        })}
      />
      <input
        disabled={isCreating}
        type="file"
        id="image"
        accept="image/*"
        {...register("image", {
          required: "This field is required",
        })}
      />
      <button disabled={isCreating} type="submit">
        submit
      </button>
    </StyledForm>
  );
}
