import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateMeme } from "./useCreateMeme";

import styled from "styled-components";
import SpinnerMini from "../../ui/SpinnerMini";
import FIleInput from "../../ui/fIleInput/FIleInput";

const StyledForm = styled.form`
  flex: 0 1 17rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 0.75rem;
  height: 100vh;
  padding: 2.5rem 1rem 1rem 1rem;
  & input {
    border-radius: 3px;
    border: none;
    padding: 0.75rem 0.5rem;
  }
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  border: none;
  border-radius: 3px;
  transition: all 0.3s ease 0s;
  background-color: #1bbc9b;
  color: #fff;
  gap: 10px;
  &:hover {
    background-color: #169b80;
  }
  &:active {
    background-color: #0e5c4c;
    transition: all 0.1s ease 0s;
  }
`;

export default function CreateMeme() {
  const { register, reset, handleSubmit } = useForm();
  const [isCreating, setIsCreating] = useState(false);
  const { createMeme } = useCreateMeme();

  const onSubmit = (data: any) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    setIsCreating(true);

    createMeme(
      { ...data, image: image },
      {
        onSuccess: () => {
          reset();
          setIsCreating(false);
        },
      }
    );
  };

  const registerImageFunc = {
    ...register("image", {
      required: "This field is required",
    }),
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Create meme Page</h2>
      <input
        disabled={isCreating}
        type="text"
        placeholder="meme name"
        id="name"
         {...register("name")}
         />
      <input
        disabled={isCreating}
        type="text"
        placeholder="description of meme"
        id="description"
        {...register("description")}
        />
      <input
        disabled={isCreating}
        type="text"
        placeholder="your name (not necessary)"
        id="author"
        {...register("author")}
      />
      <FIleInput
        type="file"
        id="image"
        register={registerImageFunc}
        disabled={isCreating}
        accept="image/*"
      />

      <StyledButton disabled={isCreating} type="submit">
        <span>Submit</span>
        {isCreating ? <SpinnerMini /> : null}
      </StyledButton>
    </StyledForm>
  );
}
