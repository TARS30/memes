import { useMeme } from "./useMeme";
import { useMemes } from "./useMemes";
import { useNavigate, useParams } from "react-router-dom";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

import Comment from "../Comment";
import Input from "../../ui/Input";
import styled from "styled-components";
import FullScreenButton from "../../ui/FullScreenButton";
import Spinner from "../../ui/Spinner";
import ErrorPage from "../../ui/ErrorPage";
import { useMoveBack } from "../../hooks/useMoveBack";

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
const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1rem;
`;
const FlexDiv = styled.div`
  flex: 1 1 100%;
  display: flex;
  justify-content: space-between;
`;
const WideDiv = styled.div`
  width: 100%;
`;
export default function Meme() {
  const searchParams = useParams();
  const { meme, isLoading, error } = useMeme(searchParams.memeId);
  const memes = useMemes();
  const navigate = useNavigate();

  const newArray = [...(memes.memes ?? [])];

  const newArrayReverse = newArray.reverse();

  const moveBack = useMoveBack();

  if (isLoading) {
    return (
      <WideDiv>
        <FlexDiv>
          <FullScreenButton
            disabled={true}
            icon={<BsChevronCompactLeft />}
            onClick={() => prevMemeHandler()}
          />
          <WideDiv>
            <Spinner />
          </WideDiv>
          <FullScreenButton
            disabled={true}
            onClick={() => nextMemeHandler()}
            icon={<BsChevronCompactRight />}
          />
        </FlexDiv>
      </WideDiv>
    );
  }
  if (error) {
    return (
      <WideDiv>
        <FlexDiv>
          <FullScreenButton
            disabled={true}
            icon={<BsChevronCompactLeft />}
            onClick={() => prevMemeHandler()}
          />
          <WideDiv>
            <ErrorPage message={error.message} />
            <button onClick={moveBack}>Move Back</button>
          </WideDiv>
          <FullScreenButton
            disabled={true}
            onClick={() => nextMemeHandler()}
            icon={<BsChevronCompactRight />}
          />
        </FlexDiv>
      </WideDiv>
    );
  }

  const { name, description, image } = meme;

  const lastMemeId = memes.memes?.at(-1).id;
  const firstMemeId = memes.memes?.at(0).id;
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
        disabled={currentMemeParams === firstMemeId}
        icon={<BsChevronCompactLeft />}
        onClick={() => prevMemeHandler()}
      />

      <StyledDiv>
        <StyledTitle>{name}</StyledTitle>
        <ImageContainer>
          <StyledImg src={image} alt="meme" />
          <p>{description}</p>
        </ImageContainer>
        <CommentsBlock>
          <Comment comment="text of comment" />
          <Input
            label="Write new comment"
            type={"text"}
            placeholder={"placeholder"}
          />
        </CommentsBlock>
      </StyledDiv>

      <FullScreenButton
        disabled={currentMemeParams === lastMemeId}
        onClick={() => nextMemeHandler()}
        icon={<BsChevronCompactRight />}
      />
    </>
  );
}
