import Main from "../components/Main";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  overflow: hidden;
  margin: 0 auto;
  min-height: 100vh;
  `;
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
  min-width: 100%;
  min-height: 100vh;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <StyledDiv>
        <Sidebar />
        <Main>
          <Outlet />
        </Main>
      </StyledDiv>
    </StyledAppLayout>
  );
}
