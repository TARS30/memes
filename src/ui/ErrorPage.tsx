import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";
import { HiArrowUturnLeft } from "react-icons/hi2";

export interface ErrorPageProps {
  message: any;
}

const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #fff;
  padding: 1rem;
  & button {
    color: #fff;
    width: 7rem;
    background: none;
    border: 1px solid #fff;
    border-radius: 3px;
    padding: 4px 1px;
    transition: all 0.3s ease 0s;
  }
  & button:hover {
    color: #a3a3a3;
    border-color: #a3a3a3;
    transition: all 0.3s ease 0s;
  }
  & button:active {
    color: #494949;
    border-color: #494949;
    transition: all 0.1s ease 0s;
  }
`;

export default function ErrorPage({ message }: ErrorPageProps) {
  const moveBack = useMoveBack();

  return (
    <StyledErrorPage>
      {message}
      <button onClick={moveBack}>
        <HiArrowUturnLeft /> Move Back
      </button>
    </StyledErrorPage>
  );
}
