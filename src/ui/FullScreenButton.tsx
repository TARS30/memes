import { styled } from "styled-components";

export interface FullScreenButtonProps {
  icon: any;
  onClick: Function;
  disabled: boolean;
}

const ButtonContainer = styled.div`
  height: 100vh;
`;

const StyledButton = styled.button`
  background-color: #cccccc44;
  height: 100%;
  border: none;
  font-size: 50px;
  transition: all 0.3s ease 0s;
  &:hover {
    cursor: pointer;
    background-color: #b1b1b144;
    transition: all 0.3s ease 0s;
  }
  &:active {
    background-color: #72727244;
    transition: all 0.1s ease 0s;
  }
  &:disabled:hover {
    cursor: not-allowed;
    background-color: #cccccc44;
  }
`;
export default function FullScreenButton({
  disabled,
  onClick,
  icon,
}: FullScreenButtonProps) {
  return (
    <ButtonContainer>
      <StyledButton disabled={disabled} onClick={() => onClick()}>
        {icon}
      </StyledButton>
    </ButtonContainer>
  );
}
