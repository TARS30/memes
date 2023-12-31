import { useMeme } from "./useMeme";
import { useMemes } from "./useMemes";
import { useNavigate, useParams } from "react-router-dom";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

// import Comment from "../Comment";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import ErrorPage from "../../ui/ErrorPage";
import FullScreenButton from "../../ui/FullScreenButton";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;
const StyledTitle = styled.h2`
  text-align: center;
`;
const StyledImg = styled.img`
  max-width: 60%;
`;
// const CommentsBlock = styled.ul`
//    display: flex;
//    align-items: center;
//    flex-direction: column;
//    gap: 1rem;
//    max-width: 500px;
//    margin: 1rem auto;
//  `;
const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
  gap: 1.5rem;
`;
const FlexDiv = styled.div`
  flex: 1 1 100%;
  display: flex;
  justify-content: space-between;
`;
const WideDiv = styled.div`
  width: 100%;
`;
const StyledDate = styled.p`
  margin-left: auto;
  font-size: 15px;
  font-weight: 600;
  & span {
    font-size: 10px;
    font-weight: 300;
  }
`;

export default function Meme() {
  const searchParams = useParams();

  const { meme, isLoading, error } = useMeme(searchParams.memeId);

  const memes = useMemes();
  
  const navigate = useNavigate();

  const newArray = [...(memes.memes ?? [])];

  const newArrayReverse = newArray.reverse();

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

  const { name, author, created_at, description, image } = meme;
  
  const formateDate = created_at.split("T")[0];
  const formateTime = created_at.split("T")[1].split(".")[0];

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
        <StyledDate>
          Posted at:
          <span>
            {" "}
            {formateDate} {formateTime}
          </span>
          <br/>
          By: {author}
        </StyledDate>
        {/* <CommentsBlock>
          <Comment comments={'comment'}/>
         
        </CommentsBlock> */}
      </StyledDiv>

      <FullScreenButton
        disabled={currentMemeParams === lastMemeId}
        onClick={() => nextMemeHandler()}
        icon={<BsChevronCompactRight />}
      />
    </>
  );
}
