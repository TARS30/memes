import { useMeme } from "./useMeme";
import { BsChevronCompactRight } from "react-icons/bs";
import { BsChevronCompactLeft } from "react-icons/bs";
import FullScreenButton from "../../ui/FullScreenButton";

import Comment from "../Comment";
import Input from "../../ui/Input";
import styled from "styled-components";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useMemes } from "./useMemes";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledTitle = styled.h2`
  text-align: center;
`;

const StyledImg = styled.img`
  max-width: 60%;
`;

const CommentsBlock = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 1rem auto;
`;
// export interface MemeProps {
//   meme: any;
// }

export default function Meme() {
  const memes = useMemes();
  const params = useParams();
  const navigate = useNavigate();
  const { meme, isLoading, error } = useMeme();

  const currentMeme = memes.memes?.at(Number(params.memeId) - 1);

  

  const nextMeme = () => {
    memes.memes?.at(Number(params.memeId) + 1);
    navigate(`/memes/${Number(params?.memeId) + 1}`);
  };
  const prevMeme = () => {
    memes.memes?.at(Number(params.memeId) - 1);
    navigate(`/memes/${Number(params?.memeId) - 1}`);
  };

  const memesQuantity = Number(memes.memes?.length) - 1;
  const lastMeme = memes.memes?.at(-1);
  
  // console.log(lastMeme)
  if (error) {
    throw new Error("meme not found");
  }

  const currentMemeId = Number(params.memeId);

  if (isLoading) {
    return <p>loading</p>;
  }

  const { id, name, description, image } = currentMeme;

  // const { id, name, description, image } = meme;

  const prevMemeHandler = () => {
    // if (currentMemeId === 1) {
    //   return;
    // }
    // navigate(`/memes/${id - 1}`);
    prevMeme();
  };
  const nextMemeHandler = () => {
    // if (currentMemeId === memesQuantity) {
    //   return;
    // }
    // navigate(`/memes/${id + 1}`);
    nextMeme();

  };

  return (
    <>
      <FullScreenButton
        disabled={currentMemeId === 1}
        icon={<BsChevronCompactLeft />}
        onClick={() => prevMemeHandler()}
      />
      <div>
        <StyledTitle>{name}</StyledTitle>
        <ImageContainer>
          <StyledImg src={image} alt="meme" />
          <p>{description}</p>
        </ImageContainer>
        <CommentsBlock>
          <Comment comment="text of comment" />
          <Comment comment="text of comment text of comment text of comment" />
          <Comment comment="text of comment" />
          <Input
            label="Write new comment"
            type={"text"}
            placeholder={"placeholder"}
          />
        </CommentsBlock>
      </div>
      <FullScreenButton
        disabled={currentMemeId === memesQuantity}
        onClick={() => nextMemeHandler()}
        icon={<BsChevronCompactRight />}
      />
    </>
  );
}
