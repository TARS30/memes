import { useForm } from "react-hook-form";
import { useCreateMeme } from "./useCreateMeme";
import styled from "styled-components";
import FIleInput from "../../ui/fIleInput/FIleInput";

const StyledForm = styled.form`
  flex: 0 1 17rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100vh;
  padding: 1rem;
  & input {
    border-radius: 3px;
    border: none;
    padding: 0.75rem 0.5rem;
  }
`;

const StyledButton = styled.button`
  padding: 0.75rem 0.5rem;
  border: none;
  border-radius: 3px;
  transition: all 0.3s ease 0s;
  background-color: #1bbc9b;
  color: #fff;
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
      {/* <input
        disabled={isCreating}
        type="file"
        id="image"
        accept="image/*"
        {...register("image", {
          required: "This field is required",
        })}
      /> */}

      <FIleInput
        type="file"
        id="image"
        register={registerImageFunc}
        disabled={isCreating}
        accept="image/*"
      />

      <StyledButton disabled={isCreating} type="submit">
        submit
      </StyledButton>
    </StyledForm>
  );
}
