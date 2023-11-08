import styled from "styled-components";


const StyledMain = styled.main`
  background-color: #464646;
  display: flex;
  justify-content: space-between;
  max-height: 100%;
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
