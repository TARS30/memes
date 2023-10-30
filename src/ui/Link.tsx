import { NavLink } from "react-router-dom";
import styled from "styled-components";

export interface LinkProps {
  to: string;
  addressName: string;
  onClick: any;
}

const StyledNavLink = styled(NavLink)`
  color: green;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Link({ onClick, to, addressName }: LinkProps) {
  return (
    <div onClick={onClick}>
      <StyledNavLink to={to}>{addressName}</StyledNavLink>
    </div>
  );
}
