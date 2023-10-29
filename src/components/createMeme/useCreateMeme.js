import toast from "react-hot-toast";

import { createEditMeme } from "../../services/apiMemes";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateMeme = () => {
  const queryClient = useQueryClient();

  const { mutate: createMeme, isLoading: isCreating } = useMutation({
    mutationFn: createEditMeme,
    onSuccess: () => {
      toast.success("new meme created");
      queryClient.invalidateQueries({ queryKey: ["meme"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createMeme };
};
