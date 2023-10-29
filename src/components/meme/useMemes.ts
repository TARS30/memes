import { useQuery } from "@tanstack/react-query";
import { getMemes } from "../../services/apiMemes";

export const useMemes = () => {
  const {
    isLoading,
    data: memes,
    error,
  } = useQuery({
    queryKey: ["memes"],
    queryFn: () => getMemes(),
  });

  return { isLoading, memes, error };
};
