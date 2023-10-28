import styled from "styled-components";

const StyledComment = styled.li`
  border: 1px solid #ffffff;
  flex: 1 1 auto;
  color: #ffffff;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export interface CommentProps {
  comment: string;
}

export default function Comment({ comment }: CommentProps) {
  return <StyledComment>{comment}</StyledComment>;
}
