import styled from "styled-components";
import Link from "../ui/Link";

const StyledSidebar = styled.aside`
  gap: 20px;
  display: flex;
  flex-direction: column;
  background-color: #cecece;
  padding-top: 1rem;
  padding-left: 1rem;
`;



export default function Sidebar() {
  return (
    <StyledSidebar>
      <Link to="/" addressName="Home" />
      <Link to="/memes/1" addressName="memes" />
      <Link to="/create-meme" addressName="Create Meme" />
    </StyledSidebar>
  );
}
