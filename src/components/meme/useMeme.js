import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMeme } from "../../services/apiMemes";

export const useMeme = () => {
  const { memeId } = useParams();
  
  const {
    isLoading,
    data: meme,
    error,
  } = useQuery({
    queryKey: ["meme", memeId],
    queryFn: () => getMeme(memeId),
    retry: false,
  });

  return { isLoading, meme, error };
};
