import Main from "../components/Main";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import { Outlet } from "react-router-dom";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
`;

export default function AppLayout() {

return (
    <>
      <Header />
      <StyledDiv>
        <Sidebar />
        <Main>
          <Outlet />
        </Main>
      </StyledDiv>
    </>
  );
}