import { BsList } from "react-icons/bs";
import { menuOpen } from "./Sidebar";

import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem;
  background: #0f7f83a4;
  width: 100%;
`;

const StyledHeaderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  width: 2rem;
  height: 2rem;
  border-radius: 3px;
  color: #363636;
  transition: all 0.2s ease 0s;
  &:active {
    background-color: #0a5658a3;
    color: #525252;
  }
  @media (min-width: 500px) {
    display: none;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderButton onClick={() => menuOpen()}>
        <BsList />
      </StyledHeaderButton>
      <h3>Header</h3>
    </StyledHeader>
  );
}
