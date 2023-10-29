import { useQuery } from "@tanstack/react-query";
import { getMeme } from "../../services/apiMemes";


export const useMeme = (memeId) => {
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
