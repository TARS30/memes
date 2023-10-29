import { useMeme } from "./useMeme";
import { useMemes } from "./useMemes";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

import Comment from "../Comment";
import Input from "../../ui/Input";
import styled from "styled-components";
import FullScreenButton from "../../ui/FullScreenButton";

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

export default function Meme() {
  const searchParams = useParams();
  const { meme, isLoading, error } = useMeme(searchParams.memeId);
  const memes = useMemes();
  const navigate = useNavigate();

  const newArray = [...(memes.memes ?? [])];

  const newArrayReverse = newArray.reverse();

  if (isLoading) {
    return <p>loading</p>;
  }
  if (error) {
    throw new Error("meme not found");
  }

  const { name, description, image } = meme;

  const lastMemeId = memes.memes?.at(-1).id;

  const currentMemeParams = Number(searchParams.memeId);

  const nextMemeId = memes.memes?.find(({ id }) => id > currentMemeParams);

  const prevMemeId = newArrayReverse?.find(({ id }) => id < currentMemeParams);

  const nextMemeHandler = () => {
    navigate(`/memes/${nextMemeId.id}`);
  };

  const prevMemeHandler = () => {
    navigate(`/memes/${prevMemeId.id}`);
  };

  return (
    <>
      <FullScreenButton
        disabled={currentMemeParams === 1}
        icon={<BsChevronCompactLeft />}
        onClick={() => prevMemeHandler()}
      />
      <div>
        <StyledTitle>{name || "qwe"}</StyledTitle>
        <ImageContainer>
          <StyledImg src={image || "asd"} alt="meme" />
          <p>{description || "qwe"}</p>
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
        disabled={currentMemeParams === lastMemeId}
        onClick={() => nextMemeHandler()}
        icon={<BsChevronCompactRight />}
      />
    </>
  );
}
