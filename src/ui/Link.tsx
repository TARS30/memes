import { NavLink } from "react-router-dom";
import styled from "styled-components";

export interface LinkProps {
  to: string;
  addressName: string;
}

const StyledNavLink = styled(NavLink)`
  color: green;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Link({ to, addressName }: LinkProps) {
  return <StyledNavLink to={to}>{addressName}</StyledNavLink>;
}
