import styled from "styled-components";


const StyledMain = styled.main`
  background-color: #464646;
  display: flex;
  justify-content: space-between;
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
