import styled from "styled-components";

const StyledMain = styled.main`
  background-color: #eeeeee;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
`;

export interface MainProps {
  children: any;
}

export default function Main({ children }: MainProps) {
  return (
    <StyledMain>
        {children}
    </StyledMain>
  );
}
