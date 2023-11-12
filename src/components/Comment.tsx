import styled from "styled-components";
import Input from "../ui/Input";

const StyledComment = styled.li`
  border: 1px solid #000000;
  flex: 1 1 auto;
  color: #000000;
  padding: 1rem;
  border-radius: 0.25rem;
`;

export interface CommentProps {
  comments: string;
}

export default function Comment({ comments }: CommentProps) {
  return (
    <>
      <StyledComment>{comments}</StyledComment>{" "}
      <Input
        label="Write new comment"
        type={"text"}
        placeholder={"placeholder"}
      />
      return{" "}
    </>
  );
}
