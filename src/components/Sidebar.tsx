import styled from "styled-components";
import Link from "../ui/Link";

import { BsXCircle } from "react-icons/bs";
import { useMemes } from "./meme/useMemes";

const StyledSidebarButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  color: #1bbc9b;
  transition: all 0.3s ease 0s;
  &:hover {
    color: #169b80;
  }
  &:active {
    color: #0e5c4c;
    transition: all 0.1s ease 0s;
  }
  @media (min-width: 500px) {
    display: none;
  }
`;

const StyledSidebar = styled.aside`
  position: relative;
  gap: 20px;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  background-color: #cecece;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  @media (max-width: 500px) {
    position: absolute;
    top: 0;
    left: -100%;
    width: 85%;
    height: 100vh;
    z-index: 10;
    justify-content: center;
    align-items: flex-end;
    padding-right: 1rem;
    transition: all 1s ease 0s;
    .menu-open & {
      left: 0;
      transition: all 1s ease 0s;
    }
  }
`;
const StyledDarkside = styled.div`
  display: none;
  top: 0;

  right: 0;
  width: 20%;
  height: 100%;
  position: absolute;
  background-color: #000000a0;
  transition: all 0.3s ease 0s;
  overflow: hidden;
  .menu-open & {
    right: -20%;
    display: block;
  }
  @media (min-width: 500px) {
    display: none;
  }
`;

export function menuInit() {
  if (document.querySelector(".icon-menu")) {
    document.addEventListener("click", function (e) {
      const eventTarget = e.target as HTMLElement;
      if (eventTarget.closest(".icon-menu")) {
        document.documentElement.classList.toggle("menu-open");
      }
    });
  }
}
export function menuOpen() {
  document.documentElement.classList.add("menu-open");
}
export function menuClose() {
  document.documentElement.classList.remove("menu-open");
}

export default function Sidebar() {
  const memes = useMemes();
  const firstMemeId = memes.memes?.at(0).id;
  return (
    <>
      <StyledSidebar>
        <StyledSidebarButton onClick={() => menuClose()}>
          <BsXCircle />
        </StyledSidebarButton>
        <Link onClick={() => menuClose()} to="/" addressName="Home" />
        <Link
          onClick={() => menuClose()}
          to={`memes/${firstMemeId}`}
          addressName="memes"
        />
        <Link
          onClick={() => menuClose()}
          to="/create-meme"
          addressName="Create Meme"
        />
        <StyledDarkside onClick={() => menuClose()} />
      </StyledSidebar>
    </>
  );
}
